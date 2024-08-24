import React, { useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { ScrollableModalExample, VaryingModalExample } from './UiModalCode';

const ScrollableVarifying = () => {
    const [modal_scroll, setmodal_scroll] = useState<boolean>(false);
    function tog_scroll() {
        setmodal_scroll(!modal_scroll);
    }
    const [modal_varying1, setmodal_varying1] = useState<boolean>(false);
    function tog_varying1() {
        setmodal_varying1(!modal_varying1);
    }

    const [modal_varying2, setmodal_varying2] = useState<boolean>(false);
    function tog_varying2() {
        setmodal_varying2(!modal_varying2);
    }

    const [modal_varying3, setmodal_varying3] = useState<boolean>(false);
    function tog_varying3() {
        setmodal_varying3(!modal_varying3);
    }
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Scrollable Modal</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use<code> modal-dialog-scrollable</code> class to create a modal scrollable.</p>
                            <div className="live-preview">
                                <div>
                                    <Button variant="primary" onClick={() => tog_scroll()}>Scrollable Modal</Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "120px" }}>
                                <ScrollableModalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Varying Modal Content</h4>
                        </Card.Header>
                        <Card.Body>
                            <div className="live-preview">
                                <div>
                                    <div className="hstack gap-2 flex-wrap">
                                        <Button variant="primary" onClick={() => tog_varying1()}>Open Modal for Mary</Button>
                                        <Button variant="primary" onClick={() => tog_varying2()}>Open Modal for Jennifer</Button>
                                        <Button variant="primary" onClick={() => tog_varying3()}>Open Modal for Roderick</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "100px" }}>
                                <VaryingModalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Scrollable Modal  */}
            <Modal
                show={modal_scroll}
                onHide={() => {
                    tog_scroll();
                }}
                scrollable={true}
                id="exampleModalScrollable"
            >
                <Modal.Header className="modal-title fw-bold" id="exampleModalScrollableTitle">
                    Scrollable modal
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <h6 className="fs-17 my-3">Graphic Design</h6>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in Graphic Design is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                </Modal.Body>

                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => setmodal_scroll(false)}
                    >
                        Close
                    </Button>
                    <Button
                        color="primary"
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>

            {/* modal for Mary */}
            <Modal
                show={modal_varying1}
                onHide={() => {
                    tog_varying1();
                }}
                id="exampleModal"
            >
                <Modal.Header className="modal-title fw-bold" id="exampleModalLabel">
                    New message to Mary
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                            <Form.Control type="text" className="form-control" id="customer-name" value="Mary" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text" rows={4}></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => {
                            setmodal_varying1(false);
                        }}
                    >
                        Back
                    </Button>
                    <Button variant="primary">
                        Send message
                    </Button>
                </div>
            </Modal>

            {/* modal for Jennifer */}
            <Modal
                show={modal_varying2}
                onHide={() => {
                    tog_varying2();
                }}
            >
                <Modal.Header className="modal-title fw-bold">
                    New message to Jennifer
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                            <Form.Control type="text" className="form-control" id="customer-name" value="Jennifer" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text" rows={4}></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => {
                            setmodal_varying2(false);
                        }}
                    >
                        Back
                    </Button>
                    <Button variant="primary">
                        Send message
                    </Button>
                </div>
            </Modal>;

            {/* modal for Roderick */}
            <Modal
                show={modal_varying3}
                onHide={() => {
                    tog_varying3();
                }}
            >
                <Modal.Header className="modal-title fw-bold">
                    New message to Roderick
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                            <Form.Control type="text" className="form-control" id="customer-name" value="Roderick" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text" rows={4}></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => {
                            setmodal_varying3(false);
                        }}
                    >
                        Back
                    </Button>
                    <Button variant="primary">
                        Send message
                    </Button>
                </div>
            </Modal>;


        </React.Fragment>
    )
}

export default ScrollableVarifying