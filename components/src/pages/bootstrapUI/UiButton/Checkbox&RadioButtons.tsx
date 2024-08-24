import React from 'react';
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CheckButtonsExample } from './UiButtonCode';

const CheckboxRadioButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Checkbox & Radio Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Combine button-like <code>checkbox and radio</code> <Link to="https://getbootstrap.com/docs/5.1/forms/checks-radios/">toggle buttons</Link> into a seamless looking button group.
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-2">
                                <ButtonGroup aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" className="btn-check" id="btncheck1" defaultChecked />
                                    <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck1">Checkbox 1</Button>

                                    <input type="checkbox" className="btn-check" id="btncheck2" />
                                    <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck2">Checkbox 2</Button>

                                    <input type="checkbox" className="btn-check" id="btncheck3" />
                                    <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck3">Checkbox 3</Button>
                                </ButtonGroup>

                                <ButtonGroup aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                                    <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio1">Radio 1</Button>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                    <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio2">Radio 2</Button>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                    <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio3">Radio 3</Button>
                                </ButtonGroup>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }} >
                                <CheckButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    )
}

export default CheckboxRadioButtons;