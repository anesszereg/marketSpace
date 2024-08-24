import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
// import ModalDialog from 'react-bootstrap';
import  Modal  from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { PositionModalExample } from './UiModalCode';


import Emoji from 'assets/images/Gifs/261-emoji-smile-outline.gif';



const ModalPositions = () => {
    const [modal_positionTop, setmodal_positionTop] = useState<boolean>(false);
    function tog_positionTop() {
        setmodal_positionTop(!modal_positionTop);
    }

    const [modal_positionTopRight, setmodal_positionTopRight] = useState<boolean>(false);
    function tog_positionTopRight() {
        setmodal_positionTopRight(!modal_positionTopRight);
    }


    const [modal_positionBottom, setmodal_positionBottom] = useState<boolean>(false);
    function tog_positionBottom() {
        setmodal_positionBottom(!modal_positionBottom);
    }

    const [modal_positionBottomRight, setmodal_positionBottomRight] = useState<boolean>(false);
    function tog_positionBottomRight() {
        setmodal_positionBottomRight(!modal_positionBottomRight);
    }
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Modal Positions</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted text-muted">Use <code>modal-dialog-right</code>, <code>modal-dialog-bottom</code>, or <code>modal-dialog-bottom-right</code> class to modal-dialog class to set modal at different positions respectively.</p>
                            <div className="live-preview">
                                <div>
                                    <div className="hstack gap-2 flex-wrap">
                                        <Button variant="primary" onClick={() => tog_positionTop()}>Top Modal</Button>
                                        <Button variant="secondary" onClick={() => tog_positionTopRight()}>Top Right Modal</Button>
                                        <Button variant="success" onClick={() => tog_positionBottom()}>Bottom Modal</Button>
                                        <Button variant="danger" onClick={() => tog_positionBottomRight()}>Bottom Right Modal</Button>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "120px" }}>
                                    <PositionModalExample />
                                </pre>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Position Top */}

            <Modal id="topmodal" show={modal_positionTop} onHide={() => { tog_positionTop(); }}  >

                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <img src={Emoji}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </img>
                    {/* trigger="loop" colors="primary:#121331,secondary:#08a88a" */}
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium"  onClick={() => { tog_positionTop(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Top Right */}

            <Modal 
                id="top-rightmodal" 
                show={modal_positionTopRight} 
                toggle={() => { tog_positionTopRight(); }} 
                className="modal-dialog-right"  >
                    
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <img src={Emoji}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </img>
                    {/* trigger="loop" colors="primary:#121331,secondary:#08a88a" */}
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_positionTopRight(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Bottom */}

            <Modal id="bottomModal" 
            show={modal_positionBottom} 
            onHide={() => { tog_positionBottom(); }} 
            className="modal-dialog-bottom" >
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <img src={Emoji}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </img>
                    {/* trigger="loop" colors="primary:#121331,secondary:#08a88a" */}
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4">The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_positionBottom(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Bottom Right */}

            <Modal id="bottom-rightModal" show={modal_positionBottomRight} onHide={() => { tog_positionBottomRight(); }} className="modal-dialog-bottom-right" >
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <img src={Emoji}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </img>
                    {/* trigger="loop" colors="primary:#121331,secondary:#08a88a" */}
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_positionBottomRight(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}



export default ModalPositions;