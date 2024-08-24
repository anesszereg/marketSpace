import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { CommonService } from "Components/CommonService";

//img
import featuresimg3 from 'assets/images/ecommerce/features/img-3.jpg';
import featuresimg1 from 'assets/images/ecommerce/features/img-1.jpg';
import { CommonTitle } from "Components/Homepage";

const Service = () => {
    return (
        <React.Fragment>
            <CommonService />
            <section className="section pt-0">
                <Container>
                    <Row >
                        <Col lg={6}>
                            <Link to='#' className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden position-relative d-block">
                                <Image src={featuresimg3} fluid rounded alt="" />
                                <div className="bg-overlay blue"></div>
                                <div className="product-content p-4">
                                    <p className="text-uppercase text-white mb-2">Up to 50-70%</p>
                                    <h1 className="text-white lh-base fw-medium ff-secondary"> Women's Sportwere Sales</h1>
                                    <div className="product-btn mt-4 text-white">
                                        Shop Now <i className="bi bi-arrow-right ms-2"></i>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Link to="#" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden position-relative d-block">
                                <Image src={featuresimg1} fluid rounded alt="" />
                                <div className="product-content p-4">
                                    <p className="text-uppercase fw-medium text-secondary mb-2">Summer Sales</p>
                                    <h1 className="lh-base ff-secondary text-dark">Trendy Fashion Clothes</h1>
                                    <div className="product-btn mt-4">
                                        Shop Now <i className="bi bi-arrow-right ms-2"></i>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container >
                <CommonTitle
                    title="Top Picks Products Of The Week"
                    dicription="This ranges from women and men's outfits to children's clothing, shoes, accessories, and more. People love their clothes, and fashion isn't going anywhere!"
                />
            </Container>
        </React.Fragment >
    )
}

export default Service;