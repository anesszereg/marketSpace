import React from 'react';
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { GroupsizingButtonsExample } from './UiButtonCode';

const ButtonGroupSizing = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Button Group Sizing</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-group-</code> className with the below-mentioned variation to set the different sizes of button groups.</p>
                            <div className="d-flex flex-wrap align-items-center gap-2">
                                <ButtonGroup className="btn-group-lg" aria-label="Basic example">
                                    <Button variant="primary">Left</Button>
                                    <Button variant="primary">Middle</Button>
                                    <Button variant="primary">Right</Button>
                                </ButtonGroup>
                                <ButtonGroup className="mt-2" aria-label="Basic example">
                                    <Button variant="light">Left</Button>
                                    <Button variant="light">Middle</Button>
                                    <Button variant="light">Right</Button>
                                </ButtonGroup>
                                <ButtonGroup className="btn-group-sm mt-2" aria-label="Basic example">
                                    <Button variant="secondary">Left</Button>
                                    <Button variant="secondary">Middle</Button>
                                    <Button variant="secondary">Right</Button>
                                </ButtonGroup>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <GroupsizingButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonGroupSizing