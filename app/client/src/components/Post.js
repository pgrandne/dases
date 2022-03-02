import { Col, Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Resolver } from 'did-resolver';
import { getResolver } from 'ethr-did-resolver';
import { verifyCredential } from 'did-jwt-vc';


const Post = ({ post }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const downloadSd = async () => {
        const providerConfig = {
            rpcUrl: 'https://rinkeby.infura.io/v3/d541faa3a3b74d409e82828b772fce9e',
            registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b',
            name: 'rinkeby'
        }

        const didResolver = new Resolver(getResolver(providerConfig));
        const verifiedSd = await verifyCredential(post.sdJwt, didResolver);

        const element = document.createElement("a");
        var jsonSd = JSON.stringify(verifiedSd.verifiableCredential, null, 2);
        const file = new Blob([jsonSd], {
            type: "json/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = `SD.json`;
        document.body.appendChild(element);
        element.click();
    };


    return (
        <div>
            <Col>
                <Card onClick={handleShow}>
                    <Card.Header>{post.entity}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{post.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{post.description}</p>
                    <p>Type : {post.typeRessource}</p>
                    <p>Licence : {post.licence}</p>
                    <p>Doc : {post.urldoc}</p>
                    <p>API : {post.urlapi}</p>
                    <Button variant="primary" onClick={downloadSd}>
                        Télécharger le Self-Description
                    </Button>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Demande l'usage
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Post;