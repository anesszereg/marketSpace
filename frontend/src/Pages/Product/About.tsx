import React from "react"
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//img
import ecommerce1 from "assets/images/ecommerce/img-1.jpg";
import ecommerce3 from "assets/images/ecommerce/img-3.jpg";
import ecommerce4 from "assets/images/ecommerce/img-4.jpg";
import ecommerce5 from 'assets/images/ecommerce/img-5.jpg';
import { aboutCard, aboutManagement } from "Common/data";
import { DefauilOffer } from "Components/ProductSilde";
import { CommonService } from "Components/CommonService";

const About = () => {
    return (
        <React.Fragment>
            <section className="ecommerce-about">
                <div className="effect d-none d-md-block">
                    <div className="ecommerce-effect bg-primary"></div>
                    <div className="ecommerce-effect bg-info"></div>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h1 className="fw-bold mb-3">👋 About Us</h1>
                            <p className="fs-16 text-muted mb-5 mb-lg-3">We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world. The thought process that led to the items being created and sold.</p>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <Row className="align-items-center">
                                    <Col mg={6}>
                                        <div className="position-relative">
                                            <Image src={ecommerce4} alt="" fluid rounded />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="vstack gap-4">
                                            <Image src={ecommerce1} alt="" fluid rounded />
                                            <Image src={ecommerce3} alt="" fluid rounded />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="ecommerce-about-cta">
                <Container>
                    <Row>
                        {
                            (aboutCard || [])?.map((item, inx) => {
                                return (
                                    <Col lg={4} key={inx}>
                                        <Card className="card-animate border-0">
                                            <Card.Body>
                                                {/* <lord-icon src="https://cdn.lordicon.com/fcoczpqi.json" trigger="hover" target="div" style="width:70px;height:70px">
                                                </lord-icon> */}
                                                <h5 className="fs-16 mt-3">{item.title}</h5>
                                                <p className="text-muted">{item.discription}</p>
                                                <div>
                                                    <Link to="#" className="link-effect link-primary">Read More <i className="bi bi-arrow-right ms-2"></i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
            <section className="ecommerce-about-team bg-light bg-opacity-50">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center mb-5">
                                <h2 className="mb-3">Expart Management Team</h2>
                                <p className="text-muted fs-15">An Expert Leader is first and foremost someone who has deep expertise in the area that they are leading.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gy-4">
                        {
                            (aboutManagement || [])?.map((item, inx) => {
                                return (
                                    <Col xl={3} md={6} key={inx}>
                                        <div className="team-box text-center">
                                            <div className="team-img">
                                                <Image src={item.img} alt="" fluid rounded roundedCircle className="border border-dashed border-dark border-opacity-25" />
                                            </div>
                                            <div className="mt-4 pt-1">
                                                <Link to="#">
                                                    <h5>{item.title}</h5>
                                                </Link>
                                                <p className="text-muted mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div>
                                <Image src={ecommerce5} alt="" fluid rounded />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mt-4 mt-lg-0">
                                <p className="text-uppercase fw-medium text-muted">Best Products Sales</p>
                                <h2 className="lh-base fw-semibold mb-3">Desgining Spaces to enahance your business growth</h2>
                                <p className="text-muted fs-16">A physical office space will promote collaboration and understanding. Having a physical location for your business allows you to put together the company that you want in an environment where employees can communicate with each other without having to go through any extra steps.</p>
                                <Link to="#" className="fw-medium link-effect">Shop Now <i className="bi bi-arrow-right ms-2"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <DefauilOffer />
            <CommonService />
        </React.Fragment>
    )
}

export default About;