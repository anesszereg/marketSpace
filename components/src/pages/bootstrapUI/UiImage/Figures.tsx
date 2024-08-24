import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

import { FiguresExample, ResponsiveExample } from './UiImageCode';

// import Images
import img2 from 'assets/images/small/img-2.jpg'
import img4 from 'assets/images/small/img-4.jpg'
import img5 from 'assets/images/small/img-5.jpg'

const Figures = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={8}>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Figures</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="card-title-desc text-muted">Use the included <code>figure</code>, <code>figure-img</code> and <code>figure-caption</code> classes to provide some baseline styles for the HTML5 <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements.</p>
                            <Row className="g-3">
                                <Col sm={6}>
                                    <figure className="figure mb-0">
                                        <Image src={img4} className="figure-img img-fluid rounded" alt="..." />
                                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                                    </figure>
                                </Col>
                                <Col sm={6}>
                                    <figure className="figure mb-0">
                                        <Image src={img5} className="figure-img img-fluid rounded" alt="..." />
                                        <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
                                    </figure>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <FiguresExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Responsive Images</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="card-title-desc text-muted">Responsive Images with <code>img-fluid,max-width: 100%; and height: auto;</code> to the image so that it scales with the parent width.</p>
                            <div>
                                <Image src={img2} className="img-fluid" alt="Responsive image" />
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ResponsiveExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Figures