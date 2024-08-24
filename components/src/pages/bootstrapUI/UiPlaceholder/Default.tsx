import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DefaultPlaceholderExample } from './UiPlaceholderCode';

// import Images
import img1 from 'assets/images/small/img-1.jpg'
import img2 from 'assets/images/small/img-2.jpg'

const Default = () => {
    document.title=" Placeholders | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>

            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Placeholders" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title className="mb-0">Default Placeholder</Card.Title>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”.</p>
                                <Row className="justify-content-center">
                                    <Col xl={7}>
                                        <Row className="justify-content-between">
                                            <Col lg={5} sm={6}>
                                                <Card>
                                                    <Image src={img1} width="341" className="card-img-top" alt="card img" />

                                                    <Card.Body>
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={5} sm={6}>
                                                <Card aria-hidden="true">
                                                    <Image src={img2} width="341" className="card-img-top" alt="card dummy img" />
                                                    <Card.Body>
                                                        <h5 className="card-title placeholder-glow">
                                                            <span className="placeholder col-6"></span>
                                                        </h5>
                                                        <p className="card-text placeholder-glow">
                                                            <span className="placeholder col-7"></span>
                                                            <span className="placeholder col-4"></span>
                                                            <span className="placeholder col-4"></span>
                                                            <span className="placeholder col-6"></span>
                                                        </p>
                                                        <Link to="#" className="btn btn-primary disabled placeholder col-6"></Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "310px" }}>
                                    <DefaultPlaceholderExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Default