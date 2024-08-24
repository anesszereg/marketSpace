import React, { useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { DefaultModalExample, CenteredModalExample } from './UiModalCode';
import { Link } from 'react-router-dom';

import thumb from 'assets/images/Gifs/1122-thumb-down-outline.gif'


const DefaultVertical = () => {

    document.title=" Modals | Toner eCommerce + React Admin Template";


    const [modal_standard, setmodal_standard] = useState<boolean>(false);
    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    const [modal_center, setmodal_center] = useState<boolean>(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Modals" />
                <Row>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Default Modal</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted text-muted">Use <code>modal-dialog</code> class to show default modal.</p>
                                <div className="live-preview">
                                    <Button variant="primary" onClick={() => tog_standard()}>Standard Modal</Button>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "120px" }}>
                                    <DefaultModalExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Vertically Centered Modal</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>modal-dialog-centered</code> class to show vertically center the modal.</p>
                                <div className="live-preview">
                                    <div>
                                        <Button variant="primary" onClick={() => tog_center()}>Center Modal</Button>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "120px" }}>
                                    <CenteredModalExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* Default Modal */}
            <Modal id="myModal" show={modal_standard} onHide={() => { tog_standard(); }} >
                <Modal.Header className="modal-title fs-18" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-14">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                    <p className="text-muted">It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => tog_standard()}>Close</Button>
                    <Button
                        color="primary"
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>

            {/* Vertically Centered */}
            <Modal
                show={modal_center}
                onHide={() => {
                    tog_center();
                }}
                centered
            >
                <Modal.Header
                    className="modal-title fw-bold">
                    Center Modal
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <img
                        src={thumb}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </img>
                            {/* trigger="loop" 
                            colors="primary:#121331,secondary:#08a88a"  */}
                    <div className="mt-4">
                        <h3 className="mb-3">Oops something went wrong!</h3>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Button variant="light" onClick={() => setmodal_center(false)}>Close</Button>
                            <Link to="#" className="btn btn-danger">Try Again</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>



        </React.Fragment>
    )
}

export default DefaultVertical;