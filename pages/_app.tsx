import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect } from "react";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import "aos/dist/aos.css";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);
    return (
        <div className="flex flex-col">
            <NextNProgress />
            <div className="sticky top-0 z-50">
                <Header></Header>
            </div>
            <div className="">
                <Component {...pageProps} />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default MyApp;
