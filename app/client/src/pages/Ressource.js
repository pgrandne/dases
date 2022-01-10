import { Row, Col, Card, Container } from 'react-bootstrap';

function Ressource() {
    return (
        <div>
            <h2>Bienvenue sur le catalogue de toutes les ressources</h2>
            <p>Liste des ressources</p>

            <Container>                
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title> Ressource</Card.Title>
                                    <Card.Text>
                                        Description de la Ressource
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Ressource;