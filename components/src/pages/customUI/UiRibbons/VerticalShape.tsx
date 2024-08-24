import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { RibbonShapeExample } from './UiRibbons';

const VerticalShape = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header className="align-items-center">
                            <h4 className="card-title mb-0">Vertical Shape</h4>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-3">
                                <p className="text-muted">Use <code>vertical-shape</code> class to show round-shaped ribbon.</p>
                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none mb-lg-0">
                                        <Card.Body>
                                            <div className="d-flex">
                                                <div className="ribbon ribbon-primary vertical-shape">Primary</div>
                                                <div className="flex-grow-1">
                                                    <div className="ribbon-content text-muted ms-5">
                                                        <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none mb-lg-0">
                                        <Card.Body>
                                            <div className="d-flex">
                                                <div className="ribbon ribbon-success vertical-shape">Success</div>
                                                <div className="flex-grow-1">
                                                    <div className="ribbon-content text-muted ms-5">
                                                        <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none right mb-lg-0">
                                        <Card.Body>
                                            <div className="d-flex">
                                                <div className="ribbon ribbon-info vertical-shape">Info</div>
                                                <div className="flex-grow-1">
                                                    <div className="ribbon-content text-muted me-5">
                                                        <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <RibbonShapeExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default VerticalShape;