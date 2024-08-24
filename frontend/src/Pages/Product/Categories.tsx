import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//img
import profileBg from "assets/images/profile-bg.jpg";
import instagram1 from 'assets/images/ecommerce/instagram/img-1.jpg';
import instagram2 from 'assets/images/ecommerce/instagram/img-2.jpg';
import instagram5 from "assets/images/ecommerce/instagram/img-5.jpg";
//component
import { CommonProduct, DefauilOffer } from "Components/ProductSilde";
import { catagoriesData, ellipsCategories, sliderCategories } from "Common/data";
import { CommonService } from "Components/CommonService";

export const TopCategoies = ({ title }: any) => {
    return (
        <Row className="justify-content-center">
            <Col lg={12}>
                <div className="mb-5 text-center">
                    <h2 className="mb-3">{title}</h2>
                    <p className="text-muted fs-15 mb-0">Browser the collection of top categories.</p>
                </div>
            </Col>
        </Row>
    )
}

const Categories = () => {
    return (
        <React.Fragment>
            <section className="section ecommerce-about" style={{ backgroundImage: `url(${profileBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="bg-overlay bg-primary" style={{ opacity: "0.85" }}></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h1 className="text-white lh-base text-capitalize">Categories</h1>
                                <p className="text-white-75 fs-15 mb-0">Our all categories wise product available here.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <TopCategoies title="Classic" />
                    <Row className="justify-content-center">
                        {
                            (catagoriesData || [])?.map((item, inx) => {
                                return (
                                    <Col lg={3} md={6} key={inx}>
                                        <Card className="card-animate text-center">
                                            <Card.Body className="p-4">
                                                <Image src={item.img} alt="" className="avatar-xl" />
                                                <div className="mt-4">
                                                    <Link to='/product-list/defualt' className="stretched-link">
                                                        <h5 className="fs-15 mb-0">{item.title}</h5>
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
            <section className="section pt-0">
                <Container>
                    <TopCategoies title="Default" />
                </Container>
                <CommonProduct cxxl="4" cmd="6" />
            </section>
            <section>
                <Container>
                    <TopCategoies title="Ellips" />
                    <Row>
                        {
                            (ellipsCategories || [])?.map((item, inx) => {
                                return (
                                    <Col lg={2} md={3} sm={6} key={inx}>
                                        <div className="text-center">
                                            <Image src={item.img} alt=""
                                                className={` bg-${item.bg}-subtle border border-2 border-${item.bg} border-opacity-10 p-4`} fluid roundedCircle />
                                            <div className="mt-4">
                                                <Link to="#">
                                                    <h5 className="mb-2 fs-15">{item.title}</h5>
                                                </Link>
                                                <p className="text-muted fs-12">{item.product} Products</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </section>
            <section className="section pb-0">
                <Container>
                    <TopCategoies title="Slider Products" />
                    <Row>
                        <Col lg={12}>
                            <Swiper modules={[Navigation, Autoplay]}
                                slidesPerView={4}
                                spaceBetween={15}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                loop={true}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                className="swiper mySwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden ">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-wrapper py-4">
                                    {(sliderCategories || []).map((item, key) => (
                                        <SwiperSlide key={key}>
                                            <Card className="card-animate overflow-hidden">
                                                <div className={`bg-${item.bg}-subtle rounded-top py-4`}>
                                                    <div className="gallery-product">
                                                        <Image src={item.img} alt="" style={{ maxHeight: "215px", maxWidth: "100%" }} className="mx-auto d-block" />
                                                    </div>
                                                </div>
                                                <Card.Body className="text-center">
                                                    <Link to='/product-list' className="stretched-link">
                                                        <h6 className="fs-16 lh-base text-truncate">{item.title}</h6>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <TopCategoies title="Masonry" />
                    <Row className="g-2">
                        <Col lg={7}>
                            <Card className="card-height-100">
                                <Link to='/product-list/defualt' className="insta-img categrory-box rounded-3">
                                    <div className="categrory-content text-center">
                                        <span className="categrory-text text-white fs-18">Electronics</span>
                                    </div>
                                    <Image src={instagram1} className="img-fluid" alt="" />
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={5}>
                            <Row className="g-2">
                                <Col lg={12}>
                                    <Card className="mb-0">
                                        <Link to='/product-list/defualt' className="insta-img categrory-box rounded-3">
                                            <div className="categrory-content text-center">
                                                <span className="categrory-text text-white fs-18">Cosmatics</span>
                                            </div>
                                            <Image src={instagram2} className="w-100 object-fit-cover" alt="" style={{ maxHeight: "318px" }} />
                                        </Link>
                                    </Card>
                                </Col>
                                <Col lg={12}>
                                    <Card className="mb-0">
                                        <Link to='/product-list/defualt' className="insta-img categrory-box rounded-3">
                                            <div className="categrory-content text-center">
                                                <span className="categrory-text text-white fs-18">Handbags &amp; Clutches</span>
                                            </div>
                                            <Image src={instagram5} className="w-100 object-fit-cover" alt="" style={{ maxHeight: "318px" }} />
                                        </Link>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <DefauilOffer />
            <CommonService />
        </React.Fragment>
    )
}

export default Categories;