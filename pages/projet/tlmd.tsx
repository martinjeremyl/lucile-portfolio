import Image from "next/image";
import { useRouter } from "next/router";
import {
    navigateToPreviousProject,
    navigateToNextProject,
} from "../../components/type";
export default function Tlmd({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 top-6">
                    <button
                        onClick={() => {
                            router.push(navigateToPreviousProject(5));
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
                            router.push(navigateToNextProject(5));
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
                src={"/images/TLMD/TLMD-couv.jpg"}
                alt={"Couverture de page du projet tout le monde dehors"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex flex-row custom-container mx-auto mt-8">
                <div className="md:w-1/2 w-100">
                    <Image
                        src={"/images/TLMD/1-TLMD.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={888}
                        width={1041}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div
                    className="md:w-2/6 md:ml-20 w-100 md:flex flex-col self-center"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <div>
                        <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                            Logotype pour <br></br>une galerie d&apos;art
                            <br></br>extérieur à la Rochelle.
                        </h2>
                        <p className="detail-text mb-3">
                            Tout le monde dehors est une galerie qui souhaite
                            que ses murs extérieurs ne soient plus tout
                            simplement des murs mais une explosion artistique
                            d’émotions, de couleurs et de joie. Nous avons donc
                            utilisé une identité riche en couleurs et en
                            iconographie pour exprimer la diversité des émotions
                            et oeuvres proposées.
                        </p>
                    </div>
                    <div className="mt-16">
                        <Image
                            src={"/images/TLMD/2-TLMD.jpg"}
                            alt={"Chaussures SHIFT"}
                            height={300}
                            width={600}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>

            <div className="custom-container mx-auto mt-8">
                <div>
                    <Image
                        src={"/images/TLMD/3-TLMD.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={150}
                        width={904}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="custom-container mx-auto mt-8">
                <Image
                    src={"/images/TLMD/5-TLMD.jpg"}
                    alt={"Chaussures SHIFT"}
                    height={500}
                    width={904}
                    layout="responsive"
                />
            </div>
        </div>
    );
}
