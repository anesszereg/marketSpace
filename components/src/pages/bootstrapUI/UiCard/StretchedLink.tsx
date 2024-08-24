import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Images
import img3 from "assets/images/small/img-3.jpg"
import img4 from "assets/images/small/img-4.jpg"

import avatar3 from "assets/images/users/avatar-3.jpg"

const StretchedLink = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Stretched Link</h5>
                    </div>
                    <Row>
                        <Col xl={4}>
                            <Card>
                                <img src={img3} className="card-img-top" alt="..." />
                                <Card.Body>
                                    <h5 className="card-title">Card with stretched link</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary stretched-link">Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <div className="col-xl-8">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex position-relative">
                                        <img src={avatar3} className="flex-shrink-0 me-3 avatar-xl rounded" alt="..." />
                                        <div>
                                            <h5 className="mt-0">Custom component with stretched link</h5>
                                            <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                                            <Link to="#" className="stretched-link">Go somewhere</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Row className="g-0 bg-light position-relative">
                                        <div className="col-md-5">
                                            <img src={img4} className="rounded-start img-fluid" alt="..." />
                                        </div>
                                        <div className="col-md-7 p-4">
                                            <h5 className="mt-0">Columns with stretched link</h5>
                                            <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                                            <Link to="#" className="stretched-link">Go somewhere</Link>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </Row>
        </React.Fragment>
    )
}

export default StretchedLink;