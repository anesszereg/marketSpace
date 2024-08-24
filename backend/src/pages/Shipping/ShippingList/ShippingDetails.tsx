import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from './world.svg.json';

// Import Images
import avatar2 from 'assets/images/users/avatar-2.jpg'

const ShippingDetails = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <div className="d-flex align-items-center">
                        <h5 className="card-title mb-0 flex-grow-1">Shipping Details</h5>
                        <div className="flex-shrink-0">
                            <p className="mb-0">Delivery Date: <b>14 Jan, 2023</b></p>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col xxl={4} lg={6}>
                            <Card className="bg-secondary bg-opacity-10 border-0">
                                <Card.Body>
                                    <div className="d-flex gap-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-18 mb-3">Order Information</h6>
                                            <p className="mb-0">ID: <span className="fw-medium">#TBT84000142101</span></p>
                                            <p className="mb-1">Amount Total: <span className="fw-medium">$723.65</span></p>
                                            <p className="mb-0">Order Date: <span className="fw-medium">05 Jan, 2023</span></p>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <div className="avatar-title bg-secondary-subtle text-secondary rounded fs-3">
                                                <i className="ph-shopping-cart"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card className="bg-warning bg-opacity-10 border-0">
                                <Card.Body>
                                    <div className="d-flex gap-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-18 mb-3">Shipping Address</h6>
                                            <p className="mb-0">Block A, House 123, Floor 2</p>
                                            <p className="mb-1">Tashkent, Uzbekistan</p>
                                            <p className="mb-0">013-789-9876</p>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <div className="avatar-title bg-warning-subtle text-warning rounded fs-3">
                                                <i className="ph-map-pin"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card className="bg-success bg-opacity-10 border-0">
                                <Card.Body>
                                    <div className="d-flex gap-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-18 mb-3">Customer Info</h6>
                                            <p className="mb-0 fw-medium">Daniel Gonzalez</p>
                                            <p className="mb-1">gabrielle@toner.com</p>
                                            <p className="mb-0">013-789-9876</p>
                                        </div>
                                        <div>
                                            <img src={avatar2} alt="" className="avatar-sm rounded"/>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <h5 className="card-title flex-grow-1 mb-0">Order Status</h5>
                        <div className="flex-shrink-0">
                            <Button variant='soft-primary' size="sm" className="mt-2 mt-sm-0"><i className="ri-map-pin-line align-bottom me-1"></i> Change Address</Button>
                            <Button variant='soft-danger' size="sm" className="mt-2 mt-sm-0"><i className="mdi mdi-archive-remove-outline align-bottom me-1"></i> Cancel Order</Button>
                        </div>
                    </div>
                    <Row className="justify-content-between">
                        <Col lg={2} className="order-tracking text-center completed">
                            <span className="is-complete"></span>
                            <Card className="mt-3 mb-0 border-0">
                                <Card.Body>
                                    <h6 className="fs-17 mb-1">Order Process</h6>
                                    <p className="text-muted fs-15 mb-0">Mon, 24 Dec, 2022</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} className="order-tracking text-center completed">
                            <span className="is-complete"></span>
                            <Card className="mt-3 mb-0 border-0">
                                <Card.Body>
                                    <h6 className="fs-17 mb-1">Packed</h6>
                                    <p className="text-muted fs-15 mb-0">Thu, 28 Dec, 2022</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} className="order-tracking text-center completed">
                            <span className="is-complete"></span>
                            <Card className="mt-3 mb-0 border-0">
                                <Card.Body>
                                    <h6 className="fs-17 mb-1">Order Shipped</h6>
                                    <p className="text-muted fs-15 mb-0">Thu, 02 Jan, 2023</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} className="order-tracking text-center">
                            <span className="is-complete"></span>
                            <Card className="mt-3 mb-0 border-0">
                                <Card.Body>
                                    <h6 className="fs-17 mb-1">Out Of Delivery</h6>
                                    <p className="text-muted fs-15 mb-0">Thu, 10 Jan, 2023</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} className="order-tracking text-center">
                            <span className="is-complete"></span>
                            <Card className="mt-3 mb-0 border-0">
                                <Card.Body>
                                    <h6 className="fs-17 mb-1">Delivered</h6>
                                    <p className="text-muted fs-15 mb-0">Thu, 14 Jan, 2023</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="mt-4">
                        <h5 className="card-title mb-4">View Map</h5>
                        <div id="users-by-country" data-colors='["--tb-light"]' className="text-center" style={{height: "350" }}></div>
                        <VectorMap {...world}/>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default ShippingDetails;