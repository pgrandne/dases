import { Button } from 'react-bootstrap';
import { useState } from 'react';


function Connexion({
    defaultAccount,
    setDefaultAccount,
    isConnected,
    setConnectedState }) {
    const [connectionText, setConnectionText] = useState('Se connecter');
    const [buttonColor, setButtonColor] = useState('primary');

    const connectHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    setDefaultAccount(result[0]);
                    if (isConnected) {
                        setConnectedState(false);
                        setConnectionText('Se connecter');
                        setButtonColor('primary');
                    } else {
                        setConnectedState(true);
                        setConnectionText('Pierre FONTAINE - IMT Atlantique');
                        setButtonColor('success');
                    }
                })

        } else {
            setConnectedState(false);
            setDefaultAccount('pas de Metamask');
            setConnectionText('Pas de Metamask');
            setButtonColor('danger');

        }
    }

    return (
        <Button variant={buttonColor} onClick={connectHandler}>{connectionText}</Button>
    );
}
export default Connexion
