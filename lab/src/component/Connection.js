import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { URL_NONCE, URL_VERIFY } from '../api'

const Connection = ({ setConnectedState, setNoMetamaskState }) => {
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
                    chainId: '1',
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

            const signInWithEthereum = async () => {
                message = await createSiweMessage(
                    await signer.getAddress(),
                    `Signer pour s'authentifier sur Dases Lab`
                );
                console.log(message);
                signature = await signer.signMessage(message);
                console.log(signature);
            }

            const sendForVerification = async () => {
                const res = await fetch(URL_VERIFY, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message, signature }),
                });
                console.log(await res.text());
            }

            await connectWallet();
            await signInWithEthereum();
            await sendForVerification();
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




