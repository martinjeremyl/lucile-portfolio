import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex flex-col h-screen">
            <div>
                <Header></Header>
            </div>
            <div className="flex-1 overflow-y-auto">
                <Component {...pageProps} />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default MyApp;
