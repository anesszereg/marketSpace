import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Form, Row } from 'react-bootstrap';

const BootstrapRange = () => {
    document.title=" Range Slider | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="Form Advanced" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Bootstrap Range</h4>
                            </Card.Header>

                            <Card.Body>
                                <div className="live-preview">
                                    <div>
                                        <div>
                                            <h5 className="fs-14">Default Range</h5>
                                            <p className="text-muted">Use <code>type="range"</code> attribute and <code>form-range</code> class to create a deafult range.</p>

                                            <Form.Range className="form-range" id="customRange1" />
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-14">Disabled</h5>
                                            <p className="text-muted">Use <code>disabled</code> attribute on an input to give it a grayed out appearance and remove pointer events.</p>

                                            <Form.Range className="form-range" id="disabledRange" disabled />
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-14">Min and Max</h5>
                                            <p className="text-muted">Use <code>min</code> and <code>max</code> attribute with specified range input respectively.</p>

                                            <Form.Range className="form-range" min="0" max="5" id="customRange2" />
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-14">Steps</h5>
                                            <p className="text-muted">By default, range inputs “snap” to integer values. To change this, you can specify a step value. In the example below, we double the number of steps by using <code>step="0.5"</code> attribute.</p>

                                            <Form.Range className="form-range" min="0" max="5" step="0.5" id="customRange3" />
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

export default BootstrapRange;