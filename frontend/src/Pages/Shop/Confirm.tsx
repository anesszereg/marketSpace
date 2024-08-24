import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Shoptopbar } from "Components/ShopTopBar";
import success from "assets/images/success-img.png";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { CommonService } from "Components/CommonService";

const Confirm = () => {
    document.title = "Order Completed | Toner - React FrontEnd";
    return (
        <React.Fragment>
            <Shoptopbar title="Confirmation" page="Order Confirm" />
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Card>
                                <Card.Body className="p-4 p-md-5">
                                    <div className="text-center">
                                        <Image src={success} alt="" className="w-50" />
                                    </div>
                                    <div className="text-center mt-5 pt-1">
                                        <h4 className="mb-3 text-capitalize">Your Order Is Completed !</h4>
                                        <p className="text-muted mb-2">You will receive an order confirmation email with details of your order.</p>
                                        <p className="text-muted mb-0">Order ID: 267676GHERT105467</p>
                                        <div className="mt-4 pt-2 hstack gap-2 justify-content-center">
                                            <Link to='/shop/orderhistory' className="btn btn-primary btn-hover">View Order <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                                            <Link to='/dashboard' className="btn btn-soft-danger btn-hover">Back To Home <i className="ri-home-4-line align-bottom ms-1"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
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

export default Confirm;