import { Col, Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const Post = ({ post }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Col>
                <Card onClick={handleShow}>
                    <Card.Header>{post.author}</Card.Header>
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
                <Modal.Body>{post.content}</Modal.Body>
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