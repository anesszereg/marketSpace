import React, { useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GridsModalExample, StaticBackdropModalExample } from './UiModalCode';

import Welldone from 'assets/images/Gifs/1103-confetti-outline.gif'

const GridsStatic = () => {
    const [modal_grid, setmodal_grid] = useState<boolean>(false);
    function tog_grid() {
        setmodal_grid(!modal_grid);
    }
    const [modal_backdrop, setmodal_backdrop] = useState<boolean>(false);
    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
    }
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Grids in Modals</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>container-fluid</code> class within the modal-body to utilize the Bootstrap grid system within a modal by nesting.</p>
                            <div className="live-preview">
                                <Button variant="primary" onClick={() => tog_grid()}>
                                    Launch Demo Modal
                                </Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <GridsModalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Static Backdrop Modal</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>data-bs-backdrop="static"</code> to modal not to close when clicking outside the modal.</p>
                            <div className="live-preview">
                                <div>
                                    <Button variant="primary" onClick={() => tog_backdrop()}>
                                        Static Backdrop Modal
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <StaticBackdropModalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Grids in Modals */}
            <Modal
                show={modal_grid}
                onHide={() => {
                    tog_grid();
                }}
            >
                <Modal.Header className="modal-title fw-bold">
                    Grid Modals
                </Modal.Header>
                <Modal.Body>
                    <form action="#">
                        <div className="row g-3">
                            <Col xxl={6}>
                                <div>
                                    <Form.Label htmlFor="firstName" className="form-label">First Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="firstName" placeholder="Enter firstname" />
                                </div>
                            </Col>
                            <Col xxl={6}>
                                <div>
                                    <Form.Label htmlFor="lastName" className="form-label">Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="lastName" placeholder="Enter lastname" />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Form.Label className="form-label">Gender</Form.Label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <Form.Label className="form-check-label" htmlFor="inlineRadio1">Male</Form.Label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <Form.Label className="form-check-label" htmlFor="inlineRadio2">Female</Form.Label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                        <Form.Label className="form-check-label" htmlFor="inlineRadio3">Others</Form.Label>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={6}>
                                <Form.Label htmlFor="emailInput" className="form-label">Email</Form.Label>
                                <Form.Control type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                            </Col>
                            <Col xxl={6}>
                                <Form.Label htmlFor="passwordInput" className="form-label">Password</Form.Label>
                                <Form.Control type="password" className="form-control" id="passwordInput" value="451326546" placeholder="Enter password" />
                            </Col>
                            <Col lg={12}>
                                <div className="hstack gap-2 justify-content-end">
                                    <Button variant="light" onClick={() => setmodal_grid(false)}>Close</Button>
                                    <Button variant="primary" >Submit</Button>
                                </div>
                            </Col>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Static Backdrop Modal */}
            <Modal
                show={modal_backdrop}
                onHide={() => {
                    tog_backdrop();
                }}
                backdrop={'static'}
                id="staticBackdrop"
                centered
            >
                <Modal.Header className="modal-title fw-bold" id="staticBackdropLabel" >

                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <img
                        src={Welldone}
                        style={{ width: "120px", height: "120px" }} alt="">
                    </img>
                            {/* trigger="loop"
                            colors="primary:#121331,secondary:#08a88a" */}

                    <div className="mt-4">
                        <h3 className="mb-3">You've made it!</h3>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_backdrop(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success" onClick={() => setmodal_backdrop(false)}>Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


        </React.Fragment>
    )
}

export default GridsStatic;