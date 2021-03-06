import Image from "next/image";

export default function About({ Component, pageProps }) {
    return (
        <div className="custom-container pb-20 mx-auto px-4 md:px-0">
            <div className="md:flex">
                <div
                    className="md:w-1/2 relative blue-text-container pt-20 md:pt-12 p-5 md:p-8"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    De nature <span className="underline">passionnée</span>
                    ,&nbsp;
                    <br></br>
                    <span className="underline">dynamique et atypique</span> on
                    &nbsp; <br></br>
                    me surnomme Luluberlu !&nbsp; <br></br>
                    Ce que j&apos;aime dans le métier&nbsp; <br></br>
                    c&apos;est la{" "}
                    <span className="underline">diversité des projets</span> et
                    &nbsp; <br></br>
                    <span className="underline">
                        rendre vivant ce qui ne l&apos;est pas.
                    </span>
                    &nbsp; <br></br>
                    Avec une dose{" "}
                    <span className="underline">
                        d&apos;énergie
                    </span>,&nbsp; <br></br> une dose de{" "}
                    <span className="underline">passion</span> et une pointe de
                    <br></br>
                    <span className="underline">détermination</span>, un{" "}
                    <span className="underline">combo parfait</span>
                    &nbsp; <br></br> pour réaliser le plus{" "}
                    <span className="underline"> fou des projets.</span>
                    <a href="/files/cv-lucile-russo.pdf" download>
                        <img
                            src="/icons/cv.svg"
                            className="cv absolute top-0 right-0"
                        />
                    </a>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={"/images/about/IMG_7370.jpg"}
                        alt={
                            "Couverture de page du projet tout le monde dehors"
                        }
                        height={500}
                        width={570}
                        priority={true}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4">
                <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
                    <Image
                        src={"/images/about/about.jpg"}
                        alt={
                            "Couverture de page du projet tout le monde dehors"
                        }
                        height={600}
                        width={525}
                        priority={true}
                        layout="responsive"
                    />
                </div>
                <div
                    className="w-full md:w-1/2 text-xl p-8 order-1 md:order-2"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                >
                    <p>
                        En bref, je suis Lucile. Une directrice artistique
                        junior indépendante passionnée et déterminée.
                    </p>
                    <br></br>
                    <p>
                        Après un échange ensemble, nous pouvons tout réaliser.
                        Le studio vous accompagnera dans la réalisation
                        d’identités visuelles, de contenus digitaux, de vos
                        packagings ainsi que sur tous les visuels demandés.
                    </p>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>
                        Le surf est ma principale passion autant pour les
                        sensations que ce sport procure que pour l’état d’esprit
                        qui véhicule !
                    </p>{" "}
                    <br></br>
                    <p>
                        Les voyages, parce que c’est enrichissant dans tous les
                        sens du terme !
                    </p>{" "}
                    <br></br>
                    <p>
                        J’aime les oiseaux de paradis parce que c’est coloré,
                        original et parce que c’est des oiseaux et que ça vient
                        du paradis !
                    </p>{" "}
                    <br></br>
                    <p>Une obsession pour le ... Pic et croque !</p>{" "}
                    <p>
                        La broderie est l’un de mes nouveaux hobbies. Rencontrer
                        des gens autour d’une bière ça fait toujours plaisir.
                    </p>{" "}
                    <br></br>
                    J’ai toujours collectionné les chaussettes colorées aux
                    motifs les plus farfelus
                </div>
            </div>
        </div>
    );
}
