import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { ShadowsExample } from './UiUtilityCode'

const Shadows = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Shadows</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our <code>box-shadow</code> utility classes. Includes support for <code>.shadow-none</code> and three default sizes (which have associated variables to match).</p>
                            <Row className="gy-3">
                                <Col md={6}>
                                    <div className="shadow-none p-3 bg-light rounded">No shadow</div>
                                </Col>
                                <Col md={6}>
                                    <div className="shadow-sm p-3 bg-light rounded">Small shadow</div>
                                </Col>
                                <Col md={6}>
                                    <div className="shadow p-3 bg-light rounded">Regular shadow</div>
                                </Col>
                                <Col md={6}>
                                    <div className="shadow-lg p-3 bg-light rounded">Larger shadow</div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ShadowsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Shadows