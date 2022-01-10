import { Row, Col, Card, Container } from 'react-bootstrap';

function Service() {
    return (
        <div>
            <h2>Bienvenue sur le catalogue de services</h2>
            <p>Liste des ressources de services</p>

            <Container>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card>
                            <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Service</Card.Title>
                                    <Card.Text>
                                        Description du Service
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

export default Service;