import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { SoftButtonsExample } from './UiButtonCode';

const SoftButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Soft Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-soft-</code> class with the below-mentioned variation to create a button with the soft background.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="soft-primary">Primary</Button>
                                <Button variant="soft-secondary">Secondary</Button>
                                <Button variant="soft-success">Success</Button>
                                <Button variant="soft-info">Info</Button>
                                <Button variant="soft-warning">Warning</Button>
                                <Button variant="soft-danger">Danger</Button>
                                <Button variant="soft-dark">Dark</Button>
                            </div>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <SoftButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SoftButtons;