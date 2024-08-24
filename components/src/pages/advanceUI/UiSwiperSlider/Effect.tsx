import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap';

// import Images
import img1 from "assets/images/small/img-1.jpg";
import img2 from "assets/images/small/img-2.jpg";
import img6 from "assets/images/small/img-6.jpg";
import img7 from "assets/images/small/img-7.jpg";
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
import { Pagination, Navigation, Autoplay, EffectFade, EffectCreative, EffectFlip } from "swiper";

const Effect = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Effect Fade Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>effect-fade-swiper</code> class to set a swiper with fade effect.</p>


                            <Swiper spaceBetween={30} effect={"fade"} pagination={{ clickable: true, }} modules={[EffectFade, Pagination, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper effect-fade-swiper rounded" >
                                <SwiperSlide> <Image src={img6} alt="" className="img-fluid" /> </SwiperSlide>
                                <SwiperSlide> <Image src={img7} alt="" className="img-fluid" /> </SwiperSlide>
                                <SwiperSlide> <Image src={img8} alt="" className="img-fluid" /> </SwiperSlide>
                            </Swiper>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Effect Creative Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>effect-creative-swiper</code> class to set a swiper with creative custom effect.</p>

                            <Swiper grabCursor={true} effect={"creative"} pagination={{ clickable: true }}
                                creativeEffect={{
                                    prev: { shadow: true, translate: [0, 0, -400], }, next: { translate: ["100%", 0, 0], },
                                }} modules={[EffectCreative, Pagination, Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper effect-creative-swiper rounded">
                                <div className="swiper-wrapper">
                                    <SwiperSlide><Image src={img9} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img1} alt="" className="img-fluid" /></SwiperSlide>
                                    <SwiperSlide><Image src={img2} alt="" className="img-fluid" /></SwiperSlide>
                                </div>
                            </Swiper>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Effect Flip Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>effect-flip-swiper</code> class to set a swiper with flip effect.</p>

                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={{ clickable: true }}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                                loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }}
                                className="mySwiper effect-flip-swiper rounded"
                            >
                                <div className="swiper-wrapper">
                                    <SwiperSlide> <Image src={img10} alt="" className="img-fluid" /> </SwiperSlide>
                                    <SwiperSlide> <Image src={img1} alt="" className="img-fluid" /> </SwiperSlide>
                                    <SwiperSlide> <Image src={img2} alt="" className="img-fluid" /> </SwiperSlide>
                                </div>
                            </Swiper>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Effect