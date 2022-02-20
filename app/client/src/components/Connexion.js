import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { ethers } from 'ethers';
import { EthrDID } from 'ethr-did';
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';

const Connexion = ({
    didDocument,
    setDidDocument,
    isConnected,
    setConnectedState }) => {
    const [connectionText, setConnectionText] = useState('Se connecter');
    const [buttonColor, setButtonColor] = useState('primary');
    const [showNoMetamask, setShowNoMetamask] = useState(false);

    const handleClose = () => setShowNoMetamask(false);
    const handleShow = () => setShowNoMetamask(true);

    const connectHandler = async () => {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const accounts = await provider.listAccounts();
            const chainNameOrId = (await provider.getNetwork()).chainId
            const ethrDid = new EthrDID({identifier: accounts[0], provider, chainNameOrId})
            const rpcUrl = "https://rinkeby.infura.io/v3/d541faa3a3b74d409e82828b772fce9e";
            const didResolver = new Resolver(getResolver({ rpcUrl, name: "rinkeby" }));
            const didDoc = JSON.stringify((await didResolver.resolve(ethrDid.did)).didDocument);
            if (isConnected) {
                setConnectedState(false);
                setConnectionText('Se connecter');
                setButtonColor('primary');
            } else {
                await signer.signMessage("Signature pour s'authentifier sur le proto de portail");
                console.log(ethrDid);
                setButtonColor('success');
                setDidDocument(didDoc);
                setConnectedState(true);
                setConnectionText(ethrDid.address);
                console.log(didDoc);
              
            }
        }
        else {
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
        </div>
    );
};

export default Connexion;
