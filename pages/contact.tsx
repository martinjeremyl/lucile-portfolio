import Image from "next/image";
import Link from "next/link";

export default function Contact({ Component, pageProps }) {
    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <Image
                src={"/images/contact.jpg"}
                alt={"Couverture de page du projet shift"}
                height={200}
                width={600}
                priority={true}
                layout="responsive"
            />
            <div className="p-8 blue-background md:flex md:flex-row">
                <div
                    className="md:w-1/3"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-sine"
                >
                    <h3>Logo & Motion</h3>
                    <p>
                        À vos côtés, je créerai une identité visuelle qui vous
                        correspond. Celle-ci reflétera vos valeurs et vos
                        ambitions.<br></br> Avec une image de marque adéquate,
                        vous aurez toutes les clés pour une stratégie de
                        communication solide.
                    </p>
                </div>
                <div
                    className="mt-4 md:mt-0 md:ml-2 md:w-1/3"
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine"
                >
                    <h3>Illustrations</h3>
                    <p>
                        Passionnée de dessin depuis toujours, ce serait un
                        plaisir pour moi de pouvoir illustrer vos demandes.
                        <br></br>
                        Affiches, motifs ou cartes postales, je peux réaliser
                        tous types d’illustrations. Chaque demande est un défi
                        que je compte relever avec créativité et précision.
                    </p>
                </div>
                <div
                    className="mt-4 md:mt-0 md:ml-2 md:w-1/3"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-sine"
                >
                    <h3>Packaging</h3>
                    <p>
                        Le packaging est tout aussi important que le produit que
                        vous vendez, il attire le regard et suscite la
                        curiosité.<br></br> Et je suis là pour vous aider à
                        réaliser le packaging qui retranscrira votre identité,
                        vos valeurs et vos ambitions.
                    </p>
                </div>
            </div>
            <div className="p-8 pt-0 blue-background md:flex md:flex-row">
                <div
                    className="md:w-1/3"
                    data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-sine"
                >
                    <h3>Web</h3>
                    <p>
                        Je vous propose de vous accompagner dans la création de
                        votre site à votre image.<br></br> Un site intuitif et
                        qui reflète votre image de marque est indispensable pour
                        une présence digitale et une visibilité sans faille.
                    </p>
                </div>
                <div
                    className="mt-4 md:mt-0 md:ml-2 md:w-1/3"
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine"
                >
                    <h3>Edition</h3>
                    <p>
                        Programmes culturels, brochures, flyers, livres de
                        jeunesse; je suis ouverte à toutes propositions.
                        <br></br> Ayant travaillé sur divers projets d’édition,
                        je peux répondre à vos besoins quelque soit le support.
                    </p>
                </div>
                <div
                    className="mt-4 md:mt-0 md:ml-2 md:w-1/3"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-sine"
                >
                    <h3>Social media</h3>
                    <p>
                        Il est indispensable de communiquer sur vos services
                        et/ou produits sur les différents réseaux sociaux. Cela
                        permet à vos clients d’en savoir plus sur votre
                        entreprise. C’est pourquoi il est essentiel d’avoir un
                        flux régulier et cohérent qui attire l’attention de
                        votre cible. Je réaliserai pour vous des visuels pour un
                        feed qui épatera votre future clientèle !
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-5/12 order-2 md:order-1">
                    <video autoPlay loop muted playsInline>
                        <source src="/images/Luluberlu.MP4" type="video/mp4" />
                    </video>
                </div>
                <div
                    className="md:w-7/12 pt-20 md:pt-40 px-5 md:px-20 order-1 md:order-2"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-sine"
                >
                    <p className="contact-text md:text-5xl gradual-light">
                        Mon univers vous plaît ? Alors créons ensemble vos plus
                        beaux projets !
                    </p>
                    <div className="mt-10">
                        <Link href="mailto:luluberlu.studio@gmail.com" passHref>
                            <span className="hover:underline gradual cursor-pointer text-2xl md:text-5xl">
                                luluberlu.studio@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
