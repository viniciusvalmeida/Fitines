import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="d-flex flex-column">
            <Head>
                <title>FitInês</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Header />
            <main style={{minHeight: '88vh'}}>{children}</main>
            <Footer />
        </div>
    );
}
