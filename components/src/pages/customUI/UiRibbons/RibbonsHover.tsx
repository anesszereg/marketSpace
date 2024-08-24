import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { RibbonsHoverExample } from './UiRibbons';

const RibbonsHover = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Ribbons Hover</h4>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-3">
                                <p className="text-muted">Use <code>trending-ribbon</code> class to show ribbon with hovering effect.</p>
                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                        <Card.Body className="text-muted">
                                            <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                            </div>
                                            <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
                                            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                        <Card.Body className="text-muted">
                                            <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                            </div>
                                            <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
                                            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box right border shadow-none overflow-hidden mb-lg-0">
                                        <Card.Body className="text-muted">
                                            <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <i className="ri-flashlight-fill text-white align-bottom float-start me-1"></i> <span className="trending-ribbon-text">Trending</span>
                                            </div>
                                            <h5 className="fs-14 mb-3">Ribbon Right Shape</h5>
                                            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
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
                                <RibbonsHoverExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RibbonsHover