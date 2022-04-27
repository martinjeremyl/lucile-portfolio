import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { slides } from "./type";
import { NextButton, PrevButton } from "./carouselButtons";
import Image from "next/image";

export default function EmblaCarousel({ Component, pageProps }) {
    let titleIndex = 0;

    const [viewportRef, embla] = useEmblaCarousel({
        skipSnaps: false,
        startIndex: 1,
        loop: true,
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [title, setTitle] = useState(slides[0].title);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const scrollPrev = useCallback(() => {
        return embla && embla.scrollPrev();
    }, [embla]);
    const scrollNext = useCallback(() => {
        return embla && embla.scrollNext();
    }, [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setTitle(slides[embla.selectedScrollSnap()].title);
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);
    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);
    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                        {slides.map((slide, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__inner">
                                    <Image
                                        className="embla__slide__img"
                                        src={slide.url}
                                        alt={slide.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={10}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-between mb-4 mt-5 md:mt-10 items-center">
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <div className="text-4xl gradual text-center">{title}</div>
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
        </>
    );
}
