import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';
import { RoundedRibbonExample } from './UiRibbons';

const RoundShape = () => {
    document.title=" Ribbons | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Custom UI" breadcrumbItem="Ribbons" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header className="align-items-center">
                                <h4 className="card-title mb-0">Round Shape</h4>
                            </Card.Header>

                            <Card.Body>
                                <Row className="g-3">
                                    <p className="text-muted">Use <code>round-shape</code> class to show round-shaped ribbon.</p>
                                    <Col xxl={4}>
                                        <Card className="ribbon-box border shadow-none mb-lg-0">
                                            <Card.Body>
                                                <div className="ribbon ribbon-primary round-shape">Primary</div>
                                                <h5 className="fs-14 text-end">Rounded Ribbon</h5>

                                                <div className="ribbon-content mt-4 text-muted">
                                                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xxl={4}>
                                        <Card className="ribbon-box border shadow-none mb-lg-0">
                                            <Card.Body>
                                                <div className="ribbon ribbon-success round-shape">Success</div>
                                                <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                                                <div className="ribbon-content mt-4 text-muted">
                                                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xxl={4}>
                                        <Card className="ribbon-box border shadow-none right mb-lg-0">
                                            <Card.Body>
                                                <div className="ribbon ribbon-info round-shape">Info</div>
                                                <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
                                                <div className="ribbon-content mt-4 text-muted">
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
                                    <RoundedRibbonExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default RoundShape;