import { useSelector } from 'react-redux';

const Accueil = ({ defaultAccount, isConnected }) => {
    const user = useSelector((state) => state.userReducer);

    return (
        <div>
            <h2>Bienvenue sur la page d'accueil</h2>
            <p>Cette application est un prototype d'un Portail d'échange pour le DASES</p>
            {isConnected && <p>Votre email : {user[0].name} </p>}
            {isConnected && <p>Votre organisme : {user[0].entity} </p>}
            {isConnected && <p>Votre adresse publique : {user[0].publicKey} </p>}
            {!isConnected && <p>Merci de vous connecter</p>}
        </div>
    );
};

export default Accueil;