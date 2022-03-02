import { Button } from 'react-bootstrap';

const Accueil = ({ did, isConnected, vc }) => {

const downloadVc = () => {
    const element = document.createElement("a");
    var jsonVc = JSON.stringify(vc, null, 2);
    const file = new Blob([jsonVc], {
      type: "json/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = `${did.address}_VC.json`;
    document.body.appendChild(element);
    element.click();
  };

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
            {isConnected && <Button variant='primary' onClick={downloadVc}>Télécharger son certificat</Button>}
        </div>
    );
};

export default Accueil;