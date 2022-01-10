import { Button } from 'react-bootstrap';
import { useState } from 'react';


function Connexion({ defaultAccount, setDefaultAccount }) {

    const [isConnected, setConnection] = useState(false);
    const [connectionText, setConnectionText] = useState('Se connecter');
    const [buttonColor, setButtonColor] = useState('primary');

    const connectHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    setDefaultAccount(result[0]);
                    if (isConnected) {
                        setConnection(false);
                        setConnectionText('Se connecter');
                        setButtonColor('primary');
                    } else {
                        setConnection(true);
                        setConnectionText('Pierre FONTAINE - IMT Atlantique');
                        setButtonColor('success');
                    }
                })

        } else {
            setDefaultAccount('pas de Metamask')
        }
    }

    return (
        <Button variant={buttonColor} onClick={connectHandler}>{connectionText}</Button>
    );
}
export default Connexion
