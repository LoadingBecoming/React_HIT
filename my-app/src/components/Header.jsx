import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import "../componentsCSS/header.css";
import "../componentsCSS/all.css";
function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ARSHA</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#features">Portfolio</Nav.Link>
              <Nav.Link href="#pricing">Team</Nav.Link>
              <NavDropdownMenu
                title="Dropdown R"
                id="collasible-nav-dropdown"
                alignRight
              >
                <NavDropdown.Item href="#action/3.1">
                  Drop down 1
                </NavDropdown.Item>
                <DropdownSubmenu href="#action/3.7" title="Text to show">
                  <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
                  <DropdownSubmenu href="#action/3.7" title="Text to show">
                    <NavDropdown.Item href="#action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                </DropdownSubmenu>
                <NavDropdown.Item href="#action/3.1">
                  Drop down 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Drop down 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Drop down 4
                </NavDropdown.Item>
              </NavDropdownMenu>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Get started</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
