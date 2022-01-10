import { Button } from 'react-bootstrap';
import { useState } from 'react';

function Connexion({ nameUser, setName }) {

    const [isConnected, setConnection] = useState(false);
    const [connectionText, setConnectionText] = useState('Se connecter');
    const [buttonColor, setButtonColor] = useState('primary');

    const connectHandler = () => {
        if (isConnected) {
            setConnection(false);
            setConnectionText('Se connecter');
            setButtonColor('primary');
            setName('Se connecter')
        } else {
            setConnection(true);
            setConnectionText('Pierre FONTAINE - IMT Atlantique');
            setButtonColor('success');
            setName('Pierre FONTAINE - IMT Atlantique')
        }

    }

    return (
        <Button variant={buttonColor} onClick={connectHandler}>{connectionText}</Button>
    );
}
export default Connexion
