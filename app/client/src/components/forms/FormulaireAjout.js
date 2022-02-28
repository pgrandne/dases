import { Alert, Button, Form, Modal } from 'react-bootstrap';
import FormulaireDonnee from './FormulaireDonnee';
import FormulaireService from './FormulaireService';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSd, getSds } from '../../actions/sd';
import { ethers } from 'ethers';

const FormulaireAjout = ({ did }) => {
    const [typeRessource, setTypeRessource] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [show, setShow] = useState(false);
    // const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleForm = async (e) => {
        e.preventDefault();

        if (title && content) {
            const data = {
                title,
                description,
                content,
                // author: user[0].entity
                author: did
            };

            await signer.signMessage(`Signer pour publier votre ressource : ${data.title}`);
            await dispatch(addSd(data));
            setTitle('');
            setContent('');
            setDescription('');
            dispatch(getSds());
            handleShow();

        }
    }

    return (
        <div>
            <Form onSubmit={(e) => handleForm(e)}>
                <Alert variant="secondary">
                    {/* {user[0].name} - {user[0].entity} */}
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
                    <Form.Label>Description de la ressource (self-description)</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="Décrivez votre ressource"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Informations sur la ressource</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="Indiquez les informations liées à votre ressource"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <p>Quelle ressource voulez-vous ajouter ?</p>
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
                {typeRessource === 'donnees' && <FormulaireDonnee />}
                {typeRessource === 'service' && <FormulaireService />}
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
        </div>

    );
}

export default FormulaireAjout;