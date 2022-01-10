import { Alert, Button, Form, Card, Container } from 'react-bootstrap';

function Ajout() {
    return (
        <div>
            <h2>Bienvenue sur la page d'ajout de ressources</h2>
            <Container>
                <Card>
                    <Card.Header>Formulaire d'ajout de ressources</Card.Header>
                    <Card.Body>
                        <Form>
                            <Alert variant="secondary">
                                Nom -Entité : Pierre FONTAINE - IMT Atlantique
                            </Alert>
                            <Form.Group className="mb-2">
                                <p>Quelle ressource voulez-vous ajouter ?</p>
                                <Form.Check
                                    inline
                                    label="Données"
                                    name="group1"
                                    type="radio"
                                />
                                <Form.Check
                                    inline
                                    label="Services"
                                    name="group1"
                                    type="radio"
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Nom de la ressource</Form.Label>
                                <Form.Control type="string" placeholder="Nommez votre ressource" />
                            </Form.Group>
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
                            </Form.Group>
                            <br />
                            <Button type="submit">Valider</Button>
                            <br /><br />
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div >
    );
}

export default Ajout;