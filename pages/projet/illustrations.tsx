import Image from "next/image";
import { useRouter } from "next/router";
import {
    navigateToPreviousProject,
    navigateToNextProject,
} from "../../components/type";
export default function Illustrations({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToPreviousProject(7));
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
                            router.push(navigateToNextProject(7));
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
                src={"/images/ILLU-FLEUR/ILLU-couv.jpg"}
                alt={"Couverture de page du projet shift"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="lg:w-1/4 md:w-1/3 w-100">
                    <Image
                        src={"/images/illustrations/illustrations.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations10.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/3    md:w-1/3 w-100 md:ml-20 w-100 ">
                    <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                        Quelques illustrations réalisées à titre personnel.
                    </h2>
                    <p className="detail-text mb-3">
                        Chacune de ces illustrations ont été réalisées sur
                        Illustrator ou procreate. Certaines font partie de
                        projets, d’autres sont des petites animations pour
                        m’entraîner et d’autres seulement des illustrations
                        personnelles.
                    </p>
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-4">
                <div className="lg:w-1/4 md:w-1/3 w-100">
                    <Image
                        src={"/images/illustrations/illustrations12.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations5.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations9.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations11.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-4">
                <div className="lg:w-1/4 md:w-1/3 w-100">
                    <Image
                        src={"/images/illustrations/illustrations8.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations6.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations7.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations3.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-4">
                <div className="lg:w-1/4 md:w-1/3 w-100">
                    <video autoPlay loop muted playsInline>
                        <source
                            src="/images/illustrations/video-output-4048A765-03F0-4946-9C4D-95C4C444FBE1.MP4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations4.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <video autoPlay loop muted playsInline>
                        <source
                            src="/images/illustrations/video-output-2E58F44F-4DB7-4B97-A372-E5813F60F43B.MP4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="lg:w-1/4 md:w-1/3 md:ml-4 w-100">
                    <Image
                        src={"/images/illustrations/illustrations2.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={822}
                        width={588}
                        priority={true}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}
