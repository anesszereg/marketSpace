import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { RoundedButtonsExample } from './UiButtonCode';

const RoundedButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Rounded Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use the <code>rounded-pill </code>class to make a rounded button.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant='primary' className="rounded-pill">Primary</Button>
                                <Button variant='secondary' className="rounded-pill">Secondary</Button>
                                <Button variant='success' className="rounded-pill">Success</Button>
                                <Button variant='info' className="rounded-pill">Info</Button>
                                <Button variant='warning' className="rounded-pill">Warning</Button>
                                <Button variant='danger' className="rounded-pill">Danger</Button>
                                <Button variant='dark' className="rounded-pill">Dark</Button>
                                <Button variant='light' className="rounded-pill">Light</Button>
                            </div>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <RoundedButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RoundedButtons;