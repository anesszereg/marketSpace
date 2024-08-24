import React from 'react';
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { ToolbarButtonsExample } from './UiButtonCode';

const ButtonsToolbar = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons Toolbar</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-toolbar</code> className to combine sets of button groups into more complex components.</p>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <ButtonGroup className="me-2" aria-label="First group">
                                        <Button variant='light'>1</Button>
                                        <Button variant='light'>2</Button>
                                        <Button variant='light'>3</Button>
                                        <Button variant='light'>4</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="me-2" aria-label="Second group">
                                        <Button variant='light'>5</Button>
                                        <Button variant='light'>6</Button>
                                        <Button variant='light'>7</Button>
                                    </ButtonGroup>
                                    <ButtonGroup aria-label="Third group">
                                        <Button variant='light'>8</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ToolbarButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonsToolbar