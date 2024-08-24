import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FilledRibbonsExample } from './UiRibbons';

const FilledRibbons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Filled Ribbons</h4>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-3">
                                <p className="text-muted">Use <code>ribbon-fill</code> class to show fill-shaped ribbon.</p>
                                <Col xxl={4}>
                                    <Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                        <Card.Body>
                                            <div className="ribbon ribbon-primary">New</div>
                                            <h5 className="fs-14 text-end">Fill Ribbon</h5>
                                            <div className="ribbon-content mt-3 text-muted">
                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                        <Card.Body>
                                            <div className="ribbon ribbon-success">Sale</div>
                                            <h5 className="fs-14 text-end">Fill Ribbon</h5>
                                            <div className="ribbon-content mt-3 text-muted">
                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xxl={4}>
                                    <Card className="ribbon-box border ribbon-fill shadow-none right mb-lg-0">
                                        <Card.Body>
                                            <div className="ribbon ribbon-info">New</div>
                                            <h5 className="fs-14 text-start">Fill Ribbon Right</h5>
                                            <div className="ribbon-content mt-3 text-muted">
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
                                <FilledRibbonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FilledRibbons;