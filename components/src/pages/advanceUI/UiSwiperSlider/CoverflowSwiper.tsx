import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";

// import Images

import img4 from "assets/images/small/img-4.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img6 from "assets/images/small/img-6.jpg";
import img7 from "assets/images/small/img-7.jpg";
import img8 from "assets/images/small/img-8.jpg";
import img9 from "assets/images/small/img-9.jpg";

const CoverflowSwiper = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Effect Coverflow Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>effect-coverflow-swiper</code> class to set a swiper with coverflow effect.</p>

                            <Swiper effect={"coverflow"} grabCursor={true} centeredSlides={true} slidesPerView={4} loop={true} autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                modules={[EffectCoverflow, Pagination, Autoplay]} className="mySwiper swiper effect-coverflow-swiper rounded pb-5"
                            >
                                <div className="swiper-wrapper">
                                    <SwiperSlide><Image src={img4} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img5} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img6} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img7} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img8} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img9} alt="" className="img-fluid" /></SwiperSlide>
                                </div>
                                <div className="swiper-pagination swiper-pagination-dark"></div>
                            </Swiper>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CoverflowSwiper;