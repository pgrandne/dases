import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Connexion from './Connexion';

const NavbarComp = ({ didDocument, setDidDocument, isConnected, setConnectedState }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>PROTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav >
            <Nav.Link as={Link} to={"/"}>Tableau de bord</Nav.Link>
            <Nav.Link as={Link} to={"/ressource"}>Catalogue de ressources</Nav.Link>
            <Nav.Link as={Link} to={"/ressource"}>Ressources utilisées</Nav.Link>
            <Nav.Link as={Link} to={"/ajout"}>Ajouter une ressource</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Connexion
          didDocument={didDocument}
          setDidDocument={setDidDocument}
          isConnected={isConnected}
          setConnectedState={setConnectedState}
        />
      </Container>
    </Navbar>
  );
}

export default NavbarComp;