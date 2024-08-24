import React from "react"
import { Alert, Card, Col, Container, Row, Table,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CommonService } from "Components/CommonService";
import { PublishedProduct } from "Components/ProductSilde";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { invioceRecod } from "Common/data";

//img
import logodark from "assets/images/logo-dark.png";
import Logolight from "assets/images/logo-light.png";

const Invoice = () => {
    const handlePrint = () => {
        window.print()
    }
    return (
        <React.Fragment>
            <PublishedProduct title="Invoice Download" dicription="Last Updated 24 Nov, 2022" />
            <section className="section pt-0">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Card className="term-card mb-0">
                                <Row>
                                    <Col lg={12}>
                                        <Card.Header className="border-bottom-dashed p-4">
                                            <div className="d-sm-flex">
                                                <div className="flex-grow-1">
                                                    <Image src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="26" />
                                                    <Image src={Logolight} className="card-logo card-logo-light" alt="logo light" height="26" />
                                                    <div className="mt-sm-5 mt-4">
                                                        <h6 className="text-muted mb-2 text-uppercase fw-semibold fs-14">Address</h6>
                                                        <p className="text-muted mb-1" id="address-details">Phoenix, USA</p>
                                                        <p className="text-muted mb-0" id="zip-code"><span>Zip-code:</span> 90201</p>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 mt-sm-0 mt-3">
                                                    <h6><span className="text-muted fw-normal">Legal Registration No:</span> <span id="legal-register-no">987654</span></h6>
                                                    <h6><span className="text-muted fw-normal">Email:</span> <span id="email">toner@themesbrand.com</span></h6>
                                                    <h6><span className="text-muted fw-normal">Website:</span> <Link to='/https://themesbrand.com/' className="link-primary" target="_blank" id="website">www.themesbrand.com</Link></h6>
                                                    <h6 className="mb-0"><span className="text-muted fw-normal">Contact No: </span><span id="contact-no"> +(314) 234 6789</span></h6>
                                                </div>
                                            </div>
                                        </Card.Header>
                                    </Col>
                                    <Col lg={12}>
                                        <Card.Body className="p-4">
                                            <Row className="g-3">
                                                <Col xs={6} lg={3}>
                                                    <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Invoice No</p>
                                                    <h5 className="fs-15 mb-0">#TTB<span id="invoice-no">30280001</span></h5>
                                                </Col>
                                                <Col xs={6} lg={3}>
                                                    <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Date</p>
                                                    <h5 className="fs-15 mb-0"><span id="invoice-date">14 Jan, 2023</span>
                                                        <small className="text-muted" id="invoice-time">12:22PM</small>
                                                    </h5>
                                                </Col>
                                                <Col xs={6} lg={3}>
                                                    <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Payment Status</p>
                                                    <span className="badge badge-soft-success" id="payment-status">Paid</span>
                                                </Col>
                                                <Col xs={6} lg={3}>
                                                    <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">Total Amount</p>
                                                    <h5 className="fs-15 mb-0">$<span id="total-amount">1406.92</span></h5>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Col>
                                    <Col lg={12}>
                                        <Card.Body className="p-4 border-top border-top-dashed">
                                            <Row className="g-3">
                                                <Col xs={6}>
                                                    <h6 className="text-muted text-uppercase fw-semibold fs-14 mb-3">Billing Address</h6>
                                                    <p className="fw-medium mb-2 fs-16" id="billing-name">Raquel Murillo</p>
                                                    <p className="text-muted mb-1" id="billing-address-line-1">4430 Holt Street, Miami, Florida-33169</p>
                                                    <p className="text-muted mb-1"><span>Phone: +</span><span id="billing-phone-no">(123) 561-238-1000</span></p>
                                                    <p className="text-muted mb-0"><span>Tax: </span><span id="billing-tax-no">65-498700</span> </p>
                                                </Col>

                                                <Col xs={6}>
                                                    <h6 className="text-muted text-uppercase fw-semibold fs-14 mb-3">Shipping Address</h6>
                                                    <p className="fw-medium mb-2 fs-16" id="shipping-name">Raquel Murillo</p>
                                                    <p className="text-muted mb-1" id="shipping-address-line-1">4430 Holt Street, Miami, Florida-33169</p>
                                                    <p className="text-muted mb-1"><span>Phone: +</span><span id="shipping-phone-no">(123) 561-238-1000</span></p>
                                                </Col>

                                            </Row>
                                        </Card.Body>
                                    </Col>
                                    <Col lg={12}>
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
                                                            (invioceRecod || [])?.map((item, inx) => {
                                                                return (
                                                                    <tr key={inx}>
                                                                        <th scope="row">0{item.id}</th>
                                                                        <td className="text-start">
                                                                            <span className="fw-medium">{item.product}</span>
                                                                            <p className="text-muted mb-0">{item.details}</p>
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
                                                            <td className="text-end">$1376.33</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Estimated Tax (12.5%)</td>
                                                            <td className="text-end">$172.04</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Discount <small className="text-muted">(TONER50)</small></td>
                                                            <td className="text-end">- $206.45</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping Charge</td>
                                                            <td className="text-end">$65.00</td>
                                                        </tr>
                                                        <tr className="border-top border-top-dashed fs-15">
                                                            <th scope="row">Total Amount</th>
                                                            <th className="text-end">$1406.92</th>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div className="mt-3">
                                                <h6 className="text-muted text-uppercase fw-semibold mb-3">Payment Details:</h6>
                                                <p className="text-muted mb-1">Payment Method: <span className="fw-medium" id="payment-method">Mastercard</span></p>
                                                <p className="text-muted mb-1">Card Holder: <span className="fw-medium" id="card-holder-name">Raquel Murillo</span></p>
                                                <p className="text-muted mb-1">Card Number: <span className="fw-medium" id="card-number">xxx xxxx xxxx 1234</span></p>
                                                <p className="text-muted">Total Amount: <span className="fw-medium">$ </span><span id="card-total-amount">1406.92</span></p>
                                            </div>
                                            <div className="mt-4">
                                                <Alert variant="info">
                                                    <p className="mb-0"><span className="fw-semibold">NOTES:</span>
                                                        <span id="note">All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or
                                                            credit card or direct payment online. If account is not paid within 7
                                                            days the credits details supplied as confirmation of work undertaken
                                                            will be charged the agreed quoted fee noted above.
                                                        </span>
                                                    </p>
                                                </Alert>
                                            </div>
                                            <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                                <Link to='/invoice' className="btn btn-success" onClick={handlePrint} ><i className="ri-printer-line align-bottom me-1"></i> Print</Link>
                                                <Link to="#" className="btn btn-primary"><i className="ri-download-2-line align-bottom me-1"></i> Download</Link>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default Invoice;