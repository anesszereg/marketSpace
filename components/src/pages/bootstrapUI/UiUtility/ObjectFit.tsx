import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ObjectFitExample } from './UiUtilityCode';

// import Images
import img3 from "assets/images/small/img-3.jpg"

const ObjectFit = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Object Fit</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted mb-3">Use the object fit utilities to modify how the content of a replaced element, such as an <code>img</code> or <code>video</code>, should be resized to fit its container.</p>
                            <Row>
                                <Col lg={2}>
                                    <div className="text-center">
                                        <img src={img3} alt="" height="230" width="200" className="rounded object-fit-cover" />
                                            <p className="mt-2 mb-0"><code>.object-fit-cover</code></p>
                                    </div>
                                </Col>
                                <Col lg={2}>
                                    <div className="text-center">
                                        <img src={img3} alt="" height="230" width="200" className="rounded object-fit-contain border" />
                                            <p className="mt-2 mb-0"><code>.object-fit-contain</code></p>
                                    </div>
                                </Col>
                                <Col lg={2}>
                                    <div className="text-center">
                                        <img src={img3} alt="" height="230" width="200" className="rounded object-fit-fill border" />
                                            <p className="mt-2 mb-0"><code>.object-fit-fill</code></p>
                                    </div>
                                </Col>
                                <Col lg={2}>
                                    <div className="text-center">
                                        <img src={img3} alt="" height="230" width="200" className="rounded object-fit-scale border" />
                                            <p className="mt-2 mb-0"><code>.object-fit-scale</code></p>
                                    </div>
                                </Col>
                                <Col lg={2}>
                                    <div className="text-center">
                                        <img src={img3} alt="" height="230" width="200" className="rounded object-fit-none" />
                                            <p className="mt-2 mb-0"><code>.object-fit-none</code></p>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <div className="card-body">
                            <pre className="language-markup">
                                <ObjectFitExample />
                            </pre>
                        </div>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default ObjectFit