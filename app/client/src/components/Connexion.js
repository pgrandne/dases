import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { ethers } from 'ethers';
import { EthrDID } from 'ethr-did';
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { verifyCredential } from 'did-jwt-vc';

const Connexion = ({
    did,
    setDid,
    isConnected,
    setConnectedState,
    vc,
    setVc }) => {
    const [connectionText, setConnectionText] = useState('Se connecter');
    const [buttonColor, setButtonColor] = useState('primary');
    const [showNoMetamask, setShowNoMetamask] = useState(false);
    const [noVerifiableCredential, setVerifiableCredential] = useState(false);

    const handleClose = () => setShowNoMetamask(false);
    const handleShow = () => setShowNoMetamask(true);

    const usersList = useSelector((state) => state.userReducer);

    const vcClose = () => {
        setVerifiableCredential(false);

    }
    const vcShow = () => setVerifiableCredential(true);

    const connectHandler = async () => {
        if (isConnected) {
            setConnectedState(false);
            setConnectionText('Se connecter');
            setButtonColor('primary');
        } else if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const accounts = await provider.listAccounts();
            // const chainNameOrId = (await provider.getNetwork()).chainId;
            const ethrDid = new EthrDID({ identifier: accounts[0], provider, chainNameOrId: 'rinkeby' });
            const providerConfig = {
                rpcUrl: 'https://rinkeby.infura.io/v3/d541faa3a3b74d409e82828b772fce9e',
                registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b',
                name: 'rinkeby'
            }

            const didResolver = new Resolver(getResolver(providerConfig));

            await signer.signMessage(`Signature pour s'authentifier sur le proto de portail\navec la ${ethrDid.did}`);
            setDid(ethrDid);
            const currentUser = await usersList.filter(users => (users.did === ethrDid.did))
            if (currentUser[0] != null) {
                const verifiedVC = await verifyCredential(currentUser[0].vcJwt, didResolver);
                setConnectionText(ethrDid.address);
                setVc(verifiedVC.verifiableCredential);
                setButtonColor('success');
                setConnectedState(true);
            } else {
                vcShow();
            }
        } else {
            console.log('Pas de Metamask');
            handleShow();
            setConnectedState(false);

        }
    }

    return (
        <div>
            <Button variant={buttonColor} onClick={connectHandler}>{connectionText}</Button>
            <Modal show={showNoMetamask} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Wallet Metamask absent</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vous devez installer le wallet Metamask pour vous connecter au portail !<br /> Taper Metamask dans votre moteur de recherche préféré et suivez les instructions.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={noVerifiableCredential} onHide={vcClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Création d'une référence vérifiable</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vous n'avez pas de référence Vérifiable. Vous devez en créer une pour intéragir avec le Portail</Modal.Body>
                <Modal.Footer>
                    <Link to="/acces">
                        <Button variant="primary" onClick={vcClose}>
                            Valider
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Connexion;



