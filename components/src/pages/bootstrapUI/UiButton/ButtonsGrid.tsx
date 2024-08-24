import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { GridButtonsExample } from './UiButtonCode';

const ButtonsGrid = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons Grid</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Use <code>d-grid</code> className to create a full-width block button.
                            </p>
                            <div className="d-grid gap-2">
                                <Button className="btn btn-primary" type="button">Button</Button>
                                <Button className="btn btn-primary" type="button">Button</Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <GridButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonsGrid;