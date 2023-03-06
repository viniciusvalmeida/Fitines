import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Head>
                <title>FitInês</title>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Header />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
}
