import React, { useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { AnimationModalExample } from './UiModalCode';

const AnimationModals = () => {
    const [modal_animationRight, setmodal_animationRight] = useState<boolean>(false);
    function tog_animationRight() {
        setmodal_animationRight(!modal_animationRight);
    }

    const [modal_animationLeft, setmodal_animationLeft] = useState<boolean>(false);
    function tog_animationLeft() {
        setmodal_animationLeft(!modal_animationLeft);
    }

    const [modal_animationUp, setmodal_animationUp] = useState<boolean>(false);
    function tog_animationUp() {
        setmodal_animationUp(!modal_animationUp);
    }

    const [modal_animationFlip, setmodal_animationFlip] = useState<boolean>(false);
    function tog_animationFlip() {
        setmodal_animationFlip(!modal_animationFlip);
    }

    const [modal_animationZoom, setmodal_animationZoom] = useState<boolean>(false);
    function tog_animationZoom() {
        setmodal_animationZoom(!modal_animationZoom);
    }
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Animation Modals</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>fadeInRight</code>, <code>fadeInLeft</code>, <code>fadeInUp</code>, <code>flip</code>, or <code>zoomIn</code> class to modal class to set different modal with animation effect respectively.</p>
                            <div className="live-preview">
                                <div>
                                    <div className="hstack gap-2 flex-wrap">
                                        <Button variant="primary" onClick={() => tog_animationRight()}>Fade In Right Modal</Button>
                                        <Button variant="primary" onClick={() => tog_animationLeft()} >Fade In Left Modal</Button>
                                        <Button variant="primary" onClick={() => tog_animationUp()} >Fade In Up Modal</Button>
                                        <Button variant="primary" onClick={() => tog_animationFlip()} >Flip Modal</Button>
                                        <Button variant="primary" onClick={() => tog_animationZoom()} >Zoom In Modal</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "120px" }}>
                                <AnimationModalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Animation Modals */}

            {/* RightSide Animation */}
            <Modal id="fadeInRightModal" show={modal_animationRight} onHide={() => { tog_animationRight(); }} className="fadeInRight" centered >
                <Modal.Header className="modal-title fw-bold" id="fadeInRightModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationRight(); }}>
                        Close
                    </Button>
                    <Button variant="primary"> Save changes </Button>
                </div>
            </Modal>

            {/* LeftSide Animation */}
            <Modal id="fadeInleftModal" show={modal_animationLeft} onHide={() => { tog_animationLeft(); }} className="fadeInLeft" centered >
                <Modal.Header className="modal-title fw-bold" id="fadeInleftModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationLeft(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* UpSide Animation */}
            <Modal id="fadeInUpModal" show={modal_animationUp} onHide={() => { tog_animationUp(); }} className="fadeInUp" centered >
                <Modal.Header className="modal-title fw-bold" id="fadeInUpModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationUp(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* Flip Animation */}
            <Modal id="flipModal" show={modal_animationFlip} onHide={() => { tog_animationFlip(); }} className="flip" centered >
                <Modal.Header className="modal-title fw-bold" id="flipModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationFlip(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* ZoomIn Animation */}
            <Modal id="flipModal" show={modal_animationZoom} onHide={() => { tog_animationZoom(); }} className="zoomIn" centered >
                <Modal.Header className="modal-title fw-bold" id="flipModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationZoom(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default AnimationModals