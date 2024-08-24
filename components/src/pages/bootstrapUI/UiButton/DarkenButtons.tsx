import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { DarkenButtonsExample } from './UiButtonCode';

const DarkenButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Darken Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Example of simple darken buttons.</p>
                            <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                <Button className="btn-darken-primary">Primary</Button>
                                <Button className="btn-darken-secondary">Secondary</Button>
                                <Button className="btn-darken-success">Success</Button>
                                <Button className="btn-darken-warning">Warning</Button>
                                <Button className="btn-darken-danger">Danger</Button>
                                <Button className="btn-darken-info">Info</Button>
                                <Button className="btn-darken-dark">Dark</Button>
                                <Button className="btn-darken-light">Light</Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <DarkenButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DarkenButtons