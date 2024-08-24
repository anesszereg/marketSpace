import React, { useState } from 'react';
import { Card, Col, Image, Row, Toast, Form } from 'react-bootstrap';
import { ToastPlacementExample } from './UiNotificationCode';
import logosm from "assets/images/logo-sm.png";

const Placement = () => {
    const [toast11, setToast11] = useState(true);
    const [position, setPosition] = useState<any>();
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Toast Placement</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Various example of <code>toast placement</code>.</p>
                            <div>
                                <Form>
                                    <div className="mb-3">
                                        <select className="form-select mt-2" onChange={(e) => setPosition(e.currentTarget.value)}>
                                            <option value="">Select a position...</option>
                                            <option value="top-0 start-0">Top left</option>
                                            <option value="top-0 start-50 translate-middle-x">Top center</option>
                                            <option value="top-0 end-0">Top right</option>
                                            <option value="top-50 start-0 translate-middle-y">Middle left</option>
                                            <option value="top-50 start-50 translate-middle">Middle center</option>
                                            <option value="top-50 end-0 translate-middle-y">Middle right</option>
                                            <option value="bottom-0 start-0">Bottom left</option>
                                            <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                                            <option value="bottom-0 end-0">Bottom right</option>
                                        </select>
                                    </div>
                                </Form>
                                <div aria-live="polite" aria-atomic="true" className="bd-example bg-light position-relative" style={{ height: "300px" }}>
                                    <div className={"toast-container position-absolute p-3 " + position} id="toastPlacement">
                                        <Toast show={toast11} onClose={() => setToast11(!toast11)}>
                                            <Toast.Header>
                                                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                <strong className="me-auto">Toner</strong>
                                                <small>11 mins ago</small>
                                            </Toast.Header>
                                            <div className="toast-body">
                                                Hello, world! This is a toast message.
                                            </div>
                                        </Toast>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <ToastPlacementExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Placement