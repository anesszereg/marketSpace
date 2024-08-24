import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
//component
import { ContactHelp } from "Components/CommonService";
import { Shoptopbar } from "Components/ShopTopBar";
import { shopReviews } from "Common/data";

const Review = () => {
    document.title = "Customer Review | Toner - React FrontEnd";
    return (
        <React.Fragment>
            <Shoptopbar title="Product Reviews" page="Review" />
            <section className="section">
                <Container>
                    <Row data-masonry='{"percentPosition": true }' style={{ position: "relative", height: "812.982px" }}>
                        {
                            (shopReviews || [])?.map((item, inx) => {
                                return (
                                    <Col key={inx} lg={4} md={6}>
                                        <Card>
                                            <Card.Body>
                                                <Image src={item.img} alt="" className="avatar-sm rounded" />
                                                <h5 className="mb-2 mt-3">{item.title}</h5>
                                                <div className="text-warning mb-3">
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                    <i className="ri-star-s-fill"></i>
                                                </div>
                                                <p className="mb-0 text-muted fs-15">{item.discription}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
            <ContactHelp cname="section" />
        </React.Fragment >
    )
}

export default Review;