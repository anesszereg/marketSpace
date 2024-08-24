import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";  
import { Pagination, Navigation, Autoplay } from "swiper";

// import Images

import img2 from "assets/images/small/img-2.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img4 from "assets/images/small/img-4.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img6 from "assets/images/small/img-6.jpg";
import img7 from "assets/images/small/img-7.jpg";
import img8 from "assets/images/small/img-8.jpg";
import img9 from "assets/images/small/img-9.jpg";
import img10 from "assets/images/small/img-10.jpg";


const FractionCustomProgress = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Pagination Fraction Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>pagination-fraction-swiper</code> class to set a fraction swiper with pagination.</p>

                            <Swiper pagination={{ type: "fraction", clickable: true }} navigation={true} modules={[Pagination, Navigation, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper pagination-fraction-swiper rounded" >
                                <div className="swiper-wrapper">
                                    <SwiperSlide><Image src={img9} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img10} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img8} alt="" className="img-fluid" /></SwiperSlide>
                                </div>
                            </Swiper>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Pagination Custom Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>pagination-custom-swiper</code> class to set a swiper with custom pagination.</p>

                            <Swiper pagination={{ el: '.swiper-pagination' }} modules={[Pagination, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper pagination-custom-swiper rounded" >
                                <div className="swiper-wrapper">
                                    <SwiperSlide><Image src={img2} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img3} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img4} alt="" className="img-fluid" /></SwiperSlide>
                                </div>
                                <div className="swiper-pagination pagination-custom"></div>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Pagination Progress Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>pagination-progress-swiper</code> class to set a swiper with progress pagination.</p>

                            <Swiper pagination={{ type: "progressbar" }} navigation={true} modules={[Pagination, Navigation, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper pagination-progress-swiper rounded" >
                                <div className="swiper-wrapper">
                                    <SwiperSlide><Image src={img5} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img6} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img7} alt="" className="img-fluid" /></SwiperSlide>
                                </div>
                            </Swiper>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FractionCustomProgress