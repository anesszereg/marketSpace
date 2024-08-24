import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { GhostButtonsExample } from './UiButtonCode';

const GhostButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Ghost Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-ghost-</code> class with the below-mentioned variation to create a button with the transparent background.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button className="btn-ghost-primary">Primary</Button>
                                <Button className="btn-ghost-secondary">Secondary</Button>
                                <Button className="btn-ghost-success">Success</Button>
                                <Button className="btn-ghost-info">Info</Button>
                                <Button className="btn-ghost-warning">Warning</Button>
                                <Button className="btn-ghost-danger">Danger</Button>
                                <Button className="btn-ghost-dark">Dark</Button>
                            </div>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <GhostButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GhostButtons