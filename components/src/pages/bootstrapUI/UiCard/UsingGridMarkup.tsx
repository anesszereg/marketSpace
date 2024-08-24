import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Images
import avtar1 from "assets/images/users/avatar-1.jpg"
import avtar4 from "assets/images/users/avatar-4.jpg"
import avtar3 from "assets/images/users/avatar-3.jpg"
import avtar5 from "assets/images/users/avatar-5.jpg"
import avtar6 from "assets/images/users/avatar-6.jpg"

const UsingGridMarkup = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Using Grid Markup</h5>
                    </div>
                    <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-1">
                        <Col>
                            <Card className="card-body">
                                <div className="d-flex mb-4 align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avtar1} alt="" className="avatar-sm rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h5 className="card-title mb-1">Oliver Phillips</h5>
                                        <p className="text-muted mb-0">Digital Marketing</p>
                                    </div>
                                </div>
                                <h6 className="mb-1">$15,548</h6>
                                <p className="card-text text-muted">Expense Account</p>
                                <Link to="#" className="btn btn-primary btn-sm">See Details</Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-body">
                                <div className="d-flex mb-4 align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avtar4} alt="" className="avatar-sm rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h5 className="card-title mb-1">Natasha Carey</h5>
                                        <p className="text-muted mb-0">Manager</p>
                                    </div>
                                </div>
                                <h6 className="mb-1">$8,785</h6>
                                <p className="card-text text-muted">Expense Account</p>
                                <Link to="#" className="btn btn-primary btn-sm">See Details</Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-body">
                                <div className="d-flex mb-4 align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avtar3} alt="" className="avatar-sm rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h5 className="card-title mb-1">Bethany Johnson</h5>
                                        <p className="text-muted mb-0">Development</p>
                                    </div>
                                </div>
                                <h6 className="mb-1">$1,542</h6>
                                <p className="card-text text-muted">Expense Account</p>
                                <Link to="#" className="btn btn-primary btn-sm">See Details</Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-body">
                                <div className="d-flex mb-4 align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avtar5} alt="" className="avatar-sm rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h5 className="card-title mb-1">Erica Kernan</h5>
                                        <p className="text-muted mb-0">Fashion Designer</p>
                                    </div>
                                </div>
                                <h6 className="mb-1">$798</h6>
                                <p className="card-text text-muted">Expense Account</p>
                                <Link to="#" className="btn btn-primary btn-sm">See Details</Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-body">
                                <div className="d-flex mb-4 align-items-center">
                                    <div className="flex-shrink-0">
                                        <Image src={avtar6} alt="" className="avatar-sm rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <h5 className="card-title mb-1">Lewis Pratt</h5>
                                        <p className="text-muted mb-0">Design</p>
                                    </div>
                                </div>
                                <h6 className="mb-1">$2,856</h6>
                                <p className="card-text text-muted">Expense Account</p>
                                <Link to="#" className="btn btn-primary btn-sm">See Details</Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>
        </React.Fragment>
    )
}

export default UsingGridMarkup