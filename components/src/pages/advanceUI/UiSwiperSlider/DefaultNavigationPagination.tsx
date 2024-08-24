import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Image, Row } from 'react-bootstrap';

// import Images
import img1 from "assets/images/small/img-1.jpg";
import img2 from "assets/images/small/img-2.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img4 from "assets/images/small/img-4.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img6 from "assets/images/small/img-6.jpg";
import img7 from "assets/images/small/img-7.jpg";
import img8 from "assets/images/small/img-8.jpg";
import img9 from "assets/images/small/img-9.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import 'swiper/scss/pagination';

const DefaultNavigationPagination = () => {
    document.title = " Swiper Slider | Toner eCommerce + React Admin Template";

    
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Advance UI" breadcrumbItem="Swiper Slider" />
                <Row>
                    <Col xl={4} lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Default Swiper</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>default-swiper</code> class to set a default swiper.</p>

                                <Swiper className="mySwiper swiper default-swiper rounded" modules={[Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }}>
                                    <div className="swiper-wrapper">
                                        <SwiperSlide><Image src={img1} alt="" className="img-fluid" /></SwiperSlide>
                                        <SwiperSlide><Image src={img2} alt="" className="img-fluid" /></SwiperSlide>
                                        <SwiperSlide><Image src={img3} alt="" className="img-fluid" /></SwiperSlide>
                                    </div>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Navigation & Pagination Swiper</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>navigation-swiper</code> class to set a swiper with navigation and pagination.</p>

                                <Swiper modules={[ Pagination, Autoplay]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper navigation-swiper rounded">
                                    <div className="swiper-wrapper swiper-pagination">
                                        <SwiperSlide><Image src={img4} alt="" className="img-fluid" /></SwiperSlide>
                                        <SwiperSlide><Image src={img5} alt="" className="img-fluid" /></SwiperSlide>
                                        <SwiperSlide><Image src={img6} alt="" className="img-fluid" /></SwiperSlide>
                                    </div>
                                </Swiper>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Pagination Dynamic Swiper</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>pagination-dynamic-swiper</code> class to set a dynamic swiper with pagination.</p>

                                <Swiper pagination={{ clickable: true, dynamicBullets: true, }} modules={[Pagination, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper pagination-dynamic-swiper rounded" >
                                    <div className="swiper-wrapper">
                                        <SwiperSlide><Image src={img7} alt="" className="img-fluid" /></SwiperSlide>
                                        <SwiperSlide><Image src={img8} alt="" className="img-fluid" /></SwiperSlide>
                                        <SwiperSlide><Image src={img9} alt="" className="img-fluid" /></SwiperSlide>
                                    </div>
                                </Swiper>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultNavigationPagination;