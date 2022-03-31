import Image from "next/image";
import Link from "next/link";

export default function Contact({ Component, pageProps }) {
    return (
        <div className="custom-container mx-auto px-4 md:px-0">
            <div className="md:flex ">
                <div className="w-5/12">
                    <video autoPlay loop muted>
                        <source src="/images/Luluberlu.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="w-7/12 pt-40 px-20">
                    <p className="text-5xl gradual-light">
                        Créons ensemble<br></br> vos plus beaux projets !
                    </p>
                    <div className="mt-10">
                        <Link href="mailto:luluberlu.studio@gmail.com" passHref>
                            <span className="gradual cursor-pointer text-5xl">
                                luluberlu.studio@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
