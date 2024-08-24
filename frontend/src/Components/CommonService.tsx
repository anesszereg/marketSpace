import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//img 
import profileBg from 'assets/images/profile-bg.jpg';

import { service } from "Common/data";

const CommonService = () => {
    return (
        <React.Fragment>
            <section className="section py-5">
                <Container>
                    <Row className="gy-4 gy-lg-0">
                        {
                            (service || [])?.map((item, ind) => {
                                return (
                                    <Col lg={3} sm={6} key={ind} >
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <Image src={item.img} alt="" className="avatar-sm" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-16">{item.title}</h5>
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
        </React.Fragment>
    )
}

const ContactHelp = ({ cname }: any) => {
    return (
        <React.Fragment>
            <section className={`${cname}`} style={{ backgroundImage: `url(${profileBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="bg-overlay bg-secondary" style={{ opacity: "0.85" }}></div>
                <Container >
                    <Row>
                        <Col lg={12}>
                            <div className="d-flex align-items-center">
                                <h2 className="text-white mb-0 flex-grow-1">Let us know how we can help you</h2>
                                <div className="flex-shrink-0">
                                    <Link to='/contact' className="btn btn-darken-primary btn-hover"><i className="ph-phone align-middle me-1"></i> Contact Us</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export { CommonService, ContactHelp };