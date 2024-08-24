import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

// import Images
import img1 from "assets/images/small/img-1.jpg";
import img3 from "assets/images/small/img-3.jpg";
import img4 from "assets/images/small/img-4.jpg";
import img5 from "assets/images/small/img-5.jpg";
import img8 from "assets/images/small/img-8.jpg";
import img9 from "assets/images/small/img-9.jpg";
import img10 from "assets/images/small/img-10.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";  
import { Pagination, Scrollbar, Autoplay, Mousewheel } from "swiper";

const Swipers = () => {
  return (
    <React.Fragment>
        <Row>
        <Col xl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Scrollbar Swiper</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>pagination-scrollbar-swiper</code> class to set a swiper with scrollbar pagination.</p>

                                    <Swiper scrollbar={{ hide: true, }} modules={[Scrollbar, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper pagination-scrollbar-swiper rounded">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><Image src={img8} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><Image src={img9} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><Image src={img10} alt="" className="img-fluid" /></SwiperSlide>
                                        </div>
                                    </Swiper>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical Swiper</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>vertical-swiper</code> class to set a vertical swiper.</p>

                                    <Swiper direction={"vertical"} pagination={{ clickable: true }} modules={[Pagination, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper vertical-swiper rounded" style={{ height: "324px" }}>
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><Image src={img9} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><Image src={img8} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><Image src={img1} alt="" className="img-fluid" /></SwiperSlide>
                                        </div>
                                    </Swiper>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Mousewheel Control Swiper</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>mousewheel-control-swiper</code> class to set a swiper with mousewheel scroll.</p>

                                    <Swiper direction={"vertical"} slidesPerView={1} spaceBetween={30} mousewheel={true}
                                        pagination={{
                                            clickable: true,
                                        }} modules={[Mousewheel, Pagination, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper mousewheel-control-swiper rounded" style={{ height: "324px" }} >
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><Image src={img3} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><Image src={img4} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><Image src={img5} alt="" className="img-fluid" /></SwiperSlide>
                                        </div>
                                    </Swiper>

                                </Card.Body>
                            </Card>
                        </Col>
        </Row>
    </React.Fragment>
  )
}

export default Swipers;