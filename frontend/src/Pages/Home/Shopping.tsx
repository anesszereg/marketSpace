import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { shopingsCollection } from "Common/data";
import { CommonTitle } from "Components/Homepage";

const Shoping = () => {
    return (
        <React.Fragment>
            <section className="section bg-light bg-opacity-50">
                <Container>
                    <CommonTitle
                        title="Shop insights feeds"
                        dicription="Shopping Insights gives marketers a 360-degree view of a product's popularity. Harnessing search volume data for more than 7,000 popular products (and counting)"
                    />
                    <Row className="mt-5">
                        {
                            (shopingsCollection || [])?.map((item, inx) => {
                                return (
                                    <Col lg={4} key={inx}>
                                        <Card className="overflow-hidden">
                                            <Image src={item.img} className="img-fluid" alt="" />
                                            <Card.Body >
                                                <div className="entry-meta">
                                                    <Link to="#" className="text-muted">{item.like} <i className="mdi mdi-like"></i> Like</Link>
                                                    <span className="text-muted mx-1">|</span>
                                                    <Link to="#" className="text-muted">{item.comment} Comments</Link>
                                                </div>
                                                <div className="blog-date bg-body-secondary rounded">
                                                    <h4 className="mb-0">{item.data}</h4>
                                                    <p className="text-muted mt-1">April</p>
                                                </div>
                                                <div className="mt-3">
                                                    <Link to="#"><h5 className="fs-17 lh-base">{item.title}</h5></Link>
                                                    <p className="text-muted fs-15 mt-2">{item.discription}</p>
                                                    <Link to="#" className="link-effect link-info">Continue Reading <i className="bi bi-arrow-right ms-2"></i></Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }

                        <div className="mt-4 text-center">
                            <Link to="#" className="btn btn-soft-primary btn-hover">View More Articles <i className="bi bi-arrow-right ms-2"></i></Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Shoping;