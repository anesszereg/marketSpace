import React, { useState } from 'react';
import { Card, Col, Button, Row, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BorderIconExample } from './UiNotificationCode';

const BorderedwithIcon = () => {

    const [toast7, setToast7] = useState(false);
    const [toast8, setToast8] = useState(false);
    const [toast9, setToast9] = useState(false);
    const [toast10, setToast10] = useState(false);

    const togglesetToast7 = () => setToast7(!setToast7);
    const togglesetToast8 = () => setToast8(!setToast8);
    const togglesetToast9 = () => setToast9(!setToast9);
    const togglesetToast10 = () => setToast10(!setToast10);


    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Bordered with Icon Toast</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>toast-border-</code> with below-mentioned color variation to set a toast with border and icon.</p>
                            <div>
                                <div className="position-relative">
                                    <div className="hstack flex-wrap gap-2">
                                        <Button variant="primary" onClick={() => setToast7(!toast7)} id="borderedToast1Btn">Primary Toast</Button>
                                        <Button variant="success" onClick={() => setToast8(!toast8)} id="borderedToast2Btn">Success Toast</Button>
                                        <Button variant="warning" onClick={() => setToast9(!toast9)} id="borderedTost3Btn">Warning Toast</Button>
                                        <Button variant="danger" onClick={() => setToast10(!toast10)} id="borderedToast4Btn">Danger Toast</Button>
                                    </div>

                                    <div style={{ zIndex: "11" }}>
                                        <Toast show={toast7} onClose={togglesetToast7} className="toast-border-primary overflow-hidden mt-3">
                                            <Toast.Body>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2">
                                                        <i className="ri-user-smile-line align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0">Your application was successfully sent.</h6>
                                                    </div>
                                                </div>
                                            </Toast.Body>
                                        </Toast>
                                    </div>

                                    <div style={{ zIndex: "11" }}>
                                        <Toast show={toast8} onClose={togglesetToast8} className="toast-border-success overflow-hidden mt-3">
                                            <Toast.Body>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2">
                                                        <i className="ri-checkbox-circle-fill align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0">Yey! Everything worked!</h6>
                                                    </div>
                                                </div>
                                            </Toast.Body>
                                        </Toast>
                                    </div>

                                    <div style={{ zIndex: "11" }}>
                                        <Toast show={toast9} onClose={togglesetToast9} className="toast-border-warning overflow-hidden mt-3">
                                            <Toast.Body>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2">
                                                        <i className="ri-notification-off-line align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0">Something went wrong, try again.</h6>
                                                    </div>
                                                </div>
                                            </Toast.Body>
                                        </Toast>
                                    </div>

                                    <div style={{ zIndex: "11" }}>
                                        <Toast show={toast10} onClose={togglesetToast10} className="toast-border-danger overflow-hidden mt-3">
                                            <Toast.Body>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2">
                                                        <i className="ri-alert-line align-middle"></i>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0">Something is very wrong! <Link to="#" className="text-decoration-underline">See detailed report.</Link></h6>
                                                    </div>
                                                </div>
                                            </Toast.Body>
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
                                <BorderIconExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BorderedwithIcon