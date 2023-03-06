import Link from "next/link";
import { Nav, Navbar, NavbarBrand } from "reactstrap";

export default function Header(props) {
    return (
        <header>
            <Navbar style={{ backgroundColor: "#E86A13" }}>
                <Link href="/" className="navbar-brand nav-link link-dark">
                    Logo
                </Link>
                <Nav>
                    <Link href="../../produtos" className="nav-link link-dark">
                        PRODUTOS
                    </Link>
                    <Link href="../../carrinho" className="nav-link link-dark">
                        CARRINHO
                    </Link>
                </Nav>
            </Navbar>
        </header>
    );
}
