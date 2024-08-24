import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

// import Images
import img10 from "assets/images/small/img-10.jpg"
import img4 from "assets/images/small/img-4.jpg"
import img9 from "assets/images/small/img-9.jpg"
import img2 from "assets/images/small/img-2.jpg"

const HorizontalCard = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Horizontal Card</h5>
                    </div>
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img className="rounded-start img-fluid h-100 object-cover" src={img10} alt="Card img" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Header>
                                            <h5 className="card-title mb-0">Give your text a good structure</h5>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="card-text mb-2">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Row className="g-0">
                                    <Col md={8}>
                                        <Card.Header>
                                            <h5 className="card-title mb-0">Manage white space in responsive layouts ?</h5>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="card-text mb-2">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </Card.Body>
                                    </Col>
                                    <Col md={4}>
                                        <img className="rounded-end img-fluid h-100 object-cover" src={img4} alt="Card img" />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Row className="g-0">
                                    <Col md={4}>
                                        <img className="rounded-start img-fluid h-100 object-cover" src={img9} alt="Card img" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <h5 className="card-title mb-2">Give your text a good structure</h5>
                                            <p className="card-text text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                                        </Card.Body>
                                        <div className="card-footer">
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Row className="g-0">
                                    <Col md={8}>
                                        <Card.Body>
                                            <h5 className="card-title mb-2">Manage white space in responsive layouts ?</h5>
                                            <p className="card-text text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                                        </Card.Body>
                                        <div className="card-footer">
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <img className="rounded-end img-fluid h-100 object-cover" src={img2} alt="Card img" />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>

        </React.Fragment>
    )
}

export default HorizontalCard;