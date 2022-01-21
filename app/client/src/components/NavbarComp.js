import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Connexion from './Connexion';

const NavbarComp = ({ defaultAccount, setDefaultAccount, isConnected, setConnectedState }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>DASES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav >
            <Nav.Link as={Link} to={"/ajout"}>Tableau de bord</Nav.Link>
            <Nav.Link as={Link} to={"/ressource"}>Catalogue de resssources</Nav.Link>
            <Nav.Link as={Link} to={"/ressource"}>Mes ressources fournies</Nav.Link>
            <Nav.Link as={Link} to={"/ressource"}>Ressources utilisées</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Connexion
          defaultAccount={defaultAccount}
          setDefaultAccount={setDefaultAccount}
          isConnected={isConnected}
          setConnectedState={setConnectedState}
        />
      </Container>
    </Navbar>
  );
}

export default NavbarComp;