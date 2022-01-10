import { Row, Col, Card, Container } from 'react-bootstrap';

function Donnee() {
    return (
        <div>
            <h2>Bienvenue sur le catalogue des données </h2>
            <p>Liste des ressources de données</p>

<Container>
            <Row xs={1} md={4} className="g-4">
  {Array.from({ length: 8 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Donnée</Card.Title>
          <Card.Text>
            Description de la Donnée
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

export default Donnee;