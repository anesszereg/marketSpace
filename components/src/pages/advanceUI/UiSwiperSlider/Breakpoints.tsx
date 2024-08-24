import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination } from "swiper";

import img1 from "assets/images/small/img-1.jpg";
import img2 from "assets/images/small/img-2.jpg";
import img4 from "assets/images/small/img-4.jpg";
import img6 from "assets/images/small/img-6.jpg";
import img10 from "assets/images/small/img-10.jpg";

const Breakpoints = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Responsive Breakpoints Swiper</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>responsive-swiper</code> class to set a responsive swiper.</p>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                                loop={true}
                                modules={[Pagination]}
                                className="mySwiper swiper responsive-swiper rounded gallery-light pb-4"
                            >
                                <div className="swiper-wrapper">

                                    <SwiperSlide>
                                        <div className="gallery-box card">
                                            <div className="gallery-container">
                                                <Link className="image-popup" to='#' title="">
                                                    <Image className="gallery-img img-fluid mx-auto" src={img1} alt="" />
                                                    <div className="gallery-overlay">
                                                        <h5 className="overlay-caption">Glasses and laptop from above</h5>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="box-content">
                                                <div className="d-flex align-items-center mt-1">
                                                    <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Ron Mackie</Link></div>
                                                    <div className="flex-shrink-0">
                                                        <div className="d-flex gap-3">
                                                            <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 2.2K
                                                            </button>
                                                            <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3K
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide><div className="gallery-box card">
                                        <div className="gallery-container">
                                            <Link className="image-popup" to='#' title="">
                                                <Image className="gallery-img img-fluid mx-auto" src={img2} alt="" />
                                                <div className="gallery-overlay">
                                                    <h5 className="overlay-caption">Working at a coffee shop</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Nancy Martino</Link></div>
                                                <div className="flex-shrink-0">
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.2K
                                                        </button>
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.1K
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide><div className="gallery-box card mb-0">
                                        <div className="gallery-container">
                                            <Link className="image-popup" to='#' title="">
                                                <Image className="gallery-img img-fluid mx-auto" src={img10} alt="" />
                                                <div className="gallery-overlay">
                                                    <h5 className="overlay-caption">Fun day at the Hill Station</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Henry Baird</Link></div>
                                                <div className="flex-shrink-0">
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 632
                                                        </button>
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 95
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide><div className="gallery-box card">
                                        <div className="gallery-container">
                                            <Link className="image-popup" to='#' title="">
                                                <Image className="gallery-img img-fluid mx-auto" src={img4} alt="" />
                                                <div className="gallery-overlay">
                                                    <h5 className="overlay-caption">Drawing a sketch</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Jason McQuaid</Link></div>
                                                <div className="flex-shrink-0">
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 825
                                                        </button>
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 101
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide><div className="gallery-box card">
                                        <div className="gallery-container">
                                            <Link className="image-popup" to='#' title="">
                                                <Image className="gallery-img img-fluid mx-auto" src={img6} alt="" />
                                                <div className="gallery-overlay">
                                                    <h5 className="overlay-caption">Project discussion with team</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Erica Kernan</Link></div>
                                                <div className="flex-shrink-0">
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.4K
                                                        </button>
                                                        <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                            <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3k
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
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

export default Breakpoints