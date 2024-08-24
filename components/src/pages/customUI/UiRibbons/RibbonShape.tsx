import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { RibbonsExample } from './UiRibbons';

const RibbonShape = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Ribbon Shape</h4>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-3">
                                <p className="text-muted">Use <code>ribbon-shape</code> class to show ribbon shaped ribbon.</p>
                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none mb-lg-0">
                                        <Card.Body>
                                            <div className="ribbon ribbon-primary ribbon-shape">Primary</div>
                                            <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                            <div className="ribbon-content text-muted mt-4">
                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none mb-lg-0">
                                        <Card.Body>
                                            <div className="ribbon ribbon-success ribbon-shape">Success</div>
                                            <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                            <div className="ribbon-content text-muted mt-4">
                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none mb-lg-0 right">
                                        <Card.Body>
                                            <div className="ribbon ribbon-info ribbon-shape">Info</div>
                                            <h5 className="fs-14 text-start">Ribbon Shape Right</h5>
                                            <div className="ribbon-content text-muted mt-4">
                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
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
                                <RibbonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RibbonShape;