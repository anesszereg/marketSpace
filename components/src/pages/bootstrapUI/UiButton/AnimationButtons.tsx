import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { GradientButtonsExample } from './UiButtonCode';

const AnimationButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Animation Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>bg-animation </code>class to create an animated button.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button className="btn-primary btn-animation" data-text="Primary"><span>Primary</span></Button>
                                <Button className="btn-secondary btn-animation" data-text="Secondary"><span>Secondary</span></Button>
                                <Button className="btn-success btn-animation" data-text="Success"><span>Success</span></Button>
                                <Button className="btn-info btn-animation" data-text="Info"><span>Info</span></Button>
                                <Button className="btn-warning btn-animation" data-text="Warning"><span>Warning</span></Button>
                                <Button className="btn-danger btn-animation" data-text="Danger"><span>Danger</span></Button>
                                <Button className="btn-dark btn-animation" data-text="Dark"><span>Dark</span></Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <GradientButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AnimationButtons