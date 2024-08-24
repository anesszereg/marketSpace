import React, { useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FullscreenResponsiveExample } from './UiModalCode';


const FullscreenResponsiveModals = () => {


    const [modal_fullscreen1, setmodal_fullscreen1] = useState<boolean>(false);
    function tog_fullscreen1() {
        setmodal_fullscreen1(!modal_fullscreen1);
    }

    const [modal_fullscreen_sm, setmodal_fullscreen_sm] = useState<boolean>(false);
    function tog_fullscreen_sm() {
        setmodal_fullscreen_sm(!modal_fullscreen_sm);
    }

    const [modal_fullscreen_md, setmodal_fullscreen_md] = useState<boolean>(false);
    function tog_fullscreen_md() {
        setmodal_fullscreen_md(!modal_fullscreen_md);
    }

    const [modal_fullscreen_lg, setmodal_fullscreen_lg] = useState<boolean>(false);
    function tog_fullscreen_lg() {
        setmodal_fullscreen_lg(!modal_fullscreen_lg);
    }

    const [modal_fullscreen_xl, setmodal_fullscreen_xl] = useState<boolean>(false);
    function tog_fullscreen_xl() {
        setmodal_fullscreen_xl(!modal_fullscreen_xl);
    }

    const [modal_fullscreen_xxl, setmodal_fullscreen_xxl] = useState<boolean>(false);
    function tog_fullscreen_xxl() {
        setmodal_fullscreen_xxl(!modal_fullscreen_xxl);
    }
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Fullscreen Responsive Modals</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted text-muted">Below mentioned modifier classes are used to show fullscreen modal as per minimum screen requirement.</p>
                            <div className="live-preview">
                                <div>
                                    <div className="hstack gap-2 flex-wrap">
                                        <Button variant="primary" onClick={() => tog_fullscreen1()}> Fullscreen modal </Button>
                                        <Button variant="primary" onClick={() => tog_fullscreen_sm()}>Full Screen Below sm</Button>
                                        <Button variant="primary" onClick={() => tog_fullscreen_md()}>Full Screen Below md</Button>
                                        <Button variant="primary" onClick={() => tog_fullscreen_lg()}>Full Screen Below lg</Button>
                                        <Button variant="primary" onClick={() => tog_fullscreen_xl()}>Full Screen Below xl</Button>
                                        <Button variant="primary" onClick={() => tog_fullscreen_xxl()}>Full Screen Below xxl</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "120px" }}>
                                <FullscreenResponsiveExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Fullscreen Responsive Modals */}
            <Modal
                show={modal_fullscreen1}
                fullscreen={true}
                onHide={() => {
                    tog_fullscreen1();
                }}
                className="modal-fullscreen"
                id="fullscreeexampleModal"
            >
                <Modal.Header className="modal-title fw-bold"
                    id="fullscreeexampleModalLabel">
                    Full screen modal
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
                    <h6 className="fs-16 my-3">Graphic Design</h6>
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
                </Modal.Body>
                <div className="modal-footer">
                    <Link to='#'
                        type="button"
                        onClick={() => {
                            tog_fullscreen1();
                        }}
                        className="btn btn-link link-success fw-medium"
                    ><i className="ri-close-line me-1 align-middle" />
                        Close
                    </Link>
                    <Button
                        color="primary"
                        className="btn btn-primary "
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>

            {/* FullscreenSm */}
            <Modal id="exampleModalFullscreenSm" show={modal_fullscreen_sm} onHide={() => { tog_fullscreen_sm(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenSmLabel">
                    Full screen below sm
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
                </Modal.Body>
                <div className="modal-footer">
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_sm(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary"> Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenMd */}
            <Modal id="exampleModalFullscreenMd" show={modal_fullscreen_md} onHide={() => { tog_fullscreen_md(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenMdLabel">
                    Full screen below md
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
                </Modal.Body>
                <div className="modal-footer">
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_md(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenLg */}
            <Modal id="exampleModalFullscreenLg" show={modal_fullscreen_lg} onHide={() => { tog_fullscreen_lg(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenLgLabel">
                    Full screen below lg
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
                </Modal.Body>
                <div className="modal-footer">
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_lg(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenXl */}
            <Modal id="exampleModalFullscreenXl" show={modal_fullscreen_xl} onHide={() => { tog_fullscreen_xl(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenXlLabel">
                    Full screen below xl
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
                </Modal.Body>
                <div className="modal-footer">
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_xl(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenXxl */}
            <Modal id="exampleModalFullscreenXxl" show={modal_fullscreen_xxl} onHide={() => { tog_fullscreen_xxl(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenXxlLabel">
                    Modal Heading
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
                </Modal.Body>
                <div className="modal-footer">
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_xxl(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default FullscreenResponsiveModals;