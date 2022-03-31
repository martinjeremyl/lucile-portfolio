import Image from "next/image";
import mapPointerIcon from "../styles/icons/nantes.svg";
import behanceIcon from "../styles/icons/behance.svg";
import instagramIcon from "../styles/icons/insta.svg";
import linkedinIcon from "../styles/icons/linkedin.svg";
import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();
    return (
        <footer
            role="contentinfo"
            className={`custom-container mx-auto ${
                router.pathname === "/" || router.pathname === "/contact"
                    ? "fixed-footer"
                    : ""
            }`}
        >
            <hr className="m-auto mb-2"></hr>
            <div className="flex flex-row items-center pb-2">
                <div className="text-xl ml-2 lg:ml-8 basis-2/12 lg:basis-8/12 flex flex-row">
                    <div>Nantes</div>
                    <div className="ml-1">
                        <Image
                            src={mapPointerIcon}
                            alt="Google map localisation pointer"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
                <div className="basis-4/12 ml-2 lg:basis-2/12 flex flex-row">
                    <div>
                        <Image
                            src={behanceIcon}
                            alt="Behance Icon"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="ml-2">
                        <Image
                            src={instagramIcon}
                            alt="Instagram Icon"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="ml-2">
                        <Image
                            src={linkedinIcon}
                            alt="Linkedin Icon"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <address className="flex flex-col ml-2 basis-6/12 lg:basis-2/12">
                    <div>06.29.08.71.35</div>
                    <div>luluberlu.studio@gmail.com</div>
                </address>
            </div>
        </footer>
    );
}
