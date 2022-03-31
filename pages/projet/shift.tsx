import Image from "next/image";
import { useRouter } from "next/router";
import {
    navigateToPreviousProject,
    navigateToNextProject,
} from "../../components/type";
export default function Shift({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToPreviousProject(0));
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
                            router.push(navigateToNextProject(0));
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
                src={"/images/shift/SHIFT-couv2.jpg"}
                alt={"Couverture de page du projet shift"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-1/2 w-100">
                    <Image
                        src={"/images/shift/11-SHIFT.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={888}
                        width={1041}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/12"></div>
                <div className="md:w-1/4 md:ml-6 w-100">
                    <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                        Une marque de chaussures ayant un concept à but
                        écologique.
                    </h2>
                    <p className="detail-text mb-3">
                        Shift est une marque de baskets vegan qui fabrique
                        chacune de ces paires grâce à la récupération de chutes
                        de tissus, ainsi que de rouleaux de tissus inutilisés.
                    </p>
                    <p className="detail-text mb-3">
                        Vous pouvez personnaliser vos baskets avec vos propres
                        tissus en envoyant vos t-shirts ou morceaux de tissu et
                        Shift fabriquera votre paire de baskets uniques.
                    </p>
                    <p className="detail-text mb-3">
                        Shift offre aussi la possibilité de participer au
                        mouvement en envoyant vos tissus inutilisés pour
                        permettre l’upcycling de vos tissus et obtenir une
                        réduction sur votre prochaine paire
                    </p>
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-1/2">
                    <Image
                        src={"/images/shift/shift.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={440}
                        width={600}
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={"/images/shift/shift2.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={440}
                        width={600}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-1/2">
                    <Image
                        src={"/images/shift/shifttt2.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={1054}
                        width={904}
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={"/images/shift/shifttt.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={1054}
                        width={904}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}
