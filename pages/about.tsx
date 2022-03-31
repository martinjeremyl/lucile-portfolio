import Image from "next/image";

export default function About({ Component, pageProps }) {
    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="md:flex">
                <div className="md:w-1/2 relative blue-text-container p-8">
                    <img
                        src="/icons/cv.svg"
                        className="cv absolute top-0 right-0"
                    />
                    De nature <span className="underline">passionnée</span>,
                    <br></br>
                    <span className="underline">dynamique et atypique</span> on
                    <br></br>
                    me surnomme Luluberlu !<br></br>
                    Ce que j&apos;aime dans le métier<br></br>
                    c&apos;est la{" "}
                    <span className="underline">diversité des projets</span> et
                    <br></br>
                    <span className="underline">
                        rendre vivant ce qui ne l&apos;est pas.
                    </span>
                    <br></br>
                    Avec une dose{" "}
                    <span className="underline">d&apos;énergie</span>,<br></br>{" "}
                    une dose de <span className="underline">passion</span> et
                    une pointe de<br></br>
                    <span className="underline">détermination</span>, un{" "}
                    <span className="underline">combo parfait</span>
                    <br></br> pour réaliser le plus{" "}
                    <span className="underline"> fou des projets.</span>
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
            <div className="md:flex mt-4">
                <div className="md:w-1/2 p-6">
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
                <div className="md:w-1/2 text-xl p-8">
                    <p>
                        En bref, je suis Lucile. Une directrice artistique
                        junior indépendante passionnée et déterminé.
                    </p>
                    <br></br>
                    <p>
                        Après un échange ensemble, nous pouvons tout réaliser.
                        Le studio vous accompagnera dans la réalisation
                        d’identités visuelles, de contenus digitaux, vos
                        packaging ainsi que sur tous les visuels demandé.
                    </p>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>
                        Le surf est ma principale passion autant pour les
                        sensations que ce sport procure, autant pour l’état
                        d’esprit qui véhicule !
                    </p>{" "}
                    <br></br>
                    <p>
                        Les voyages parce que c’est enrichissant dans tous les
                        sens du termes !
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
                    J’ai toujours collectionné les chaussettes colorées au
                    motifs les plus farfelues
                </div>
            </div>
        </div>
    );
}
