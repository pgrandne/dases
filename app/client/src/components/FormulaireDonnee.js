import { Form } from 'react-bootstrap';

function FormulaireDonnee() {
    return (
        <div>
            <Form.Group className="mb-2">
                <Form.Label>Type de données</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Choisir le type de données</option>
                    <option value="1">Données Personnelles</option>
                    <option value="2">Données Anonymisées</option>
                    <option value="3">Données Libres</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-2">
                <Form.Label>Fichier d'exemple</Form.Label>
                <Form.Control type="file" placeholder="coucou" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Choisir la licence</Form.Label>
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
}

export default FormulaireDonnee;