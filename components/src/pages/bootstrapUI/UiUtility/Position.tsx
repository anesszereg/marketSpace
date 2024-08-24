import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { PositionExample } from './UiUtilityCode'

const Position = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Position</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use below mentioned classes to arrange elements easily with the edge positioning utilities.The format is &#123;property&#125;-&#123;position&#125;.</p>
                            <div>
                                <Row>
                                    <Col xl={4} sm={6}>
                                        <div>
                                            <h5 className="fs-13">Arrange elements</h5>

                                            <div className="position-relative p-5 bg-light m-3 border rounded" style={{ height: "180px" }}>
                                                <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-50 start-50 avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={4} sm={6}>
                                        <div className="mt-4 mt-sm-0">
                                            <h5 className="fs-13 mb-4">Center elements</h5>

                                            <div className="position-relative m-3 bg-light border rounded" style={{ height: "180px" }}>
                                                <div className="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"></div>

                                                <div className="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"></div>

                                                <div className="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"></div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xl={4} sm={6}>
                                        <div className="mt-4 mt-sm-0">
                                            <h5 className="fs-13">Center elements</h5>

                                            <div className="position-relative m-3 bg-light border rounded" style={{ height: "180px" }}>
                                                <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
                                                <div className="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>

                                                <div className="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"></div>

                                                <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
                                                <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>

                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "250px" }}>
                                <PositionExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Position;