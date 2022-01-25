import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from './Utils';
import { ethers } from 'ethers';


const Connexion = ({
    defaultAccount,
    setDefaultAccount,
    isConnected,
    setConnectedState }) => {
    const [connectionText, setConnectionText] = useState('Se connecter');
    const [buttonColor, setButtonColor] = useState('primary');
    const user = useSelector((state) => state.userReducer);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();


    const connectHandler = async () => {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            const account = await signer.getAddress();
            console.log(account);
            if (isConnected) {
                setConnectedState(false);
                setConnectionText('Se connecter');
                setButtonColor('primary');
            } else {
                await signer.signMessage("Signature pour s'authentifier sur le proto de portail");
                if (!isEmpty(user[0]) && user[0].publicKey === account) {
                    setConnectionText(!isEmpty(user[0]) && user[0].name);
                    setButtonColor('success');
                    setConnectedState(true);
                } else if (!isEmpty(user[1]) && user[1].publicKey === account) {
                    setConnectionText(!isEmpty(user[1]) && user[1].name);
                    setButtonColor('success');
                    setConnectedState(true);
                }
                else {
                    setConnectionText('Adresse inconnue');
                    setButtonColor('danger');
                }
            }
        }
        else {
            setConnectedState(false);
            setDefaultAccount('pas de Metamask');
            setConnectionText('Pas de Metamask');
            setButtonColor('danger');
        }
    }

    return (
        <Button variant={buttonColor} onClick={connectHandler}>{connectionText}</Button>
    );
};

export default Connexion;
