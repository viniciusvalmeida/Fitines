import { Nav, Navbar, NavbarBrand, NavLink } from "reactstrap";

export default function Header(props) {
    return (
        <Navbar style={{backgroundColor: 'lightgray'}}>
            <NavbarBrand href="/">Logo</NavbarBrand>

            <Nav>
                <NavLink href="../../produtos" className="text-black">PRODUTOS</NavLink>

                <NavLink href="../../carrinho" className="text-black">CARRINHO</NavLink>
            </Nav>
        </Navbar>
    );
}
