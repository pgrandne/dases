import { Alert, Button, Form } from 'react-bootstrap';
import FormulaireDonnee from './FormulaireDonnee';
import FormulaireService from './FormulaireService';
import { useState } from 'react';

function FormulaireAjout({defaultAccount}) {
    const [typeRessource, setTypeRessource] = useState(null);

    return (
        <Form>
            <Alert variant="secondary">
                {defaultAccount}
            </Alert>
            <Form.Group className="mb-2">
                <Form.Label>Nom de la ressource (self-description)</Form.Label>
                <Form.Control type="string" placeholder="Nommez votre ressource" />
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
            {typeRessource === 'donnees'&& <FormulaireDonnee/>}
            {typeRessource === 'service'&& <FormulaireService/>}
            <br />
            <Button type="submit">Valider</Button>
            <br /><br />
        </Form>
    );
}

export default FormulaireAjout;