import Head from "next/head";
import { Container } from "reactstrap";
import Header from "./src/components/Header";

export default function Home() {
    return (
        <body className="vw-100 vh-100">
            <Header/>
            
            <main>
                <h1>Index</h1>
            </main>
        </body>
    );
}
