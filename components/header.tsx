import Image from "next/image";
import logoIcon from "../styles/icons/logo.svg";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    return (
        <header>
            <div className="flex flex-row items-center pt-3 pb-2 bg-white custom-container mx-auto">
                <div className="basis-4/12 text-center sm:text-left lg:basis-8/12 ml-6">
                    <Link href="/" passHref>
                        <Image
                            src={logoIcon}
                            alt="Lucile Russo Logo"
                            width={60}
                            height={60}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="basis-4/12 lg:basis-2/12 text-center">
                    <Link href="/work" passHref>
                        <h2
                            className={`text-2xl md:text-4xl gradual cursor-pointer ${
                                router.pathname === "/work" ? "active" : ""
                            }`}
                        >
                            work
                        </h2>
                    </Link>
                </div>
                <div className="basis-4/12 lg:basis-2/12 text-center">
                    <Link href="/about" passHref>
                        <h2
                            className={`text-2xl md:text-4xl gradual cursor-pointer ${
                                router.pathname === "/about" ? "active" : ""
                            }`}
                        >
                            about
                        </h2>
                    </Link>
                </div>
                <div className="basis-4/12 lg:basis-2/12 text-center">
                    <Link href="/contact" passHref>
                        <h2
                            className={`text-2xl md:text-4xl gradual cursor-pointer ${
                                router.pathname === "/contact" ? "active" : ""
                            }`}
                        >
                            contact
                        </h2>
                    </Link>
                </div>
            </div>
            <hr className="custom-container m-auto"></hr>
        </header>
    );
}
