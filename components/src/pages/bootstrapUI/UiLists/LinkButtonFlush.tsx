import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ListlinkExample, ListButtonExample, FlushListExample } from './UiListsCode';

const LinkButtonFlush = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">List with Link</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>&lt;a&gt;</code> tag to create actionable list group items with hover, disabled, and active states by adding list-group-item-action.</p>
                            <ListGroup className="list-group-fill-success">
                                <ListGroup.Item as='a' className="list-group-item-action active"><i className="ri-download-2-fill align-middle me-2"></i>Category Download</ListGroup.Item>
                                <ListGroup.Item as='a' className="list-group-item-action"><i className="ri-shield-check-line align-middle me-2"></i>Security Access</ListGroup.Item>
                                <ListGroup.Item as='a' className="list-group-item-action"><i className="ri-database-2-line align-middle me-2"></i>Storage folder</ListGroup.Item>
                                <ListGroup.Item as='a' className="list-group-item-action"><i className="ri-notification-3-line align-middle me-2"></i>Push Notification</ListGroup.Item>
                                <ListGroup.Item as='a' className="list-group-item-action disabled" tabIndex={-1}><i className="ri-moon-fill align-middle me-2"></i>Dark Mode</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ListlinkExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">List with Button</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>&lt;button&gt;</code> tag to create actionable list group items with hover, disabled, and active states by adding list-group-item-action.</p>
                            <ListGroup>
                                <ListGroup.Item type="button" className="list-group-item-action" active aria-current="true"><i className="ri-reply-fill align-middle me-2"></i>Reply</ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item-action"><i className="ri-share-forward-fill align-middle me-2"></i>Forward Message</ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item-action"><i className="ri-equalizer-line align-middle me-2"></i>Filter Message</ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item-action"><i className="ri-delete-bin-5-line align-middle me-2"></i>Delete Message</ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item-action" disabled><i className="ri-forbid-line align-middle me-2"></i>Block "Mark Spencer</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ListButtonExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Flush List</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>list-group-flush</code> class to remove some borders and rounded corners to render list group items.</p>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Send the billing agreement</ListGroup.Item>
                                <ListGroup.Item>Send over all the documentation.</ListGroup.Item>
                                <ListGroup.Item>Meeting with daron to review the intake form</ListGroup.Item>
                                <ListGroup.Item>Check uikings theme and give customer support</ListGroup.Item>
                                <ListGroup.Item>Start making a presentation</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "155px" }}>
                                <FlushListExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LinkButtonFlush;