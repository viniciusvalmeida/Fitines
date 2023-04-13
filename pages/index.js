import Link from "next/link";
import Header from "../src/components/Header";
import { Button, Container } from "reactstrap";
import Head from "next/head";
import Footer from "../src/components/Footer";

export default function Home() {
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
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_HOST_ADDRESS}/favicon.ico?v=2`} />
            </Head>
            
            <Header />

            <main className="flex-grow-1">
                <Container className="py-5 text-center">
                    <h1 className="mt-5 display-1">
                        O melhor jeito de comprar o que você ama
                    </h1>
                    <p className="my-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Molestiae iusto voluptatem obcaecati omnis error architecto
                        neque cum exercitationem fugiat. Vero illo autem eum nisi
                        sapiente, odio optio accusamus cupiditate ad.
                    </p>
                    <Link href="/produtos">
                        <Button color="dark" className="px-4 pb-2">
                            Conheça nossos produtos!
                        </Button>
                    </Link>
                </Container>
            </main>
            
            <Footer />
        </div>
    );
}
