import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardBorderColor = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Card Border Color</h5>
                    </div>

                    <Row>
                        <Col xxl={4}>
                            <Card className="border card-border-primary">
                                <Card.Header>
                                    <span className="float-end">75%</span>
                                    <h6 className="card-title mb-0">Handle to Forcast <span className="badge bg-danger align-middle fs-10">Poor</span></h6>
                                </Card.Header>
                                <Card.Body>
                                    <p className="card-text">Whether article spirits new her covered hastily sitting her. Money witty books nor son add build on the card Chicken age had evening believe but proceed pretend mrs.</p>
                                    <div className="text-end">
                                        <Link to="#" className="link-primary fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="border card-border-success">
                                <Card.Header>
                                    <span className="float-end">100%</span>
                                    <h6 className="card-title mb-0">Quality Forcast <span className="badge bg-success align-middle fs-10">Excellent</span></h6>
                                </Card.Header>
                                <Card.Body>
                                    <p className="card-text">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                    <div className="text-end">
                                        <Link to="#" className="link-success fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="border card-border-info">
                                <Card.Header>
                                    <h6 className="card-title mb-0">Check your E-mails <span className="badge bg-info align-middle fs-10">In Process</span></h6>
                                </Card.Header>
                                <Card.Body>
                                    <p className="card-text">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                    <div className="text-end">
                                        <Link to="#" className="link-info fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>

            <Row>
                <Col xxl={4}>
                    <Card className="border card-border-warning">
                        <Card.Header>
                            <h6 className="card-title mb-0">Check your Payment <span className="badge bg-warning align-middle fs-10">Pending</span></h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                            <div className="text-end">
                                <Link to="#" className="link-warning fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="border card-border-danger">
                        <Card.Header>
                            <h6 className="card-title mb-0">Your Ordered Cancel <span className="badge bg-danger align-middle fs-10">Cancel</span></h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                            <div className="text-end">
                                <Link to="#" className="link-danger fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="border card-border-dark">
                        <Card.Header>
                            <h6 className="card-title mb-0">Handle to Forcast</h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                            <div className="text-end">
                                <Link to="#" className="link-dark fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xxl={4}>
                    <Card className="border card-border-secondary">
                        <Card.Header>
                            <h6 className="card-title mb-0">Quality Forcast </h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                            <div className="text-end">
                                <Link to="#" className="link-secondary fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="border card-border-light">
                        <Card.Header>
                            <h6 className="card-title mb-0">Check your E-mails</h6>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                            <div className="text-end">
                                <Link to="#" className="link-dark fw-medium">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default CardBorderColor;