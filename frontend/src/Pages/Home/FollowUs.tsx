import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//img
import Img1 from 'assets/images/ecommerce/instagram/img-1.jpg';
import Img2 from 'assets/images/ecommerce/instagram/img-2.jpg';
import Img3 from 'assets/images/ecommerce/instagram/img-3.jpg';
import Img4 from 'assets/images/ecommerce/instagram/img-4.jpg';
import Img5 from 'assets/images/ecommerce/instagram/img-5.jpg';
import Img6 from 'assets/images/ecommerce/instagram/img-6.jpg';
import { CommonTitle } from "Components/Homepage";

export const folloImg = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
    { id: 4, img: Img4 },
    { id: 5, img: Img5 },
    { id: 6, img: Img6 },
]

const FollowUs = () => {
    return (
        <React.Fragment>
            <section className="section pb-0">
                <Container>
                    <CommonTitle
                        title="Follow Us In Instagram"
                        dicription="The most common approach that peoples use to say follow me on Instagram is by sending a direct message." />
                </Container>

                <div className="position-relative">
                    <Row className="g-0 mt-5">
                        {
                            (folloImg || [])?.map((item, ind) => {
                                return (
                                    <Col key={ind}>
                                        <div className="insta-img">
                                            <Link to="#" className="stretched-link">
                                                <Image src={item.img} alt="" fluid />
                                                <i className="ri-instagram-line"></i>
                                            </Link>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                        <div className="insta-lable text-center">
                            <Link to="#" className="btn btn-primary btn-hover">
                                <i className="ph-instagram-logo align-middle me-1"></i> Follow In Instagram
                            </Link>
                        </div>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FollowUs;