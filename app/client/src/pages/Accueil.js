function Accueil({ defaultAccount, isConnected }) {
    return (
        <div>
            <h2>Bienvenue sur la page d'accueil</h2>
            <p>Cette application est un prototype d'un Portail d'échange pour le DASES</p>
            {isConnected && <p>Votre adresse : {defaultAccount} </p>}
            {!isConnected &&<p>Merci de vous connecter</p>}
        </div>
    );
}

export default Accueil;