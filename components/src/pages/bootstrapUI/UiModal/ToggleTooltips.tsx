import React, { useState } from 'react';
import { Button, Card, Col, Row, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TogglebetweenExample, TooltipModalExample } from './UiModalCode';


import Error from 'assets/images/Gifs/1140-error-outline.gif';
import Chat from 'assets/images/Gifs/981-consultation-outline.gif'

const ToggleTooltips = () => {
    const [modal_togFirst, setmodal_togFirst] = useState<boolean>(false);
    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }
    const [modal_togSecond, setmodal_togSecond] = useState<boolean>(false);
    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }
    const [modal_tooltip, setmodal_tooltip] = useState<boolean>(false);
    function tog_tooltip() {
        setmodal_tooltip(!modal_tooltip);
    }   

    const closefirst = () => {
        setmodal_togFirst(false)
    }
    const openSecond = () => {
        setmodal_togSecond(true)
    }
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Toggle Between Modal</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes. Please note multiple modals cannot be open at the same time. this method simply toggles between two separate modals.</p>
                            <div className="live-preview">
                                <div>
                                    <Button variant="primary" onClick={() => tog_togFirst()}>Open First Modal</Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <TogglebetweenExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Tooltips and Popovers </h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted"><Link to="https://getbootstrap.com/docs/5.1/components/tooltips/">Tooltips</Link> and <Link to="https://getbootstrap.com/docs/5.1/components/popovers/">Popovers</Link> can be placed within modals as needed.When modals are closed, any tooltips and popovers within are also automatically dismissed.</p>
                            <div className="live-preview">
                                
                                <Button variant="primary" onClick={() => tog_tooltip() }>
                                    Launch Demo Modal
                                </Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <TooltipModalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Toggle Between Modal */}


            <Modal
                show={modal_togFirst}
                toggle={() => {
                    tog_togFirst();
                }}
                onHide={ closefirst}
                id="firstmodal"
                centered
            >
                
                <Modal.Body className="text-center p-5">
                    <img
                        src={Error}
                        style={{ width: "150px", height: "10px" }}
                        alt="">
                    </img>
                            {/* trigger="loop"
                            colors="primary:#ffc84b,secondary:#3d78e3" */}
                    <div className="mt-4 pt-4">
                        <h4>Uh oh, something went wrong!</h4>
                        <p className="text-muted"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>

                        <Button variant="warning" onClick={() => { openSecond();  closefirst ();}}> 
                            Continue
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={modal_togSecond}
                toggle={() => {
                    tog_togSecond();
                }}
                id="secondmodal"
                centered
            >
                <Modal.Body className="text-center p-5">
                    <img
                        src={Chat}
                        style={{ width: "150px", height: "150px" }}
                        alt="">
                    </img>
                    {/* colors="primary:#405189,secondary:#0ab39c"
                        trigger="loop" */}
                    <div className="mt-4 pt-3">
                        <h3 className="mb-3">Follow-Up Email</h3>
                        <p className="text-muted mb-4">Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Button variant="danger" onClick={() => { tog_togFirst ();}}>
                                Back to First
                            </Button>
                            <Button variant="light" onClick={() => { tog_togSecond()}}>Close</Button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>

            {/* Tooltips and Popovers */}
            <Modal
                show={modal_tooltip}
                onHide={() => {
                    tog_tooltip();
                }}
            >
                <Modal.Header className="modal-title fw-bold">
                    Tooltips and Popovers Modal
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-17">Popover in a Modal</h5>
                    <p className="text-muted">You only need to know a little to make a big
                        {" "}<Link to="#" className="popover-test fw-medium text-decoration-underline link-success" id="UncontrolledPopover">
                            Popover on Click
                        </Link>{" "}
                        you do every day. So let's get started. First, some common types of fonts and what you need to know about them triggers a popover on click.</p>

                    <h5 className="fs-17">Tooltips in a Modal</h5>
                    <p className="text-muted">Opposites attract, and that’s a fact. It’s in our
                        {" "}<Link to="#" className="tooltip-test text-decoration-underline fw-medium" id="UncontrolledTooltip1">
                            graphic design
                        </Link>{" "} to be interested in the unusual, and that’s why using
                        {" "}<Link to="#" className="tooltip-test text-decoration-underline" id="UncontrolledTooltip2">
                            design
                        </Link> contrasting colors in Graphic Design is a must.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <div className="mx-auto">
                        <Link to="#" className="btn btn-link fw-semibold">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
                    </div>
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default ToggleTooltips
