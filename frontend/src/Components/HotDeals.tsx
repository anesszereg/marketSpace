import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { wishListCard } from "Common/data";

const HotDeals = () => {
    return (
        <React.Fragment>
            <section className="section pt-0">
                <Container>
                    <Row >
                        <Col lg={12}>
                            <div className="d-flex align-items-center justify-content-between mb-4 pb-1">
                                <h3 className="flex-grow-1 mb-0">Today's Hot Deal</h3>
                                <div className="flex-shrink-0">
                                    <Link to="#" className="link-effect link-success fw-medium">View All Products <i className="ri-arrow-right-line ms-1 align-bottom"></i></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            (wishListCard || [])?.map((item, inx) => {
                                return (
                                    <Col key={inx} xxl={4} lg={4} md={6}>
                                        <div className="ecommerce-deals-widgets">
                                            <Card className="overflow-hidden mb-0 border-0">
                                                <Card.Body className="gallery-product bg-danger-subtle">
                                                    <Image src={item.img} alt="" className="avatar-xl" />
                                                </Card.Body>
                                            </Card>
                                            <div className="content mx-4 pt-5">
                                                <div className="card border-0 p-4 position-relative rounded-3 shadow-lg">
                                                    <Link to="#">
                                                        <h6 className="text-capitalize fs-16 lh-base text-truncate">{item.text}</h6>
                                                    </Link>
                                                    <p className="text-muted">
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-half-fill text-warning align-bottom"></i> ({item.rat})</p>
                                                    <div className="mt-3 d-flex align-items-center">
                                                        <h5 className="flex-grow-1 mb-0">${item.price}<span className="text-muted fs-12"><del>${item.deletprice}</del></span></h5>
                                                        <Link to="#" className="btn btn-primary btn-sm"><i className="ri-shopping-bag-line align-bottom me-1"></i> Add</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default HotDeals;