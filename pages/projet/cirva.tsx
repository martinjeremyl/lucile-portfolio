import Image from "next/image";
import { useRouter } from "next/router";
import {
    navigateToPreviousProject,
    navigateToNextProject,
} from "../../components/type";
export default function Cirva({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToPreviousProject(6));
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
                            router.push(navigateToNextProject(6));
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
                src={"/images/CIRVA/CIRVA-couv.jpg"}
                alt={"Couverture de page du projet shift"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-7/12 w-100">
                    <Image
                        src={"/images/CIRVA/cirva2.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={710}
                        width={1041}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/4 md:ml-20 w-100">
                    <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                        Edition sur <br></br> le CIRVA <br></br>
                        l&apos;éco-conception
                    </h2>
                    <p className="detail-text mb-3">
                        Cette édition est destinée aux artisans, aux artistes,
                        aux designers... Elle regroupe des techniques de
                        fabrication, des solutions d’ecoconception, des
                        ouvertures sur de nouveaux designs. C’est une édition
                        qui fait le lien entre l’écoconception et les designers
                        d’aujourd’hui. Elle présente un artisanat tourné vers le
                        futur.
                    </p>
                </div>
            </div>
            <div className="custom-container mx-auto mt-8">
                <div>
                    <video autoPlay loop muted>
                        <source
                            src="/images/CIRVA/CRV-VIDEO.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        </div>
    );
}
