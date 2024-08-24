import React from 'react';
import { Button, Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

// Import Images
import img4 from 'assets/images/products/img-4.png'
import img6 from 'assets/images/products/img-6.png'
import img7 from 'assets/images/products/img-7.png'

const Acitivity = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12} lg={6}>
                    <Card>
                        <Card.Header className="d-flex align-items-center">
                            <h5 className="card-title mb-0 flex-grow-1">Acitivity</h5>
                            <div className="flex-shrink-0">
                                <Dropdown>
                                    <Dropdown.Toggle href="#" className="arrow-none btn btn-ghost-primary btn-sm btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ph-dots-three-outline"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <li><Dropdown.Item href="/#">Action</Dropdown.Item></li>
                                        <li><Dropdown.Item href="/#">Another action</Dropdown.Item></li>
                                        <li><Dropdown.Item href="/#">Something else here</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SimpleBar data-simplebar style={{ maxHeight: "440px" }}>
                                <div className="acitivity-timeline acitivity-main">
                                    <div className="acitivity-item d-flex">
                                        <div className="flex-shrink-0 acitivity-avatar"></div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Purchase by Jacques Leon</h6>
                                            <p className="mb-2 text-muted"><small>12:45 PM Today</small></p>
                                            <p className="text-muted mb-0">Product noise evolve smartwatch </p>
                                        </div>
                                    </div>
                                    <div className="acitivity-item py-3 d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="acitivity-avatar"></div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Today offers by <Link to="/seller-overview" className="link-secondary">themesbrand</Link></h6>
                                            <p className="mb-2 text-muted"><small>03:14 PM - 18 Jan, 2023</small></p>
                                            <p className="text-muted mb-0">Offer is valid on orders of Rs.500 Or above for selected products only.</p>
                                        </div>
                                    </div>
                                    <div className="acitivity-item py-3 d-flex">
                                        <div className="flex-shrink-0 acitivity-avatar">
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Added new <span className="fw-semibold">style collection</span></h6>
                                            <p className="mb-2 text-muted"><small>9:47 PM Yesterday</small></p>
                                            <p className="text-muted mb-2">By Zibra Fashion</p>
                                            <div className="d-inline-flex gap-2 border border-dashed p-2">
                                                <Link to="#" className="bg-success-subtle rounded p-3 avatar-md flex-shrink-0">
                                                    <img src={img4} alt="" className="img-fluid d-block" />
                                                </Link>
                                                <Link to="#" className="bg-warning-subtle rounded p-3 avatar-md flex-shrink-0">
                                                    <img src={img6} alt="" className="img-fluid d-block" />
                                                </Link>
                                                <Link to="#" className="bg-info-subtle rounded p-3 avatar-md flex-shrink-0">
                                                    <img src={img7} alt="" className="img-fluid d-block" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="acitivity-item py-3 d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="acitivity-avatar"></div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Alina Holland have bookmark the products</h6>
                                            <p className="mb-2 text-muted"><small>04:30 AM - 29 Dec, 2022</small></p>
                                            <p className="text-muted mb-0">Allow users to bookmark products in your WooCommerce store.</p>
                                        </div>
                                    </div>
                                    <div className="acitivity-item py-3 d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="acitivity-avatar">
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Favoried Product</h6>
                                            <p className="mb-2 text-muted"><small>01:14 PM - 24 Nov, 2022</small></p>
                                            <p className="text-muted mb-0">Kristina Hooper have favorited product.</p>
                                        </div>
                                    </div>
                                    <div className="acitivity-item py-3 d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="acitivity-avatar">
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Flash sale starting <span className="text-primary">Tomorrow.</span></h6>
                                            <p className="mb-2 text-muted"><small>11:15 AM - 29 Oct, 2022</small></p>
                                            <p className="text-muted mb-0">Flash sale by <Link to="#" className="link-secondary fw-medium">Terry & Jerry Fashion</Link></p>
                                        </div>
                                    </div>
                                    <div className="acitivity-item py-3 d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="acitivity-avatar"></div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Monthly sales report</h6>
                                            <p className="mb-2 text-muted"><small>04:57 PM - 11 Sep, 2022</small></p>
                                            <p className="text-muted mb-0"><span className="text-danger">1 days left</span> notification to submit the monthly sales report. <Link to="#" className="link-warning text-decoration-underline">Reports Builder</Link></p>
                                        </div>
                                    </div>
                                    <div className="acitivity-item d-flex">
                                        <div className="flex-shrink-0 acitivity-avatar"></div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-0 lh-base">Frank Hook Review</h6>
                                            <p className="mb-2 text-muted"><small>04:57 PM - 26 Aug, 2022</small></p>
                                            <p className="text-warning mb-2"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
                                            <p className="text-muted mb-0 fst-italic">" A product that has reviews is more likable to be sold than a product. "</p>
                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={12} lg={6}>
                    <Card>
                        <Card.Header className="d-flex">
                            <h5 className="card-title flex-grow-1 mb-0">Important Notes</h5>
                        </Card.Header>
                        <Card.Body>
                            <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }}>
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="p-3 bg-secondary bg-opacity-10 rounded">
                                            <p className="mb-2 text-truncate-three-lines">Thanks to the pandemic, e-commerce has seen a surge of activity and new consumers. This projection is based on the fact that the sector is expected to grow at 20 percent annually.</p>
                                            <div className="text-end">
                                                <Link to="#!" className="link-secondary"><i>- Admin</i></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="p-3 bg-primary bg-opacity-10 rounded">
                                            <p className="mb-2 text-truncate-three-lines">Live shopping could be a great innovation to consider as part of your strategy in 2022 to further build customer engagement, loyalty</p>
                                            <div className="text-end">
                                                <Link to="#!"><i>- Zibra Fashion</i></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="p-3 bg-danger bg-opacity-10 rounded">
                                                <p className="mb-2 text-truncate-three-lines">Buying online has become necessary for some customers, especially if they are part of the at-risk groups.</p>
                                                <div className="text-end">
                                                    <Link to="#!" className="link-danger"><i>- Sales Manager</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>

                            <form action="#!" className="mt-3">
                                <div className="mb-3">
                                    <Form.Label htmlFor="notesInput">Notes</Form.Label>
                                    <textarea className="form-control" id="notesInput"></textarea>
                                </div>
                                <div className="text-end">
                                    <Button variant='primary' type="button">Add Notes</Button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Acitivity;