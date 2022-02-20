import { Alert, Card, Container } from 'react-bootstrap';
import FormulaireAjout from '../components//forms/FormulaireAjout';

const Ajout = ({ didDocument, isConnected }) => {
    return (
        <div>
            <h2>Bienvenue sur la page d'ajout de ressources</h2>
            <Container>
                <Card>
                    <Card.Header>Formulaire d'ajout de ressources</Card.Header>
                    <Card.Body>
                        {!isConnected &&
                            <Alert variant="secondary">
                                Vous devez vous connecter pour ajouter une ressource
                            </Alert>
                        }
                        {isConnected && <FormulaireAjout didDocument={didDocument} />}
                    </Card.Body>
                </Card>
            </Container>
        </div >
    );
}

export default Ajout;