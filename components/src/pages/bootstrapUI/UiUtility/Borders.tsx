import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';

const Borders = () => {
    document.title=" Utilities | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Utilities" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Borders</h4>
                            </Card.Header>

                            <Card.Body>

                                <p className="text-muted">Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.</p>

                                <div className="live-preview">
                                    <div>
                                        <div>
                                            <h5 className="fs-13 mb-3">Border width</h5>
                                            <div className="d-flex align-items-start flex-wrap gap-4">
                                                <div className="text-center">
                                                    <div className="border border-1 border-light avatar-md bg-transparent mx-auto mb-1"></div>
                                                    <p><code>.border.border-1</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-2 border-light avatar-md bg-transparent mx-auto mb-1"></div>
                                                    <p><code>.border.border-2</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-3 border-light avatar-md bg-transparent mx-auto mb-1"></div>
                                                    <p><code>.border.border-3</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-4 border-light avatar-md bg-transparent mx-auto mb-1"></div>
                                                    <p><code>.border.border-4</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-5 border-light avatar-md bg-transparent mx-auto mb-1"></div>
                                                    <p><code>.border.border-5</code></p>
                                                </div>
                                            </div>
                                        </div>
                                        <Row className="mt-4">
                                            <Col lg={6}>
                                                <div>
                                                    <h5 className="fs-13 mb-3">Additive</h5>
                                                    <Row>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border avatar-md border-success bg-light mx-auto mb-1"></div>
                                                                <p><code>.border</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border-top avatar-md border-success bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-top</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border-end avatar-md border-success bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-end</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border-bottom avatar-md border-success bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-bottom</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border-start avatar-md border-success bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-start</code></p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div>
                                                    <h5 className="fs-13 mb-3">Subtractive</h5>
                                                    <Row>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border-0 border-success avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-0</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border border-success border-top-0 avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-top-0</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border border-success border-end-0 avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-end-0</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border border-success border-bottom-0 avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-bottom-0</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col xl={2} sm={4}>
                                                            <div className="text-center">
                                                                <div className="border border-start-0 border-success avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-start-0</code></p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="mt-4">
                                            <h5 className="fs-13 mb-3">Border Color</h5>
                                            <div className="d-flex align-items-start flex-wrap gap-4">
                                                <div className="text-center">
                                                    <div className="border border-primary avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-primary</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-secondary avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-secondary</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-success avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-success</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-info avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-info</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-warning avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-warning</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-danger avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-danger</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-dark avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-dark</code></p>
                                                </div>
                                            </div>
                                        </div>

                                        <Row className="mt-4">
                                            <Col xxl={6}>
                                                <div>
                                                    <h5 className="fs-13 mb-3">Border Style</h5>
                                                    <div className="d-flex align-items-start flex-wrap gap-4">
                                                        <div className="text-center">
                                                            <div className="border border-primary border-dotted avatar-md bg-light mx-auto mb-1"></div>
                                                            <p><code>.border-dotted</code></p>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="border border-secondary border-dashed avatar-md bg-light mx-auto mb-1"></div>
                                                            <p><code>.border-dashed</code></p>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="border border-success border-groove avatar-md bg-light mx-auto mb-1"></div>
                                                            <p><code>.border-groove</code></p>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="border border-info border-outset avatar-md bg-light mx-auto mb-1"></div>
                                                            <p><code>.border-outset</code></p>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="border border-warning border-ridge avatar-md bg-light mx-auto mb-1"></div>
                                                            <p><code>.border-ridge</code></p>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="border border-danger border-inset avatar-md bg-light mx-auto mb-1"></div>
                                                            <p><code>.border-inset</code></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xxl={6}>
                                                <div>
                                                    <h5 className="fs-13 mb-3">Additive</h5>
                                                    <Row>
                                                        <Col sm={3}>
                                                            <div className="text-center">
                                                                <div className="border-start border-start-dashed border-success avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-start-dashed</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col sm={3}>
                                                            <div className="text-center">
                                                                <div className="border-top border-top-dashed border-success avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-top-dashed</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col sm={3}>
                                                            <div className="text-center">
                                                                <div className="border-end border-end-dashed border-success avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-end-dashed</code></p>
                                                            </div>
                                                        </Col>
                                                        <Col sm={3}>
                                                            <div className="text-center">
                                                                <div className="border-bottom border-bottom-dashed border-success avatar-md bg-light mx-auto mb-1"></div>
                                                                <p><code>.border-bottom-dashed</code></p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="mt-4">
                                            <h5 className="fs-13 mb-3">Border Opacity</h5>
                                            <div className="d-flex align-items-start flex-wrap gap-4">
                                                <div className="text-center">
                                                    <div className="border border-success border-opacity-10 avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-opacity-10</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-success border-opacity-25 avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-opacity-25</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-success border-opacity-50 avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-opacity-50</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-success border-opacity-75 avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-opacity-75</code></p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="border border-success border-opacity-100 avatar-md bg-light mx-auto mb-1"></div>
                                                    <p><code>.border-opacity-100</code></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Borders