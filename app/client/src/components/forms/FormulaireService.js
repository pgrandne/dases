import { Form } from 'react-bootstrap';

const FormulaireService = () => {
    return (
        <div>
            <Form.Group className="mb-2">
                <Form.Label>Type de service</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Choisir le type de service</option>
                    <option value="1">Service d'infrastructure</option>
                    <option value="2">Service d'Intelligence Artificielle</option>
                    <option value="3">Service Utilisateurs</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Choisir la licence de votre service</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option value="1">Apache 2.0</option>
                    <option value="2">GPL 3.0</option>
                    <option value="3">MIT</option>
                </Form.Select>
                <Form.Label>URL de l'API</Form.Label>
                <Form.Control type="string" placeholder="https://"/>
            </Form.Group>
        </div>

    );
};

export default FormulaireService;