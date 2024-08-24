import React, { useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Image, Row, Toast } from 'react-bootstrap';
// import { ToastContainer, toast, Slide } from 'react-toastify';
import { BootstrapToastsExample } from './UiNotificationCode';

import logosm from "assets/images/logo-sm.png"

const BootstrapToasts = () => {
    document.title=" Notifications | Toner eCommerce + React Admin Template";

    const [toast1, setToast1] = useState(true);
    const [toast2, setToast2] = useState(true);
    const [toast3, setToast3] = useState(true);
    const [toast4, setToast4] = useState(true);
    const [toast5, setToast5] = useState(true);
    const [toast6, setToast6] = useState(true);

    const togglesetToast1 = () => setToast1(!setToast1);
    const togglesetToast2 = () => setToast2(!setToast2);
    const togglesetToast3 = () => setToast3(!setToast3);
    const togglesetToast4 = () => setToast4(!setToast4);
    const togglesetToast5 = () => setToast5(!setToast5);
    const togglesetToast6 = () => setToast6(!setToast6);

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Notifications" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Bootstrap Toasts</h4>
                            </Card.Header>

                            <Card.Body>
                                <div>
                                    <Row className="g-3">
                                        <Col xxl={6}>
                                            <h5 className="fs-14 mb-3">Default Toast</h5>
                                            <p className="text-muted">Use <code>toast</code> class to set a default toast.</p>
                                            <Toast className="fade" show={toast1} onClose={togglesetToast1}>
                                                <Toast.Header>
                                                    <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                    <span className="fw-semibold me-auto">Toner</span>
                                                    <small>06 mins ago</small>
                                                </Toast.Header>
                                                <Toast.Body>
                                                    Hello, world! This is a toast message.
                                                </Toast.Body>
                                            </Toast>

                                            <div className="mt-4">
                                                <h5 className="fs-14">Translucent</h5>
                                                <p className="text-muted">Toasts are slightly translucent, too, so they blend over whatever they might appear over.</p>
                                                <div className="p-3 bg-light">
                                                    <Toast className="fade" show={toast2} onClose={togglesetToast2}>
                                                        <Toast.Header>
                                                            <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                            <span className="fw-semibold me-auto">Toner</span>
                                                            <small>11 mins ago</small>
                                                        </Toast.Header>
                                                        <Toast.Body>
                                                            Hello, world! This is a toast message.
                                                        </Toast.Body>
                                                    </Toast>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xxl={6}>
                                            <div>
                                                <h5 className="fs-14">Stacking</h5>
                                                <p className="text-muted">When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>

                                                <div className="p-3 bg-light">
                                                    <Toast className="fade" show={toast3} onClose={togglesetToast3}>
                                                        <Toast.Header>
                                                            <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                            <span className="fw-semibold me-auto">Toner</span>
                                                            <small>Just now</small>
                                                        </Toast.Header>
                                                        <Toast.Body>
                                                            See? Just like this.
                                                        </Toast.Body>
                                                    </Toast>

                                                    <Toast className="fade" show={toast4} onClose={togglesetToast4}>
                                                        <Toast.Header>
                                                            <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                            <span className="fw-semibold me-auto">Toner</span>
                                                            <small>2 seconds ago</small>
                                                        </Toast.Header>
                                                        <Toast.Body>
                                                            Heads up, toasts will stack automatically
                                                        </Toast.Body>
                                                    </Toast>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="mt-5">
                                        <h5 className="fs-14">Placement</h5>
                                        <Row className="g-3">
                                            <Col xxl={6}>
                                                <div>
                                                    <p className="text-muted">Place toasts with custom CSS as you need them.
                                                        The top right
                                                        is often used
                                                        for notifications, as is the top middle. If you’re only ever
                                                        going to show one toast
                                                        at a time, put
                                                        the positioning styles right on the <code>.toast</code>.</p>

                                                    <div className="bg-light" aria-live="polite" aria-atomic="true" style={{ position: "relative", minHeight: "200px" }}>
                                                        <Toast className="fade" show={toast5} onClose={togglesetToast5} style={{ position: "absolute", top: "16px", right: "16px" }}>
                                                            <Toast.Header>
                                                                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                                <span className="fw-semibold me-auto">Toner</span>
                                                                <small>06 mins ago</small>
                                                            </Toast.Header>
                                                            <Toast.Body>
                                                                Hello, world! This is a toast message.
                                                            </Toast.Body>
                                                        </Toast>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xxl={6}>
                                                <div>
                                                    <p className="text-muted">You can also get fancy with flexbox utilities
                                                        to align toasts horizontally and/or vertically.</p>

                                                    <div aria-live="polite" aria-atomic="true" className="bg-light d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                                                        <Toast className="fade" show={toast6} onClose={togglesetToast6}>
                                                            <Toast.Header>
                                                                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                                <span className="fw-semibold me-auto">Toner</span>
                                                                <small>11 mins ago</small>
                                                            </Toast.Header>
                                                            <Toast.Body>
                                                                Hello, world! This is a toast message.
                                                            </Toast.Body>
                                                        </Toast>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "300px" }}>
                                    <BootstrapToastsExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default BootstrapToasts