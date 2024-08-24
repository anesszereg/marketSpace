import React from 'react';
import { Button, ButtonGroup, Card, Col, Row , Dropdown } from 'react-bootstrap';
import { VerticalButtonsExample } from './UiButtonCode';

const VerticalVariation = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Vertical Variation</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Make a set of buttons appear <code>vertically</code> stacked .Split button dropdowns are not supported here.</p>
                            <div className="row gy-3">
                                <div className="col-auto">
                                    <ButtonGroup aria-label="Button group with nested dropdown">
                                        <Button variant="primary">1</Button>
                                        <Button variant="primary">2</Button>
                                        <Dropdown>
                                            <Dropdown.Toggle id="btnGroupDrop1" variant="primary" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" aria-labelledby="btnGroupDrop1">
                                                <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </ButtonGroup>
                                </div>
                                <div className="col-auto">
                                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                        <Button variant="light">Button</Button>
                                        <Dropdown>
                                            <Dropdown.Toggle id="btnGroupDrop1" variant="light" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                                                <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button variant='light'>Button</Button>
                                        <Button variant='light'>Button</Button>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="btn-group-vertical" aria-label="Vertical radio toggle button group">
                                        <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio1" defaultChecked />
                                        <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio1">Radio 1</Button>
                                        <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio2" />
                                        <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio2">Radio 2</Button>
                                        <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio3" />
                                        <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio3">Radio 3</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <VerticalButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default VerticalVariation;