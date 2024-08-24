import React from "react"
import { Col, Container, Row, Alert, Card, Button,Table,Image } from "react-bootstrap";
import { Shoporder, Shoptopbar } from "Components/ShopTopBar";
import { Link } from "react-router-dom";
import { shopProducDetails } from "Common/data";
import { ShopingAddress } from "./ShoppingAddress";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { CommonService } from "Components/CommonService";

const Checkout = () => {
    document.title = "Checkout | Toner - React FrontEnd";
    return (
        <React.Fragment>
            <Shoptopbar title="Checkout" page="Checkout" />
            <section className="section">
                <Container>
                    <Row >
                        <Col lg={12}>
                            <Alert className="alert-danger alert-modern alert-dismissible fade show" role="alert">
                                <i className="bi bi-box-arrow-in-right icons"></i>Returning customer?<Alert.Link href="auth-signin-basic" className="link-danger"><strong> Click here to login</strong>.</Alert.Link>
                                <Button className="btn-close" data-bs-dismiss="alert" aria-label="Close"></Button>
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <Card>
                                <Card.Body>
                                    <div className="table-responsive table-card">
                                        <Table className="align-middle table-borderless table-nowrap text-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Rate</th>
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    (shopProducDetails || [])?.map((item, inx) => {
                                                        return (
                                                            <tr key={inx}>
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
                                                                <td> ${item.rate}</td>
                                                                <td> 0{item.id}</td>
                                                                <td className="text-end">${item.amount}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                            <ShopingAddress title="Select or add an address" HomeAdd="Home Address" officeAdd="Office Address" />
                            <ShopingAddress title="Billing Address" />
                        </Col>
                        <Col lg={4}>
                            <div className="sticky-side-div">
                                <Shoporder subtotal="510.50" dic="18.00" charge="2.4" tax="1.6" total="630.25" />
                                <div className="hstack gap-2 justify-content-between justify-content-end">
                                    <Link to='/shop/shopingcard' className="btn btn-hover btn-soft-info w-100">Back To Cart <i className="ri-arrow-right-line label-icon align-middle ms-1"></i></Link>
                                    <Link to='/shop/payment' className="btn btn-hover btn-primary w-100">Continue Payment</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default Checkout;