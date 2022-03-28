import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
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
