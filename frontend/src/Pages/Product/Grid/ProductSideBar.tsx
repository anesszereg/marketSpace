import React from "react";
import bannerimg from 'assets/images/ecommerce/banner.jpg';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Adevertise from "Pages/Catalog/adevertise";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { CommonService } from "Components/CommonService";
import Deals from "Pages/Catalog/deals";
import Index from "Components/Index";

const ProductSidebar = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 mt-4">
                <Container fluid >
                    <div className="position-relative rounded-3" style={{ backgroundImage: `url(${bannerimg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <Row className="justify-content-end">
                            <Col xxl={4}>
                                <div className="text-end py-4 px-5 mx-xxl-5">
                                    <h1 className="text-white display-5 lh-base text-capitalize ff-secondary mb-3 fst-italic">Original sound listem to nature</h1>
                                    <div>
                                        <Link to="#" className="link-effect link-light">Show Collections <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="position-relative section">
                <Container fluid>
                    <div className="ecommerce-product gap-4">
                        <Index name="sidebar flex-shrink-0" cxxl="3" clg="4" cmd="6" cheight="200px" />
                        <Adevertise />
                    </div>
                </Container>
            </section>
            <Deals />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default ProductSidebar;