import Image from "next/image";

export default function Illuminerie({ Component, pageProps }) {
    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="relative z-30 w-100">
                <div className="absolute left-0 ml-4 top-6">
                    <button className="embla__button embla__button--prev">
                        <svg
                            className="embla__button__svg fill-white"
                            viewBox="137.718 -1.001 366.563 644"
                        >
                            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
                        </svg>
                    </button>
                </div>
                <div className="absolute right-0 mr-4 top-6 next-project">
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
                <div className="md:w-1/4 md:ml-20 w-100 md:flex flex-col self-center">
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
