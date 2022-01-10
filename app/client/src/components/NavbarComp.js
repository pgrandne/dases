import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Connexion from './Connexion';

function NavbarComp({ nameUser, setName }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>DASES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/ajout"}>Ajouter une ressource</Nav.Link>
            <NavDropdown title="Catalogue" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/donnee"}>Catalogue de données</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/service"}>Catalogue de services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/ressource"}>Toutes les ressources</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Connexion nameUser={nameUser} setName={setName} />
      </Container>
    </Navbar>
  );
}

export default NavbarComp;