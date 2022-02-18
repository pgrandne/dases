import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { isEmpty } from './Utils';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import { EthereumAuthProvider, ThreeIdConnect,  } from '@3id/connect';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';
import Ceramic from '@ceramicnetwork/http-client';
import { DID } from 'dids';

// import { IDX } from '@ceramicstudio/idx';

const API_URL = 'https://ceramic-clay.3boxlabs.com';

const Connexion = async ({
    defaultAccount,
    setDefaultAccount,
    isConnected,
    setConnectedState }) => {
    const [connectionText, setConnectionText] = useState('Se connecter');
    const [buttonColor, setButtonColor] = useState('primary');
    const [showNoMetamask, setShowNoMetamask] = useState(false);

    const handleClose = () => setShowNoMetamask(false);
    const handleShow = () => setShowNoMetamask(true);

// ethProvider is an Ethereum provider and addresses an array of strings
const authProvider = new EthereumAuthProvider(ethProvider, addresses[0])

const threeIdConnect = new ThreeIdConnect()
await threeIdConnect.connect(authProvider)


const authenticate = async () => {
 
}




// const Connexion = ({
//     defaultAccount,
//     setDefaultAccount,
//     isConnected,
//     setConnectedState }) => {
//     const [connectionText, setConnectionText] = useState('Se connecter');
//     const [buttonColor, setButtonColor] = useState('primary');
//     const [showNoMetamask, setShowNoMetamask] = useState(false);

//     const handleClose = () => setShowNoMetamask(false);
//     const handleShow = () => setShowNoMetamask(true);

//     const isMetamask = async () => {
//         if (window.ethereum) {
//             const addresse = await window.ethereum.request({ method: 'eth_requestAccounts' });
//             const account = addresse[0];
//             setConnectionText(account);
//             setButtonColor('success');
//             setConnectedState(true);
//             return account;
//         } else {
//             console.log('Pas de Metamask');
//             handleShow();
//             setConnectedState(false);

//         }
//     }

//         const connectHandler = async () => {
//             const addresse = await isMetamask();
//             const ceramic = new CeramicClient(API_URL);
//             const idx = new IDX({ ceramic });
//             // try {
//                 const data = await idx.get('basicProfile', `${addresse}@eip155:1`);
//                 console.log(data);

//         // } catch (error) {
//         //     console.log(data);
//         //     console.log('error', error);

//         // }

//     }

//     const createDID = async () => {
//         const addresse = await isMetamask();
//         const ceramic = new CeramicClient(API_URL);
//         const threeIdConnect = new ThreeIdConnect();
//         const provider = new EthereumAuthProvider(window.ethereum, addresse);
//         await threeIdConnect.connect(provider);
//         const did = new DID({
//             provider: threeIdConnect.getDidProvider(),
//             resolver: ThreeIdResolver.getResolver(ceramic),
//           })

//           ceramic.setDID(did);
//           await ceramic.did.authenticate();

//           const idx = new IDX({ ceramic });

//           await idx.set('basicProfile', {
//               name,
//               description
//           })

//           console.log("Profile updated!");
//     }







// if (window.ethereum) {
//     await window.ethereum.request({ method: 'eth_requestAccounts' })
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const account = await signer.getAddress();
//     console.log(account);
//     if (isConnected) {
//         setConnectedState(false);
//         setConnectionText('Se connecter');
//         setButtonColor('primary');
//     } else {
//         await signer.signMessage("Signature pour s'authentifier sur le proto de portail");
//         if (!isEmpty(user[0]) && user[0].publicKey === account) {
//             setConnectionText(!isEmpty(user[0]) && user[0].name);
//             setButtonColor('success');
//             setConnectedState(true);
//         } else if (!isEmpty(user[1]) && user[1].publicKey === account) {
//             setConnectionText(!isEmpty(user[1]) && user[1].name);
//             setButtonColor('success');
//             setConnectedState(true);
//         }
//         else {
//             setConnectionText('Adresse inconnue');
//             setButtonColor('danger');
//         }
//     }
// }
// else {
//     console.log('Pas de Metamask');
//     handleShow();
//     setConnectedState(false);

// }


return (
    <div>
        <Button variant={buttonColor} onClick={authenticate}>{connectionText}</Button>
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
