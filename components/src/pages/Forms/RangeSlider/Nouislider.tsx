import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

const Nouislider = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Nouislider</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted mb-4">noUiSlider is a lightweight JavaScript range slider</p>
                            <div className="live-preview">
                                <div>
                                    <div className="mb-3">
                                        <Row className="align-items-center">
                                            <Col lg={3}>
                                                <h5 className="fs-14">Basic Example</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div data-rangeslider >
                                                    <Form.Range />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row className="align-items-center">
                                            <Col lg={3}>
                                                <h5 className="fs-14">Multi elements range handle</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div data-multielement>
                                                    <Form.Range />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Using HTML5 Input Elements</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="d-inline-flex gap-2 mb-3">
                                                    <select id="input-select" className="form-select form-select-sm w-xs shadow-none"></select>
                                                    <Form.Control type="number" className="form-control form-control-sm w-xs shadow-none" min="-20" max="40" step="1" id="input-number" />
                                                </div>
                                                <div id="html5"><Form.Range /></div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Non linear slider</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div id="nonlinear"><Form.Range /></div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="example-val" id="lower-value"></div>
                                                    <div className="example-val" id="upper-value"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Locking sliders together</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider1"></div>
                                                <span className="example-val mt-2" id="slider1-span"><Form.Range /></span>

                                                <div className="slider" id="slider2"></div>
                                                <span className="example-val mt-2" id="slider2-span"><Form.Range /></span>

                                                <button id="lockbutton" className="btn btn-primary" style={{ float: "right", margin: "20px 0 0" }}>Lock</button>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row className="align-items-center">
                                            <Col lg={3}>
                                                <h5 className="fs-14">Merging overlapping tooltips</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-merging-tooltips"><Form.Range /></div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Only showing tooltips when sliding handle</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-hide"><Form.Range /></div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="mt-4 mb-5">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Moving the slider by clicking pips</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-pips"><Form.Range /></div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Colored Connect Elements</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-color"><Form.Range /></div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Creating a toggle</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div id="slider-toggle"><Form.Range /></div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-14">Soft limits</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div id="soft"><Form.Range /></div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Nouislider