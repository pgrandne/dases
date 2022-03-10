import { URL_NONCE, URL_VERIFY } from '../api'

import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { EthrDID } from 'ethr-did';



const Connection = ({ setConnectedState, setNoMetamaskState, setOnboardedState }) => {
    const usersList = useSelector((state) => state.userReducer);

    const connectHandler = async () => {
        if (window.ethereum) {
            const domain = window.location.host;
            const origin = window.location.origin;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const createSiweMessage = async (address, statement) => {
                const res = await fetch(URL_NONCE, {
                    credentials: 'include',
                });
                const message = new SiweMessage({
                    domain,
                    address,
                    statement,
                    uri: origin,
                    version: '1',
                    chainId: '4',
                    nonce: await res.text()
                });
                return message.prepareMessage();
            }

            const connectWallet = async () => {
                await provider.send('eth_requestAccounts', [])
                    .catch(() => console.log('user rejected request'));
            }

            let message = null;
            let signature = null;
            let identifier = null;

            const signInWithEthereum = async () => {
                identifier = await signer.getAddress()
                message = await createSiweMessage(
                    identifier,
                    `Signer pour s'authentifier sur Dases Lab`
                );

                console.log(message);
                signature = await signer.signMessage(message);
                console.log("signature: ", signature);
            }

            const sendForVerification = async () => {
                const res = await fetch(URL_VERIFY, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message, signature }),
                });
                console.log("resultat:", await res.text());
            }

            const verifyVC = async () => {
                const ethrDid = new EthrDID({ identifier, provider, chainNameOrId: 'rinkeby' });
                // const providerConfig = {
                //     rpcUrl: 'https://rinkeby.infura.io/v3/d541faa3a3b74d409e82828b772fce9e',
                //     registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b',
                //     name: 'rinkeby'
                // }
                console.log(ethrDid);
                const currentUser = await usersList.filter(users => (users.did === ethrDid.did));
                console.log(currentUser);
                if (currentUser[0] != null) {
                    setOnboardedState(true);
                } else {
                    setOnboardedState(false);
                }
            }



            await connectWallet();
            await signInWithEthereum();
            await sendForVerification();
            await verifyVC();







            setConnectedState(true)
        }
        else {
            console.log('Pas de Metamask');
            setNoMetamaskState(true);
        }
    }

    return (
        <button className="roundPink" onClick={connectHandler}>Connexion</button>

    )
}

export default Connection;




