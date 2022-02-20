import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Accueil = ({ didDocument, isConnected }) => {
    const user = useSelector((state) => state.userReducer);

    return (
        <Container fluid>
            <h2>Bienvenue sur la page d'accueil</h2>
            <p>Cette application est un prototype d'un Portail d'échange pour le DASES</p>
            {isConnected && <p>Votre email : {user[0].name} </p>}
            {isConnected && <p>Votre organisme : {user[0].entity} </p>}
            {isConnected && <p>Le document DID :<br/> { didDocument } </p>}
            {!isConnected && <p>Merci de vous connecter</p>}
        </Container>
    );
};

export default Accueil;