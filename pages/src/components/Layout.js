import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="d-flex flex-column vh-100">
            <Header />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
}
