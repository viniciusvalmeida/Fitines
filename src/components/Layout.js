import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const hostAddress = process.env.NEXT_PUBLIC_HOST_ADDRESS

export default function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Head>
                <title>FitInês</title>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="icon" href={`${hostAddress}/favicon.ico?v=2`} />
            </Head>
            <Header />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
}
