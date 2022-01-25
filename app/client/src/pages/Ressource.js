import { Row, Container, Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Post from '../components/Post';
import { isEmpty } from '../components/Utils';

const Ressource = () => {
    const posts = useSelector((state) => state.postReducer);

    return (
        <div>
            <h2>Bienvenue sur le catalogue de toutes les ressources</h2>
            <Container>
                <Form variant='secondary'>
                    <Row>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Type de ressources</option>
                                <option value="1">Données</option>
                                <option value="2">Services</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Type de licence</option>
                                <option value="1">MIT</option>
                                <option value="2">GPL 3.0</option>
                                <option value="3">Apache 2.0</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Rechercher</InputGroup.Text>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={2}>
                            <Form.Check
                                type="switch"
                                label="Mes ressources"
                            />
                        </Col>
                    </Row>
                </Form>

                <br />
                <Row xs={1} md={4} className="g-4">
                    {!isEmpty(posts) && posts.map((post, index) => (<Post post={post} key={index} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Ressource;