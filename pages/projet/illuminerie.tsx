import Image from "next/image";
import { useRouter } from "next/router";
import {
    navigateToPreviousProject,
    navigateToNextProject,
} from "../../components/type";
export default function Illuminerie({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToPreviousProject(2));
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
                                className="cls-1 stroke-white"
                                d="M45.89,65.6,18.08,36l28-29.95"
                            />
                        </svg>
                    </button>
                </div>
                <div className="absolute right-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToNextProject(2));
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
                                className="cls-1 stroke-white"
                                d="M18.3,6.05,46.11,35.66l-28,29.94"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <Image
                src={"/images/ILLUMINERIE/illuminerie-couv2.jpg"}
                alt={"Couverture de page du projet de l'illuminerie"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex flex-row custom-container mx-auto">
                <div className="md:w-7/12 w-100">
                    <Image
                        src={"/images/ILLUMINERIE/illu.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={710}
                        width={1041}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div
                    className="md:w-1/4 md:ml-20 w-100 md:flex flex-col self-center"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <div>
                        <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                            Retail Média change de nom, <br></br>de logo et de
                            charte graphique.
                        </h2>
                        <p className="detail-text mb-3">
                            Nous avons voulu exprimer cette précision, cette
                            rigueur. Le logotype est quasiment un mot-image où
                            la géométrie, le ratio noir et blanc, créent une
                            vibration suggérant le mouvement. Ce marquage est à
                            lui seul un territoire, un univers.
                        </p>
                        <p>
                            La composition du marquage et son rythme sont
                            adoucis par les arrondis de l&apos;intérieur des
                            lettres. La rondeur des points sur les i vient
                            pertuber et ponctuer la linéarité du marquage. C’est
                            un marquage que l&apos;on a envie d’animer...
                        </p>
                    </div>
                </div>
            </div>
            <div className="custom-container mx-auto mt-8">
                <div>
                    <Image
                        src={"/images/ILLUMINERIE/illuminerie.jpg"}
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
                        src={"/images/ILLUMINERIE/4-TLDM.jpg"}
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
