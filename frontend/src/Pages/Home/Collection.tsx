import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

//img
import img1 from "assets/images/ecommerce/home/img-1.png";
import img2 from "assets/images/ecommerce/home/img-2.png";
import img3 from "assets/images/ecommerce/home/img-6.jpg";

const Collection = () => {
    return (
        <React.Fragment>
            <section className="position-relative">
                <Carousel id="ecommerceHero" data-bs-ride="carousel">
                    <Carousel.Item >
                        <div className="ecommerce-home bg-danger-subtle" style={{ backgroundImage: `url(${img1})` }}>
                            <Container>
                                <Row className="justify-content-end">
                                    <Col lg={7}>
                                        <div className="text-sm-end">
                                            <p className="fs-15 fw-semibold text-uppercase"><i className="ri-flashlight-fill text-primary align-bottom me-1"></i> In this season, find the best</p>
                                            <h1 className="display-4 fw-bold lh-base text-capitalize mb-3">Exclusive collection for everyone</h1>
                                            <p className="fs-20 mb-4">Biggest offers on this season</p>
                                            <Button variant="danger" className="btn-hover"><i className="ph-shopping-cart align-middle me-1"></i> Shop Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="ecommerce-home bg-primary-subtle" style={{ backgroundImage: `url(${img2})` }}>
                            <Container>
                                <Row >
                                    <Col lg={6}>
                                        <div>
                                            <p className="fs-15 fw-semibold text-uppercase"><i className="ri-flashlight-fill text-info align-bottom me-1"></i> Save up to <span className="text-danger">50%</span> off</p>
                                            <h1 className="display-4 fw-semibold text-capitalize lh-base">Pro Smart watches for smart People</h1>
                                            <p className="fs-18 mb-4"><b>40% off</b> up to on all selected products</p>
                                            <Button variant="primary" className="btn-hover"><i className="ph-shopping-cart align-middle me-1"></i> Shop Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="ecommerce-home" style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover" }}>
                            <Container >
                                <Row className="justify-content-end">
                                    <Col lg={6}>
                                        <div className="text-end">
                                            <p className="fs-15 fw-semibold text-uppercase text-dark">Jewelry Design with Love</p>
                                            <h1 className="display-4 fw-semibold text-capitalize lh-base text-dark">Discover world best Jewelry</h1>
                                            <p className="text-dark lead fs-19 mb-4">Jewelry are like a tribute to being a woman</p>
                                            <div className="hstack gap-2 justify-content-end">
                                                <Button variant="success" className="btn-hover">Shop Now <i className="ph-arrow-up-right align-middle ms-1"></i></Button>
                                                <Button className="btn btn-ghost-secondary btn-hover">Watch Now <i className="ph-play-circle align-middle ms-1 fs-16"></i></Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
        </React.Fragment >
    )
}

export default Collection;