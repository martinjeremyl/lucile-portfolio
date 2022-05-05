import Image from "next/image";
import { useRouter } from "next/router";
import {
    navigateToPreviousProject,
    navigateToNextProject,
} from "../../components/type";
export default function Transformer({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToPreviousProject(1));
                        }}
                        className="embla__button embla__button--prev"
                    >
                        <svg
                            className="embla__button__svg"
                            viewBox="0 0 58.98 72"
                        >
                            <path
                                id="Tracé_40"
                                data-name="Tracé 40"
                                className="cls-1"
                                d="M45.89,65.6,18.08,36l28-29.95"
                            />
                        </svg>
                    </button>
                </div>
                <div className="absolute right-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToNextProject(1));
                        }}
                        className="embla__button embla__button--next"
                    >
                        <svg
                            className="embla__button__svg"
                            viewBox="0 0 58.98 72"
                        >
                            <path
                                id="Tracé_40"
                                data-name="Tracé 40"
                                className="cls-1"
                                d="M18.3,6.05,46.11,35.66l-28,29.94"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <Image
                src={"/images/FESTIVAL/TRANS-couv.jpg"}
                alt={"Couverture de page du projet shift"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex custom-container items-center mx-auto mt-8">
                <div className="md:w-1/2 w-100">
                    <video autoPlay loop muted>
                        <source
                            src="/images/FESTIVAL/TRS.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="md:w-1/12"></div>
                <div
                    className="md:w-1/4 md:ml-20 w-100 self-center"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                        Festival autour <br></br> du personnage <br></br> de
                        Camille Claudel.
                    </h2>
                    <p className="detail-text mb-3">
                        Trans-former est le résultat du lien entre le personnage
                        de Camille Claudel une sculptrice détruite par la
                        passion au 19ème siècle et sa reconstruction par la
                        liberté d’expression que l’on possède aujourd’hui. Ce
                        festival a pour but de permettre aux participants de
                        s’exprimer par différents moyens tels que la musique, le
                        tatouage, les ateliers de kintsugi, de jardinage, la
                        peinture, la couture...
                    </p>
                    <p className="detail-text mb-3">
                        Le principe de cette identité est basé sur la
                        reconstruction, la réparation de ce qui a été brisé.
                    </p>
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-1/2">
                    <Image
                        src={"/images/FESTIVAL/feed.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={960}
                        width={960}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={"/images/FESTIVAL/telephone.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={960}
                        width={960}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-1/2">
                    <Image
                        src={"/images/FESTIVAL/transformer-1.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={1105}
                        width={917}
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={"/images/FESTIVAL/transformer-12.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={1105}
                        width={917}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}
