import { slides } from "../components/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Work({ Component, pageProps }) {
    return (
        <div className="text-center grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="hoverable-image transparent-hoverable"
                    style={{ position: "relative", height: "450px" }}
                >
                    <Link href="/" passHref>
                        <a>
                            <Image
                                className="cursor-pointer"
                                src={slide.url}
                                alt={slide.alt}
                                layout="fill"
                                objectFit="cover"
                            />
                        </a>
                    </Link>
                    <span className="hoverable-text gradual">
                        Des chaussures très cool
                    </span>
                </div>
            ))}
        </div>
    );
}
