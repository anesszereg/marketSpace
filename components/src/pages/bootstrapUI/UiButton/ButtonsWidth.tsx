import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { WidthButtonsExample } from './UiButtonCode';

const ButtonsWidth = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons Width</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized buttons respectively.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant='primary' className="w-xs">Xs</Button>
                                <Button variant='danger' className="w-sm">Small</Button>
                                <Button variant='warning' className="w-md">Medium</Button>
                                <Button variant='success' className="w-lg">Large</Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <WidthButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonsWidth;