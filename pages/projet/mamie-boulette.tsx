import Image from "next/image";
import { useRouter } from "next/router";
import {
    navigateToPreviousProject,
    navigateToNextProject,
} from "../../components/type";
export default function MamieBoulette({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToPreviousProject(3));
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
                            router.push(navigateToNextProject(3));
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
                src={"/images/MB/MAMIEB-couv.jpg"}
                alt={"Couverture de page du projet shift"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-7/12 w-100">
                    <Image
                        src={"/images/MB/MB-2.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={710}
                        width={1041}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div
                    className="md:w-1/4 md:ml-20 w-100"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                        Logotype pour <br></br> une enseigne <br></br> de
                        sandwich à <br></br> base de boulettes
                    </h2>
                    <p className="detail-text mb-3">
                        On ne pouvait pas proposer un logotype Mamie Boulette
                        sans tenter d’incarner le personnage que suggère le nom
                        ! L’illustration est la traduction en personnage stylisé
                        de la mamie et des boulettes : un visage fait de cercles
                        reflétant la bienveillance, le plaisir et la
                        gourmandise. Tout est dit dans ce visage ! Une promesse
                        de plaisir gustatif préparé avec amour. Plusieurs types
                        de marquage sont possibles à partir de la typographie
                        dessinée, jusqu’à l’acronyme MB.
                    </p>
                </div>
            </div>
            <div className="custom-container mx-auto">
                <div>
                    <Image
                        src={"/images/MB/MB-3.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={500}
                        width={904}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="custom-container mx-auto ">
                <div>
                    <Image
                        src={"/images/MB/MB-4.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={500}
                        width={904}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="custom-container mx-auto mt-8">
                <div>
                    <Image
                        src={"/images/MB/MB-5.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={500}
                        width={904}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}
