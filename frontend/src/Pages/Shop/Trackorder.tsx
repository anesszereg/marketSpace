import React from "react";
import { Button, Card, Col, Container, Row, Table ,Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shoptopbar } from "Components/ShopTopBar";
import { shopProducDetails } from "Common/data";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { CommonService } from "Components/CommonService";

const Trackorder = () => {
    document.title = "Track Order | Toner - React FrontEnd";
    return (
        <React.Fragment>
            <Shoptopbar title="Track Order" page="Track Order" />
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-4 pb-2">
                                <h5 className="mb-0 text-decoration-underline                                                                                                                                                                                                                                                                   ">Order ID <b>#HY1452451452</b></h5>
                            </div>
                        </Col>
                    </Row>
                    <div className="track-orders">
                        <Row className="justify-content-between gy-4 gy-md-0">
                            <Col md={2} className="order-tracking text-start text-md-center ps-4 ps-md-0 completed">
                                <span className="is-complete"></span>
                                <h6 className="fs-15 mt-3 mt-md-4">Order Process</h6>
                                <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
                            </Col>
                            <Col md={2} className="order-tracking text-start text-md-center ps-4 ps-md-0 completed">
                                <span className="is-complete"></span>
                                <h6 className="fs-15 mt-3 mt-md-4">Order Shipped</h6>
                                <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
                            </Col>
                            <Col md={2} className="order-tracking text-start text-md-center ps-4 ps-md-0">
                                <span className="is-complete"></span>
                                <h6 className="fs-15 mt-3 mt-md-4">Out Of Delivery</h6>
                                <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
                            </Col>
                            <Col md={2} className="order-tracking text-start text-md-center ps-4 ps-md-0">
                                <span className="is-complete"></span>
                                <h6 className="fs-15 mt-3 mt-md-4">Delivered</h6>
                                <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="section pt-0">
                <Container>
                    <Card className="border-dashed">
                        <Card.Body className="border-bottom border-bottom-dashed p-4">
                            <Row className="g-3">
                                <Col lg={3} xs={6}>
                                    <p className="text-muted mb-2 text-uppercase fw-medium fs-12">Invoice ID</p>
                                    <h5 className="fs-14 mb-0">#HYP<span id="invoice-no">14567513010120</span></h5>
                                </Col>
                                <Col lg={3} xs={6}>
                                    <p className="text-muted mb-2 text-uppercase fw-medium fs-12">Date</p>
                                    <h5 className="fs-14 mb-0"><span id="invoice-date">23 Nov, 2021</span> <small className="text-muted" id="invoice-time">02:36PM</small></h5>
                                </Col>
                                <Col lg={3} xs={6}>
                                    <p className="text-muted mb-2 text-uppercase fw-medium fs-12">Payment Status</p>
                                    <span className="badge badge-soft-success fs-11" id="payment-status">Paid</span>
                                </Col>
                                <Col lg={3} xs={6}>
                                    <p className="text-muted mb-2 text-uppercase fw-medium fs-12">Total Amount</p>
                                    <h5 className="fs-14 mb-0">$<span id="total-amount">1218.98</span></h5>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="p-4">
                            <Row className="g-3">
                                <Col xs={6}>
                                    <h6 className="text-muted text-uppercase fs-12 mb-3">Billing Address</h6>
                                    <h6 id="billing-name">Diana Nichols</h6>
                                    <p className="text-muted mb-1" id="billing-address-line-1">305 S San Gabriel Blvd</p>
                                    <p className="text-muted mb-1"><span>Phone: +</span><span id="billing-phone-no">(123) 456-7890</span></p>
                                    <p className="text-muted mb-0"><span>Tax: </span><span id="billing-tax-no">12-3456789</span> </p>
                                </Col>
                                <Col xs={6}>
                                    <h6 className="text-muted text-uppercase fs-12 mb-3">Shipping Address</h6>
                                    <h6 id="shipping-name">Diana Nichols</h6>
                                    <p className="text-muted mb-1" id="shipping-address-line-1">305 S San Gabriel Blvd</p>
                                    <p className="text-muted mb-1"><span>Phone: +</span><span id="shipping-phone-no">(123) 456-7890</span></p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="p-4">
                            <div className="table-responsive">
                                <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                                    <thead>
                                        <tr className="table-active">
                                            <th scope="col" style={{ width: "50px" }}>#</th>
                                            <th scope="col">Product Details</th>
                                            <th scope="col">Rate</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col" className="text-end">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody id="products-list">
                                        {
                                            (shopProducDetails || [])?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">0{item.id}</th>
                                                        <td className="text-start">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div className="avatar-sm flex-shrink-0">
                                                                    <div className={`avatar-title bg-${item.bg}-subtle rounded-3`}>
                                                                        <Image src={item.img} alt="" className="avatar-xs" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h6>{item.title}</h6>
                                                                    <p className="text-muted mb-0">{item.discription}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>${item.rate}</td>
                                                        <td>{item.quantity}</td>
                                                        <td className="text-end">${item.amount}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <div className="border-top border-top-dashed mt-2">
                                <Table className="table-borderless table-nowrap align-middle mb-0 ms-auto" style={{ width: "250px" }}>
                                    <tbody>
                                        <tr>
                                            <td>Sub Total</td>
                                            <td className="text-end">$1183.57</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Tax (12.5%)</td>
                                            <td className="text-end">$147.95</td>
                                        </tr>
                                        <tr>
                                            <td>Discount <small className="text-muted">(Toner15)</small></td>
                                            <td className="text-end">- $177.54</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Charge</td>
                                            <td className="text-end">$65.00</td>
                                        </tr>
                                        <tr className="border-top border-top-dashed fs-15">
                                            <th scope="row">Total Amount</th>
                                            <th className="text-end">$1218.98</th>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Body className="p-4">
                            <div className="d-flex mb-3">
                                <h5 className="card-title flex-grow-1 mb-0"><i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i> Logistics Details</h5>
                                <div className="flex-shrink-0">
                                    <Link to="#" className="badge badge-soft-primary fs-11">Track Order</Link>
                                </div>
                            </div>
                            <div>
                                <Row className="align-items-center gy-3 gy-md-0">
                                    <Col md={4}>
                                        <div className="d-flex align-items-center justify-content-between justify-content-md-start text-end text-md-start">
                                            <div className="">
                                                {/* <lord-icon src="https://cdn.lordicon.com/uetqnvvg.json" trigger="loop" colors="primary:#438eff,secondary:#0ab39c" style="width:70px;height:70px"></lord-icon> */}
                                            </div>
                                            <div className="ms-2">
                                                <h6>RQK Logistics</h6>
                                                <p className="text-muted mb-0 fs-14">ID: MFDS140045</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="text-end text-md-start">
                                            <h6>Debit Card</h6>
                                            <p className="text-muted mb-0 fs-14">Payment Mode</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="text-end">
                                            <Button className="btn btn-soft-info"><i className="ri-customer-service-2-line align-bottom me-1"></i> Help Center</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="text-end mt-4">
                                <Button variant="danger" className="btn-hover">Continue Shopping <i className="ri-arrow-right-line align-bottom ms-1"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default Trackorder;