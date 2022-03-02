import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSd, getSds } from '../../actions/sd';
import { ethers } from 'ethers';

const FormulaireAjout = ({ vc }) => {
    const [typeRessource, setTypeRessource] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [licence, setLicence] = useState('apache');
    const [urldoc, setUrldoc] = useState('');
    const [urlapi, setUrlapi] = useState('');

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLicence = (e) => setLicence(e.target.value)

    console.log(vc.credentialSubject.name)
    console.log(vc)

    const handleForm = async (e) => {
        e.preventDefault();

        if (title && description) {
            const data = {
                author: vc.credentialSubject.name,
                authorDid: vc.credentialSubject.id,
                entity: vc.credentialSubject.entity,
                title,
                description,
                typeRessource,
                licence,
                urldoc,
                urlapi
            };

            await signer.signMessage(`Signer pour publier votre ressource : ${data.title}`);
            await dispatch(addSd(data));
            setTitle('');
            setDescription('');

            dispatch(getSds());
            handleShow();

        }
    }

    return (
        <div>
            <Form onSubmit={(e) => handleForm(e)}>
                <Alert variant="secondary">
                    {vc.credentialSubject.name} - {vc.credentialSubject.entity}
                </Alert>
                <Form.Group className="mb-2">
                    <Form.Label>Titre de la ressource</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="Nommez votre ressource"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Description de la ressource</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="Décrivez votre ressource"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <p>Quelle ressource voulez-vous partager ?</p>
                    <Form.Check
                        inline
                        type="radio"
                        label="Données"
                        name="ressource"
                        value="donnees"
                        onClick={() => setTypeRessource('donnees')}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Services"
                        name="ressource"
                        value="service"
                        onClick={() => setTypeRessource('service')}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Choisir la licence</Form.Label>
                    <Form.Select onChange={handleLicence}>
                        <option value="apache">Apache 2.0</option>
                        <option value="gpl">GPL 3.0</option>
                        <option value="mit">MIT</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>URL de la documentation</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="https://"
                        value={urldoc}
                        onChange={(e) => setUrldoc(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>URL de l'API</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="https://"
                        value={urlapi}
                        onChange={(e) => setUrlapi(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button type="submit">Valider</Button>
                <br /><br />
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Votre ressource a été ajoutée au catalogue</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vous pouvez vous rendre sur la page Catalogue de ressources pour la voir</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >

    );
}

export default FormulaireAjout;