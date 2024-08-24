import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Images
import avtar1 from "assets/images/users/avatar-1.jpg"
import avtar2 from "assets/images/users/avatar-2.jpg"
import avtar3 from "assets/images/users/avatar-3.jpg"
import avtar4 from "assets/images/users/avatar-4.jpg"
import avtar5 from "assets/images/users/avatar-5.jpg"
import avtar6 from "assets/images/users/avatar-6.jpg"
import avtar7 from "assets/images/users/avatar-7.jpg"
import avtar8 from "assets/images/users/avatar-8.jpg"


const CardBackgroundColor = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Card Background Color</h5>
                    </div>
                    <Row>
                        <Col xxl={4}>
                            <Card className="card-primary">
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img src={avtar1} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="card-text"><span className="fw-medium">Jeffrey Montgomery</span> (Graphic Designer) started a new conversation.</p>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="text-center">
                                        <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="card-success">
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img src={avtar2} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="card-text"><span className="fw-medium">Charles Dickens</span> (Financial Analyst) started a new conversation.</p>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="text-center">
                                        <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="card-info">
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img src={avtar3} alt="" className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="card-text"><span className="fw-medium">Oliver Phillips</span> (UI/UX Designer) started a new conversation.</p>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="text-center">
                                        <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>

            <Row>
                <Col xxl={4}>
                    <Card className="card-warning">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={avtar4} alt="" className="avatar-sm rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="card-text"><span className="fw-medium">Rebecca Swartz</span> (Graphic Designer) started a new conversation.</p>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="text-center">
                                <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="card-danger">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={avtar6} alt="" className="avatar-sm rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="card-text"><span className="fw-medium">Betty Richards</span> (Back End Developer) started a new conversation.</p>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="text-center">
                                <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="card-dark">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={avtar5} alt="" className="avatar-sm rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="card-text"><span className="fw-medium">Brooke Hayes</span> (Founder & CEO) started a new conversation.</p>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="text-center">
                                <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xxl={4}>
                    <Card className="card-secondary">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={avtar7} alt="" className="avatar-sm rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="card-text"><span className="fw-medium">Bethany Johnson</span> (Team Leader) started a new conversation.</p>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="text-center">
                                <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="card-light">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src={avtar8} alt="" className="avatar-sm rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="card-text"><span className="fw-medium">Amelie Townsend</span> (UI/UX Designer) started a new conversation.</p>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="text-center">
                                <Link to="#" className="link-dark">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CardBackgroundColor;