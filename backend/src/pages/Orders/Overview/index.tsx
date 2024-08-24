import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';

import productImg1 from "../../../assets/images/products/img-1.png";
import productImg2 from "../../../assets/images/products/img-2.png";
import productImg3 from "../../../assets/images/products/img-3.png";
import productImg5 from "../../../assets/images/products/img-5.png";

const OrdersOverview = () => {

    document.title = "Order Overview | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Overview" pageTitle="Orders" />

                    <Row className="mb-4 align-items-center">
                        <Col>
                            <h6 className="fs-18 mb-0">Order ID: #22830</h6>
                        </Col>
                        <Col className="col text-end">
                            <Button variant='secondary'><i className="ph-download-simple me-1 align-middle"></i> Invoice</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={3} lg={6}>
                            <div className="card bg-success bg-opacity-10 border-0">
                                <div className="card-body">
                                    <div className="d-flex gap-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-18 mb-3">Customer Info</h6>
                                            <p className="mb-0 fw-medium">Daniel Gonzalez</p>
                                            <p className="mb-1">gabrielle@toner.com</p>
                                            <p className="mb-0">013-789-9876</p>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <div className="avatar-title bg-success-subtle text-success rounded fs-3">
                                                <i className="ph-user-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} lg={6}>
                            <div className="card bg-primary bg-opacity-10 border-0">
                                <div className="card-body">
                                    <div className="d-flex gap-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-18 mb-3">Shipping Address</h6>
                                            <p className="mb-0">Block A, House 123, Floor 2</p>
                                            <p className="mb-1">Tashkent, Uzbekistan</p>
                                            <p className="mb-0">013-789-9876</p>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <div className="avatar-title bg-primary-subtle text-primary rounded fs-3">
                                                <i className="ph-map-pin"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} lg={6}>
                            <div className="card bg-info bg-opacity-10 border-0">
                                <div className="card-body">
                                    <div className="d-flex gap-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-18 mb-3">Billing Address</h6>
                                            <p className="mb-0">Block A, House 123, Floor 2</p>
                                            <p className="mb-1">Tashkent, Uzbekistan</p>
                                            <p className="mb-0">013-789-9876</p>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <div className="avatar-title bg-info-subtle text-info rounded fs-3">
                                                <i className="ph-file-text"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} lg={6}>
                            <div className="card card-primary overflow-hidden">
                                <div className="position-absolute end-0 start-0 bottom-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1551&quot;)" fill="none">
                                            <path d="M306 65L446 -75" strokeWidth="8" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M399 2L315 86" strokeWidth="10" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M83 77L256 -96" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M281 212L460 33" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M257 62L76 243" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M305 123L214 214" strokeWidth="6" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M327 222L440 109" strokeWidth="6" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M287 109L362 34" strokeWidth="10" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M259 194L332 121" strokeWidth="8" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M376 186L240 322" strokeWidth="8" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M308 153L123 338" strokeWidth="6" stroke="url(#SvgjsLinearGradient1559)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M218 62L285 -5" strokeWidth="8" stroke="url(#SvgjsLinearGradient1558)" strokeLinecap="round" className="BottomLeft"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1551">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1558">
                                                <stop stopColor="rgba(var(--tb-white-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-white-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1559">
                                                <stop stopColor="rgba(var(--tb-white-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-white-rgb), 0.1)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="card-body position-relative">
                                    <h5 className="card-title fw-medium">Add New Orders</h5>
                                    <p className="text-white-75">Orders are one of the main building blocks of creating an an ad campaign in Ad Manager.</p>
                                    <Link to="#!" className="link-light">Create Order <i className="ph-arrow-right align-middle"></i></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={9}>
                            <Card>
                                <div className="card-body">
                                    <div className="table-responsive table-card">
                                        <table className="table align-middle table-nowrap mb-0">
                                            <thead className="text-muted table-light">
                                                <tr>
                                                    <th scope="col">Product ID</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col" className="text-end">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to="#!" className="fw-medium link-primary">#00541</Link>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <img src={productImg1} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">Rockerz Ear Bluetooth Headphones</div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <span className="text-secondary">$658.00</span>
                                                    </td>

                                                    <td>01 PCS</td>
                                                    <td className="text-end">$658.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Link to="#!" className="fw-medium link-primary">#07484</Link>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <img src={productImg5} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">United Colors Of Benetton</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="text-secondary">$145.00</span>
                                                    </td>

                                                    <td>02 PCS</td>
                                                    <td className="text-end">$290.00</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <Link to="#!" className="fw-medium link-primary">#00065</Link>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <img src={productImg3} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">350 ml Glass Grocery Container</div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <span className="text-secondary">$79.99</span>
                                                    </td>

                                                    <td>3 PCS</td>
                                                    <td className="text-end">$239.97</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <Link to="#!" className="fw-medium link-primary">#00156</Link>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <img src={productImg2} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">One Seater Sofa</div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <span className="text-secondary">$264.99</span>
                                                    </td>

                                                    <td>02 PCS</td>
                                                    <td className="text-end">$528.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2} className="p-0">
                                                        <table className="table table-borderless mb-0">
                                                            <tbody>
                                                                <tr>
                                                                    <td>Sub Total:</td>
                                                                    <td className="text-end">$1715.97</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Estimated Tax (12.5%):</td>
                                                                    <td className="text-end">$200.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Shipping Charge:</td>
                                                                    <td className="text-end">$65.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Discount (TONER42):</td>
                                                                    <td className="text-end">$97.00</td>
                                                                </tr>
                                                                <tr className="border-top">
                                                                    <th>Total (USD) :</th>
                                                                    <th className="text-end">$1868.97</th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={3}>
                            <Row>
                                <Col lg={12}>
                                    <Card>
                                        <div className="card-header d-flex align-items-center">
                                            <h5 className="card-title flex-grow-1 mb-0">Logistics Details</h5>
                                            <div className="flex-shrink-0">
                                                <Link to="#track-order" className="btn btn-sm btn-info">Track Order</Link>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                                <i className="bi bi-truck fs-1"></i>
                                                <h5 className="fs-18">Toner Logistics </h5>
                                                <p className="mb-0">ID: MFDS1400457854</p>
                                                <p className="mb-0">Payment Mode : Dedit Card</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col lg={12}>
                                    <Card>
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Payment Detail:</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-sm table-borderless align-middle description-table mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>Transactions:</td>
                                                            <td><span className="fw-medium">#VLZ124561278124</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Payment Method</td>
                                                            <td><span className="fw-medium">Debit Card</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Card Number:</td>
                                                            <td><span className="fw-medium">XXXX XXXX XXXX 3028</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Card Holder Name</td>
                                                            <td><span className="fw-medium">Daniel Gonzalez</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total Amount</td>
                                                            <td><span className="fw-medium">$1868.98</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={12}>
                            <Card id="track-order">
                                <div className="card-header d-flex  align-items-center gap-3">
                                    <h5 className="card-title flex-grow-1 mb-0">Order Status</h5>
                                    <div className="flex-shrink-0">
                                        <Button variant='soft-primary' size="sm" className="mt-2 mt-sm-0 me-1"><i className="ri-map-pin-line align-bottom me-1"></i> Change Address</Button>
                                        <Button variant='soft-danger' size="sm" className="mt-2 mt-sm-0"><i className="mdi mdi-archive-remove-outline align-bottom me-1"></i> Cancel Order</Button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Row className="justify-content-between">
                                        <Col lg={2} className="order-tracking text-center completed">
                                            <span className="is-complete"></span>
                                            <div className="card mt-3 mb-0">
                                                <div className="card-body">
                                                    <h6 className="fs-17">Order Process</h6>
                                                    <p className="text-muted fs-15 mb-0">Mon, 24 Dec, 2022</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="order-tracking text-center completed">
                                            <span className="is-complete"></span>
                                            <div className="card mt-3 mb-0">
                                                <div className="card-body">
                                                    <h6 className="fs-17">Packed</h6>
                                                    <p className="text-muted fs-15 mb-0">Thu, 28 Dec, 2022</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="order-tracking text-center completed">
                                            <span className="is-complete"></span>
                                            <div className="card mt-3 mb-0">
                                                <div className="card-body">
                                                    <h6 className="fs-17">Order Shipped</h6>
                                                    <p className="text-muted fs-15 mb-0">Thu, 02 Jan, 2023</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="order-tracking text-center">
                                            <span className="is-complete"></span>
                                            <div className="card mt-3 mb-0">
                                                <div className="card-body">
                                                    <h6 className="fs-17">Out Of Delivery</h6>
                                                    <p className="text-muted fs-15 mb-0">Thu, 10 Jan, 2023</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="order-tracking text-center">
                                            <span className="is-complete"></span>
                                            <div className="card mt-3 mb-0">
                                                <div className="card-body">
                                                    <h6 className="fs-17">Delivered</h6>
                                                    <p className="text-muted fs-15 mb-0">Thu, 16 Jan, 2023</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

export default OrdersOverview;