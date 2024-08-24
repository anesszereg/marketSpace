import React, { useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OptionalModalExample } from './UiModalCode';

const OptionalSizes = () => {
    const [modal_fullscreen, setmodal_fullscreen] = useState<boolean>(false);
    function tog_fullscreen() {
        setmodal_fullscreen(!modal_fullscreen);
    }

    const [modal_xlarge, setmodal_xlarge] = useState<boolean>(false);
    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge);
    }

    const [modal_large, setmodal_large] = useState<boolean>(false);
    function tog_large() {
        setmodal_large(!modal_large);
    }

    const [modal_small, setmodal_small] = useState<boolean>(false);
    function tog_small() {
        setmodal_small(!modal_small);
    }

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Optional Sizes</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>modal-fullscreen</code>, <code>modal-xl</code>, <code>modal-lg</code>, or <code>modal-sm</code> class to modal-dialog class to set different size modal respectively.</p>
                            <div className="live-preview">
                                <div>
                                    <div className="hstack flex-wrap gap-2">
                                        {/* <!-- Fullscreen modal --> */}
                                        <Button variant="primary" onClick={() => tog_fullscreen()}>Fullscreen Modal</Button>

                                        {/* <!-- Extra Large modal --> */}
                                        <Button variant="info" onClick={() => tog_xlarge()}>Extra large Modal</Button>

                                        {/* <!-- Large modal --> */}
                                        <Button variant="success" onClick={() => tog_large()}>Large Modal</Button>

                                        {/* <!-- Small modal --> */}
                                        <Button variant="danger" onClick={() => tog_small()}>Small Modal</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "120px" }}>
                                <OptionalModalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Full Screen Modal */}
            <Modal
                size="xl"
                show={modal_fullscreen}
                fullscreen={true}
                onHide={() => {
                    tog_fullscreen();
                }}
                className="modal-fullscreen fw-bold"
                id="exampleModalFullscreen"
            >
                <Modal.Header className="modal-title fw-bold"
                    id="exampleModalFullscreenLabel">

                    Fullscreen Modal Heading
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
                    <Link to='#'
                        color="light"
                        onClick={() => {
                            tog_fullscreen();
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

            {/* Extra Large Modal */}
            <Modal
                size="xl"
                show={modal_xlarge}
                onHide={() => {
                    tog_xlarge();
                }}
            >
                <Modal.Header className="modal-title fw-bold"
                    id="myExtraLargeModalLabel">

                    Extra large modal
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
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_xlarge(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary">Save changes</Button>
                </div>
            </Modal>


            {/* Large Modal */}
            <Modal
                size="lg"
                show={modal_large}
                onHide={() => {
                    tog_large();
                }}
            >
                <Modal.Header className="modal-title fw-bold"
                    id="myLargeModalLabel">

                    Large Modal
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
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_large(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary">Save changes</Button>
                </div>
            </Modal>

            {/* Small Modal */}
            <Modal
                size="sm"
                show={modal_small}
                onHide={() => {
                    tog_small();
                }}
            >
                <Modal.Header className="modal-title fw-bold"
                    id="mySmallModalLabel">
                    Small Modal
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
                    <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_small(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary">Save changes</Button>
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default OptionalSizes