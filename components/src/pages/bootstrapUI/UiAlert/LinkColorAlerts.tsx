import React from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';
import { LinkColorExample } from './UiAlertCode';

const LinkColorAlerts = () => {

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Link Color Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-link</code> class at &lt;a&gt; tag to show matching colored links within the given alert.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary">
                                A simple Primary alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>

                            <h6>Secondary Alert</h6>
                            <Alert variant="secondary">
                                A simple Secondary alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>

                            <h6>Success Alert</h6>
                            <Alert variant="success">
                                A simple Success alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>

                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className=" mb-xl-0">
                                A simple Danger alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Warning Alert</h6>
                            <Alert variant="warning">
                                A simple Warning alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>

                            <h6>Info Alert</h6>
                            <Alert variant="info">
                                A simple Info alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>

                            <h6>Light Alert</h6>
                            <Alert variant="light">
                                A simple Light alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant="dark" className=" mb-0">
                                A simple Dark alert with <Alert.Link href="#">an example
                                    link</Alert.Link>. Give it a click if you like.
                            </Alert>
                        </Col>
                    </Row>
                </Card.Body>

                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                </Card.Body>
                <Card.Body>
                    <pre className="language-markup" style={{ height: "310px" }}>
                        <LinkColorExample />
                    </pre>
                </Card.Body>
            </Card>
            
        </React.Fragment>
    )
}

export default LinkColorAlerts; 