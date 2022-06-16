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
                            router.push(navigateToPreviousProject(4));
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
                            router.push(navigateToNextProject(4));
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
                src={"/images/TN/TN-couv.jpg"}
                alt={"Couverture de page du projet shift"}
                height={260}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-7/12 w-100">
                    <Image
                        src={"/images/TN/1-TN.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={710}
                        width={1041}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div
                    className="md:w-1/4 md:ml-20 w-100 self-center"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                        Logotype et un <br></br> univers graphique <br></br>{" "}
                        pour le théâtre <br></br> de Nîmes
                    </h2>
                    <p className="detail-text mb-3">
                        Notre démarche : trouver un signe fort, simple et
                        évident avec une richesse de sens. Les mots théâtre et
                        Nîmes ont en commun l’accent circonflexe. Graphiquement,
                        ce signe est l’union entre l’accent grave et l’accent
                        aigu. L’usage que nous retenons ici est l’indication
                        écrite de la prononciation.
                    </p>
                    <p className="detail-text mb-3">
                        En mettant en avant l’accent circonflexe, nous
                        signifions l’union entre théâtre et Nîmes, la sonorité
                        comme dimension centrale des arts mis en avant par le
                        Théâtre de Nîmes. Il peut représenter une flèche qui
                        indique le haut du bas : il évoque entre autres le
                        domaine de la danse, de sa pratique qui impose de
                        déjouer la pesanteur.
                    </p>
                </div>
            </div>
            <div className="md:flex custom-container mx-auto mt-8">
                <div className="md:w-1/5">
                    <Image
                        src={"/images/TN/5-TN.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={596}
                        width={271}
                        layout="responsive"
                    />
                </div>
                <div className="md:w-4/5">
                    <Image
                        src={"/images/TN/2-TN.jpg"}
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
                        src={"/images/TN/3-TN.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={1010}
                        width={1806}
                        layout="responsive"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="custom container mx-auto mt-8">
                <div
                    className="md:w-1/3 ml-10"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <h3>CUSTOM TYPE</h3>
                    <p className="detail-text mt-4">
                        Les courbes de certaines lettres sont retravaillées pour
                        créer du mouvement et de la singularité. Pour mettre en
                        avant l&apos;accent circonflexe en tant que signe, les
                        lettres associées ont été supprimées.
                    </p>
                </div>
            </div>
            <div className="custom-container mx-auto">
                <div>
                    <Image
                        src={"/images/TN/44-TN.jpg"}
                        alt={"Chaussures SHIFT"}
                        height={786}
                        width={1806}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    );
}
