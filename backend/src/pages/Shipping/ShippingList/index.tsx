import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import ShippingDetails from './ShippingDetails';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

const ShippingList = () => {

    document.title = "Shipping List | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Shipping List" pageTitle="Shipping" />

                    <Row>
                        <Col xxl={3}>
                            <div className="sticky-side-div mb-4">
                                <div className="search-box mb-4">
                                    <Form.Control type="text" className="search" placeholder="Search for..." />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                                <SimpleBar style={{ maxHeight: "calc(100vh - 150px)" }}>
                                    <Row className="gy-4">
                                        <Col lg={12}>
                                            <Card className="mb-0">
                                                <Card.Body>
                                                    <span className="badge badge-soft-danger float-end clearfix">Out Of Delivery</span>
                                                    <h5 className="fs-18 mb-3">Themesbrand Logistics</h5>
                                                    <div className="d-flex align-items-end">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-medium mb-1">Track ID: TBL18754263542</h6>
                                                            <p className="text-muted mb-0">Delivery Date: 20 Jan, 2023</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link to="#!" className="text-reset stretched-link">View <i className="ph-arrow-right align-middle"></i></Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={12}>
                                            <Card className="border-primary border-opacity-50 mb-0">
                                                <Card.Body>
                                                    <span className="badge badge-soft-info float-end clearfix">Shipping</span>
                                                    <h5 className="fs-18 mb-3">Toner Logistics</h5>
                                                    <div className="d-flex align-items-end">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-medium mb-1">Track ID: TTBL147009630</h6>
                                                            <p className="text-muted mb-0">Delivery Date: 14 Jan, 2023</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link to="#!" className="text-reset stretched-link">View <i className="ph-arrow-right align-middle"></i></Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={12}>
                                            <Card className="mb-0">
                                                <Card.Body>
                                                    <span className="badge badge-soft-success float-end clearfix">Delivered</span>
                                                    <h5 className="fs-18 mb-3">Themesbrand Logistics</h5>
                                                    <div className="d-flex align-items-end">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-medium mb-1">Track ID: TBL18754264568</h6>
                                                            <p className="text-muted mb-0">Delivery Date: 26 Dec, 2022</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link to="#!" className="text-reset stretched-link">View <i className="ph-arrow-right align-middle"></i></Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={12}>
                                            <Card className="mb-0">
                                                <Card.Body>
                                                    <span className="badge badge-soft-secondary float-end clearfix">Pickup</span>
                                                    <h5 className="fs-18 mb-3">Toner Logistics</h5>
                                                    <div className="d-flex align-items-end">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-medium mb-1">Track ID: TTBL147009672</h6>
                                                            <p className="text-muted mb-0">Delivery Date: 03 Feb, 2023</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link to="#!" className="text-reset stretched-link">View <i className="ph-arrow-right align-middle"></i></Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={12}>
                                            <Card className="mb-0">
                                                <Card.Body>
                                                    <span className="badge badge-soft-success float-end clearfix">Delivered</span>
                                                    <h5 className="fs-18 mb-3">Zibra Logistics</h5>
                                                    <div className="d-flex align-items-end">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-medium mb-1">Track ID: MFDS1400457854</h6>
                                                            <p className="text-muted mb-0">Delivery Date: 07 Nov, 2022</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link to="#!" className="text-reset stretched-link">View <i className="ph-arrow-right align-middle"></i></Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={12}>
                                            <Card className="mb-0">
                                                <Card.Body>
                                                    <span className="badge badge-soft-danger float-end clearfix">Out Of Delivery</span>
                                                    <h5 className="fs-18 mb-3">Toner Logistics</h5>
                                                    <div className="d-flex align-items-end">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-medium mb-1">Track ID: TTBL147009390</h6>
                                                            <p className="text-muted mb-0">Delivery Date: 05 Feb, 2023</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link to="#!" className="text-reset stretched-link">View <i className="ph-arrow-right align-middle"></i></Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </SimpleBar>
                            </div>
                        </Col>

                        <Col xxl={9}>
                            <ShippingDetails />
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default ShippingList;