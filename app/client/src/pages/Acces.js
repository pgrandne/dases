import { Alert, Button, Card, Container, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { ethers } from 'ethers';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../actions/user';
// import { ethers } from 'ethers';


const Acces = ({ did, isConnected }) => {
    const [name, setName] = useState('');
    const [entity, setEntity] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const [noMissingField, setNomissingField] = useState(true);

    const handleClose = () => {
        setShow(false);
        window.location.href = '/';
    }
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const usersList = useSelector((state) => state.userReducer);


    const testUser = async (e) => {
        console.log(did.did);


        let currentUser = usersList.filter(test => (test.did === did.did))
        console.log(currentUser);


    };


    const handleForm = async (e) => {
        e.preventDefault();

        if (did.did && name && entity && email) {
            setNomissingField(true);
            const data = {
                did: did.did,
                name,
                entity,
                email
            };
            await signer.signMessage(`Signer pour faire votre demande d'accès:\n${data.did}\nNom : ${data.name}\nOrganisme : ${data.entity}\nEmail : ${data.email}`);
            await dispatch(addUser(data));
            handleShow();
        } else {
            setNomissingField(false);
        }
    }


    return (
        <div>
            <h2>Bienvenue sur la page de demande d'accès</h2>
            <Button variant="primary" onClick={testUser}>
                Voir l'utilisateur
            </Button>
            <Container>
                <Card>
                    {noMissingField && <Card.Header>Veuillez remplir le formulaire</Card.Header>}
                    {!noMissingField && <Card.Header><b>Des champs ne sont pas renseignés</b></Card.Header>}
                    <Card.Body>
                        <Form onSubmit={(e) => handleForm(e)}>
                            <Alert variant="secondary">
                                Votre DID : {did.did}
                            </Alert>
                            <Form.Group className="mb-2">
                                <Form.Label>Votre Nom</Form.Label>
                                <Form.Control
                                    type="string"
                                    placeholder="Renseignez votre nom"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Votre Courriel</Form.Label>
                                <Form.Control
                                    type="string"
                                    placeholder="Renseignez votre addresse électronique professionnelle"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Votre organisme</Form.Label>
                                <Form.Control
                                    type="string"
                                    placeholder="Renseignez l'organisation sous laquelle vous souhaitez utiliser la plateforme"
                                    value={entity}
                                    onChange={(e) => setEntity(e.target.value)}
                                />
                            </Form.Group>
                            <Button type="submit">Valider</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Votre demande a bien été transmise</Modal.Title>
                </Modal.Header>
                <Modal.Body>Votre identité a bien été créée, vous pouvez maintenant vous connecter</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}



export default Acces;