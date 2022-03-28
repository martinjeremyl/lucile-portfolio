import Image from "next/image";

export default function MamieBoulette({ Component, pageProps }) {
    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0  ml-6 top-6">
                    <button className="embla__button embla__button--prev">
                        <svg
                            className="embla__button__svg fill-white"
                            viewBox="137.718 -1.001 366.563 644"
                        >
                            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
                        </svg>
                    </button>
                </div>
                <div className="absolute right-0 mr-6 top-6 next-project">
                    <button className="absolute embla__button embla__button--next">
                        <svg
                            className="embla__button__svg fill-white"
                            viewBox="0 0 238.003 238.003"
                        >
                            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
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
                <div className="md:w-1/4 md:ml-20 w-100 self-center">
                    <h2 className="mt-2 mb-8 text-3xl md:text-4xl">
                        Logotype et un <br></br> univers graphique <br></br>{" "}
                        pour le théâtre <br></br> de Nîmes
                    </h2>
                    <p className="detail-text mb-3">
                        Notre démarche : trouver un signe fort, simple et
                        évident avec une richesse de sens. Le mot théâtre et
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
                <div className="md:w-1/3 ml-10">
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
