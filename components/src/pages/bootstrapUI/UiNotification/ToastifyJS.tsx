import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyJS = () => {

    const defaultnotify = () => toast("Welcome Back! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-primary text-white', transition: Slide, });
    const successnotify = () => toast("Your application was successfully sent", { position: "top-center", hideProgressBar: true, closeOnClick: false, className: 'bg-success text-white', transition: Slide });
    const warningnotify = () => toast("Warning ! Something went wrong try again", { position: "top-center", hideProgressBar: true, closeOnClick: false, className: 'bg-warning text-white', transition: Slide });
    const errornotify = () => toast("Error ! An error occurred.", { position: "top-center", hideProgressBar: true, closeOnClick: false, className: 'bg-danger text-white', transition: Slide });

    const topleftnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-left", hideProgressBar: true, className: 'bg-success text-white' });
    const topcenternotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-center", hideProgressBar: true, className: 'bg-success text-white' });
    const toprightnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-success text-white' });
    const bottomleftnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-left", hideProgressBar: true, className: 'bg-success text-white' });
    const bottomcenternotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-center", hideProgressBar: true, className: 'bg-success text-white' });
    const bottomrightnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-right", hideProgressBar: true, className: 'bg-success text-white' });

    const offsetnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-success text-white m-5' });
    const closeiconnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-success text-white' });
    const durationnotify = () => toast("Toast Duration 5s", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white' });


    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Toastify JS</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-toast</code> <code>data-toast-text=""</code> <code>data-toast-gravity=""</code> <code>data-toast-position=""</code> <code>data-toast-className=""</code> <code>data-toast-duration=""</code> <code>data-toast-close="close"</code> <code>data-toast-style="style"</code> as per your toast requirement.</p>
                            <div>
                                <div className="hstack flex-wrap gap-2">
                                    <Button variant="light" onClick={defaultnotify} className="w-xs">Default</Button>
                                    <Button variant="light" onClick={successnotify} className="w-xs">Success</Button>
                                    <Button variant="light" onClick={warningnotify} className="w-xs">Warning</Button>
                                    <Button variant="light" onClick={errornotify} className="w-x">Error</Button>
                                </div>
                                <div className="mt-4 pt-2">
                                    <h5 className="fs-14 mb-3">Display Position</h5>
                                    <div className="hstack flex-wrap gap-2">
                                        <Button variant="light" className="w-xs" onClick={topleftnotify}>Top Left</Button>
                                        <Button variant="light" className="w-xs" onClick={topcenternotify}>Top Center</Button>
                                        <Button variant="light" className="w-xs" onClick={toprightnotify}>Top Right</Button>
                                        <Button variant="light" className="w-xs" onClick={bottomleftnotify}>Bottom Left</Button>
                                        <Button variant="light" className="w-xs" onClick={bottomcenternotify}>Bottom Center</Button>
                                        <Button variant="light" className="w-xs" onClick={bottomrightnotify}>Bottom Right</Button>
                                    </div>
                                </div>

                                <Row className="mt-3">
                                    <Col lg={4}>
                                        <div className="mt-4">
                                            <h5 className="fs-14 mb-3">Offset Position</h5>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <Button variant="light" className="w-xs" onClick={offsetnotify}>Click Me</Button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="mt-4">
                                            <h5 className="fs-14 mb-3">Close icon Display</h5>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <Button variant="light" className="w-xs" onClick={closeiconnotify}>Click Me</Button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="mt-4">
                                            <h5 className="fs-14 mb-3">Duration</h5>
                                            <div className="d-flex align-items-center flex-wrap gap-2">
                                                <Button variant="light" className="w-xs" onClick={durationnotify}>Click Me</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ToastContainer />
        </React.Fragment>
    )
}

export default ToastifyJS;