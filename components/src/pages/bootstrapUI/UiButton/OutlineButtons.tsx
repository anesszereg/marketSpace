import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { OutlineButtonsExample } from './UiButtonCode';

const OutlineButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Outline Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-outline-</code> class with the below-mentioned variation to create a button with the outline.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary">Primary</Button>
                                <Button variant="outline-secondary">Secondary</Button>
                                <Button variant="outline-success">Success</Button>
                                <Button variant="outline-info">Info</Button>
                                <Button variant="outline-warning">Warning</Button>
                                <Button variant="outline-danger">Danger</Button>
                                <Button variant="outline-dark">Dark</Button>
                                <Button variant="outline-light">Light</Button>
                            </div>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <OutlineButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OutlineButtons;