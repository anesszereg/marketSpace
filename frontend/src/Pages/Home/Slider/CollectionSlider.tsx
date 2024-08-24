import { Link } from "react-router-dom";
import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { slider } from "Common/data";
import { CommonTitle } from "Components/Homepage";

//img
import paypal from "assets/images/clients/paypal.svg";
import walmart from "assets/images/clients/walmart.svg";
import spotify from "assets/images/clients/spotify.svg";
import shopify1 from "assets/images/clients/shopify.svg";
import lenovo from "assets/images/clients/lenovo.svg";

const CollectionSlider = () => {
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <CommonTitle
                        title="What Customers Say About Us"
                        dicription="A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue." />
                    <Row>
                        <Col lg={12}>
                            <Swiper className="testi-slider swiper-pointer-events swiper-backface-hidden"
                                wrapperClass="my-5"
                                spaceBetween={20}
                                slidesPerView={3}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {
                                    (slider || [])?.map((item, inx) => {
                                        return (
                                            <SwiperSlide key={inx} className={`mt-${item.top}`}>
                                                <div className="client-box m-1">
                                                    <div className="client-desc p-4 border rounded">
                                                        <p className="mb-0 fs-16">{item.discription}</p>
                                                    </div>
                                                    <div className="pt-4">
                                                        <div className="d-flex align-items-center mt-4 pt-1">
                                                            <Image src={item.img} alt="" className="avatar-sm" rounded />
                                                            <div className="flex-grow-1 ms-3">
                                                                <h5 className="mb-2 fs-16">{item.title}</h5>
                                                                <p className="text-muted mb-0">{item.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-5 row-cols-md-3 row-cols-1 text-center justify-content-center align-items-center g-3 mt-5 pt-lg-5">
                        <Col>
                            <div className="client-images">
                                <Link to="#">
                                    <Image src={paypal} alt="client-img" className="mx-auto d-block" fluid />
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="client-images">
                                <Link to="#">
                                    <Image src={walmart} alt="client-img" className="mx-auto d-block" fluid />
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="client-images">
                                <Link to="#">
                                    <Image src={spotify} alt="client-img" className="mx-auto d-block" fluid />
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="client-images">
                                <Link to="#">
                                    <Image src={shopify1} alt="client-img" className="mx-auto d-block" fluid />
                                </Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="client-images">
                                <Link to="#">
                                    <Image src={lenovo} alt="client-img" className="mx-auto d-block" fluid />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default CollectionSlider;