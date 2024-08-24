import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Images
import img1 from "assets/images/small/img-1.jpg"
import img4 from "assets/images/small/img-5.jpg"
import img5 from "assets/images/small/img-6.jpg"
import img6 from "assets/images/small/img-7.jpg"
import img7 from "assets/images/small/img-8.jpg"
import img8 from "assets/images/small/img-10.jpg"


const CardImageCaps = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 text-decoration-underline">Card Image Caps & Overlays</h5>
                    </div>
                    <Row>
                        <Col xxl={4} lg={6} className="col-xxl-4 col-lg-6">
                            <Card className="card-overlay">
                                <img className="card-img img-fluid" src={img8} alt="Card img" />
                                <div className="card-img-overlay p-0 d-flex flex-column">
                                    <Card.Header className="bg-transparent">
                                        <h4 className="card-title text-white mb-0">Design your apps in your own way</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="card-text text-white mb-2">Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your unpleasant for the reader. </p>
                                        <p className="card-text">
                                            <small className="text-white">Last updated 3 mins ago</small>
                                        </p>
                                    </Card.Body>
                                    <div className="card-footer bg-transparent text-center">
                                        <Link to="#" className="link-light">Read More <i className="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card className="card-overlay">
                                <img className="card-img img-fluid" src={img1} alt="Card img" />
                                <div className="card-img-overlay p-0">
                                    <Card.Header className="bg-transparent">
                                        <h4 className="card-title text-white mb-0">Design your apps in your own way</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="card-text text-white mb-2">Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your unpleasant for the reader. </p>
                                        <p className="card-text">
                                            <small className="text-white">Last updated 3 mins ago</small>
                                        </p>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card className="card-overlay">
                                <img className="card-img img-fluid" src={img4} alt="Card img" />
                                <div className="card-img-overlay p-0" style={{ top: "auto" }}>
                                    <Card.Body>
                                        <p className="card-text text-white mb-2">Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your unpleasant for the reader. </p>
                                        <p className="card-text">
                                            <small className="text-white">Last updated 3 mins ago</small>
                                        </p>
                                    </Card.Body>
                                    <div className="card-footer bg-transparent">
                                        <h4 className="card-title text-white mb-0">Design your apps in your own way</h4>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={4} lg={6}>
                            <Card>
                                <img className="card-img-top img-fluid" src={img5} alt="Card img cap" />
                                <Card.Body>
                                    <h4 className="card-title mb-2">A day in the of a professional fashion designer</h4>
                                    <p className="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                    <p className="card-text">
                                        Last updated 3 mins ago
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card>
                                <Card.Body>
                                    <h4 className="card-title mb-2">A day in the of a professional fashion designer</h4>
                                    <p className="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                    <p className="card-text">
                                        Last updated 3 mins ago
                                    </p>
                                </Card.Body>
                                <img className="card-img-bottom img-fluid" src={img6} alt="Card img cap" />
                            </Card>
                        </Col>

                        <Col xxl={4} lg={6}>
                            <Card>
                                <Card.Body>
                                    <h4 className="card-title mb-2">A day in the of a professional fashion designer</h4>
                                    <p className="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.</p>
                                </Card.Body>
                                <img className="card-img rounded-0 img-fluid" src={img7} alt="Card img cap" />
                                <div className="card-footer">
                                    <p className="card-text mb-0">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </Card>
                        </Col>

                        <Col xxl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">A day in the of a professional fashion designer</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.</p>
                                </Card.Body>
                                <img className="card-img rounded-0 img-fluid" src={img8} alt="Card img cap" />
                                <div className="card-footer">
                                    <p className="card-text mb-0">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </Card>
                        </Col>

                        <Col xxl={4} lg={6}>
                            <Card>
                                <img className="card-img-top img-fluid" src={img7} alt="Card img cap" />
                                <Card.Header>
                                    <h4 className="card-title mb-0">A day in the of a professional fashion designer</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <p className="card-text mb-0">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </Card>
                        </Col>

                        <Col xxl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">A day in the of a professional fashion designer</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. ommodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                    <p className="card-text mb-0">
                                        Last updated 3 mins ago
                                    </p>
                                </Card.Body>
                                <img className="card-img-bottom img-fluid" src={img6} alt="Card img cap" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>
        </React.Fragment>
    )
}

export default CardImageCaps;