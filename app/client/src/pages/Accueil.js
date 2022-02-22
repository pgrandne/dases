import { Container } from 'react-bootstrap';

const Accueil = ({ did, isConnected }) => {
    return (
        <div>
        <Container fluid>
            <h2>Bienvenue sur la page d'accueil</h2>
            <p>Cette application est un prototype d'un Portail d'échange pour le DASES</p>
            {isConnected && <p>Vous êtes connecté</p>}
            {isConnected && <p>Votre DID : {did} </p>}
            {!isConnected && <p>Merci de vous connecter</p>}
        </Container>
        </div>
    );
};

export default Accueil;