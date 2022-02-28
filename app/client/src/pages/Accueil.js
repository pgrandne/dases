const Accueil = ({ did, isConnected, vc }) => {
    return (
        <div>
            <h2>Bienvenue sur la page d'accueil</h2>
            <p>Cette application est un prototype d'un Portail d'échange pour le DASES</p>
            {isConnected && <p>Vous êtes connecté</p>}
            {isConnected && <p>Votre DID : {vc.credentialSubject.id} </p>}
            {isConnected && <p>L'émetteur du certificat : {vc.issuer.id} </p>}
            {isConnected && <p>Les informations du certificat :</p>}
            {isConnected && <p>Nom : {vc.credentialSubject.degree.name} </p>}
            {isConnected && <p>Organisme : {vc.credentialSubject.degree.entity} </p>}
            {isConnected && <p>Courriel : {vc.credentialSubject.degree.email} </p>}
            {!isConnected && <p>Merci de vous connecter</p>}
        </div>
    );
};

export default Accueil;