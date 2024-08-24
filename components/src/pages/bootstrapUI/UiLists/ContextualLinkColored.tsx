import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ContextualClassExample, ContextualLinkExample, ColoredListExample } from './UiListsCode';

const ContextualLinkColored = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Contextual Classes</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use contextual classes to style list items with a stateful background and color.</p>
                            <ListGroup>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
                                <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
                                <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
                                <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
                                <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
                                <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
                                <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
                                <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ContextualClassExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Contextual Classes with Link</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Contextual classes also work with <code>.list-group-item-action</code>. Note the addition of the hover styles here not present in the previous example.</p>
                            <div className="live-preview">
                                <ListGroup>
                                    <ListGroup.Item as='a' className="list-group-item-action">A simple default list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-primary">A simple primary list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-secondary">A simple secondary list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-success">A simple success list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-danger">A simple danger list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-warning">A simple warning list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-info">A simple info list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-light">A simple light list group item</ListGroup.Item>
                                    <ListGroup.Item as='a' className="list-group-item-action list-group-item-dark">A simple dark list group item</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "200px" }}>
                                <ContextualLinkExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Colored Lists</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>list-group-fill-</code> with modifier class to style list items with a stateful background and color.</p>
                            <div className="live-preview">
                                <ListGroup>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-primary">A simple primary list group item</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-secondary">A simple secondary list group item</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-success">A simple success list group item</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-danger">A simple danger list group item</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-warning">A simple warning list group item</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-info">A simple info list group item</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-light">A simple light list group item</ListGroup.Item>
                                    <ListGroup.Item className="list-group-fill-dark">A simple dark list group item</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "200px" }}>
                                <ColoredListExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ContextualLinkColored;