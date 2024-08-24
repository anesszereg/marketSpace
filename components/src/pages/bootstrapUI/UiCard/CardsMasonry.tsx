import React from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Masonry from 'react-responsive-masonry'



// import Images
import img3 from "assets/images/small/img-3.jpg"
import img8 from "assets/images/small/img-8.jpg"
import img7 from "assets/images/small/img-7.jpg"

import avtar2 from 'assets/images/users/avatar-2.jpg'

const CardsMasonry = () => {
//     const breakpointColumnsObj = {
//         default: 3,
//         1100: 3,
//         700: 2,
//         500: 1
//     };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <div className="justify-content-between d-flex align-items-center mt-5 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Cards Masonry</h5>
                    </div>
                    <Row>
                        <Masonry
                            // columnsCountBreakPoints={breakpointColumnsObj}
                            className="my-masonry-grid_column me-3"
                        >
                            <Col>
                                <Card>
                                    <Image src={img3} className="card-img-top" alt="..." height="330" width="495" />
                                    <Card.Body>
                                        <h5 className="card-title mb-1">Card title that wraps to a new line</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h4 className="card-title mb-2">A day in the of a professional fashion designer</h4>
                                        <p className="card-text text-muted"> Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.</p>
                                    </Card.Body>
                                    <Image className="card-img rounded-0 img-fluid" src={img8} alt="Card cap" />
                                    <div className="card-footer">
                                        <p className="card-text mb-0">
                                            Last updated 3 mins ago
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Image src={img7} className="card-img" alt="..." height="330" width="495" />
                                </Card>
                            </Col>
                            <Card>
                                <Card.Header>
                                    <button type="button" className="btn-close float-end fs-11" aria-label="Close"></button>
                                    <h6 className="fs-15 mb-0">Hi, Erica Kernan</h6>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title">How to get creative in your work ?</h6>
                                    <p className="card-text text-muted mb-0">A business consulting agency is involved in the planning, implementation, and education of businesses. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <Link to="#" className="link-success float-end">Read More <i className="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></Link>
                                    <p className="text-muted mb-0">1 days Ago</p>
                                </div>
                            </Card>
                            <Card className="bg-primary text-white text-center p-3">
                                <blockquote className="card-blockquote m-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                    <footer className="blockquote-footer text-white font-size-12 mt-0 mb-0">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card className="p-3">
                                <figure className="mb-0">
                                    <blockquote className="blockquote">
                                        <p className="lead">"A business consulting agency is involved in the planning, implementation, and education of businesses."</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer fs-13 text-end mb-0">
                                        Creative Agency<cite title="Source Title" className="text-primary fw-semibold"> Alice Mellor</cite>
                                    </figcaption>
                                </figure>
                            </Card>
                            <div></div>
                            <div><Card>
                                <Card.Body>
                                    <h5 className="card-title mb-1">Card title</h5>
                                    <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </Card.Body>
                            </Card></div>
                            <div>
                                <Card className="card-success">
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <Image src={avtar2} alt="" className="avatar-sm rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <p className="card-text"><span className="fw-medium">Charles Dickens</span> (Financial Analyst) started a new conversation.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <div className="card-footer">
                                        <div className="text-center">
                                            <Link to="#" className="link-light">Connect Now <i className="ri-arrow-right-s-line align-middle lh-1"></i></Link>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div></div>
                            <div></div>
                            <div><Card className="text-center">
                                <Card.Body>
                                    <h5 className="card-title mb-1">Card title</h5>
                                    <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </Card.Body>
                            </Card></div>
                        </Masonry>
                    </Row>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default CardsMasonry;