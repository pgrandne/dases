import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { URL_NONCE, URL_VERIFY, URL_PERSONNAL_INFORMATION } from '../api'

const domain = window.location.host;
const origin = window.location.origin;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const Connection = ({ setConnectedState }) => {

    const createSiweMessage= async (address, statement) => {
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
        console.log(message.nonce);
        return message.prepareMessage();
    }
    
    const connectWallet = async () => {
        await provider.send('eth_requestAccounts', [])
            .catch(() => console.log('user rejected request'));
    }
    
    const signInWithEthereum = async () => {
        const message = await createSiweMessage(
            await signer.getAddress(),
            'Sign in with Ethereum to the app.'
        );
        const signature = await signer.signMessage(message);
    
        const res = await fetch(URL_VERIFY, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, signature }),
            credentials: 'include'
        });
        console.log(await res.text());
    }

    const getInformation = async () => {
        const res = await fetch(URL_PERSONNAL_INFORMATION, {
            credentials: 'include',
        });
        console.log(await res.text());
    }


    const connectHandler = async () => {
        await connectWallet();
        await signInWithEthereum();
        await getInformation();
        
        setConnectedState(true)

    }

    return (
        <button className="roundPink" onClick={connectHandler}>Connexion</button>
    )
}

export default Connection;




