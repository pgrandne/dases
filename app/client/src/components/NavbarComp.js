import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Connexion from './Connexion';

const NavbarComp = ({ did, setDid, isConnected, setConnectedState, vc, setVc }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>PROTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav >
            <Nav.Link as={Link} to={"/"}>Tableau de bord</Nav.Link>
            <Nav.Link as={Link} to={"/ressource"}>Catalogue de ressources</Nav.Link>
            <Nav.Link as={Link} to={"/ajout"}>Ajouter une ressource</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Connexion
          did={did}
          setDid={setDid}
          isConnected={isConnected}
          setConnectedState={setConnectedState}
          vc={vc}
          setVc={setVc}
        />
      </Container>
    </Navbar>
  );
}

export default NavbarComp;