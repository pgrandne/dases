function Accueil({ defaultAccount }) {
    return (
        <div>
            <h2>Bienvenue sur la page d'accueil</h2>
            <p>Cette application est un prototype d'un Portail d'échange pour le DASES</p>
            <p>Votre adresse : {defaultAccount} </p>
        </div>
    );
}

export default Accueil;