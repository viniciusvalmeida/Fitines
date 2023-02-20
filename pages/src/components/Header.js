import Link from "next/link";
import { List, ListInlineItem, Nav, NavLink } from "reactstrap";

export default function Header(){
  return (
    <Nav className="bg-warning d-flex justify-content-between align-items-center p-2">
      <h2>Logo</h2>
      
      <menu>
        <List>
          <ListInlineItem>
            <Link href='../../produtos' className="nav-link">
              PRODUTOS
            </Link>
          </ListInlineItem>
          
          <ListInlineItem>
            <Link href="../../carrinho" className="nav-link">
              CARRINHO
            </Link>
          </ListInlineItem>
        </List>
      </menu>
    </Nav>
  )
}