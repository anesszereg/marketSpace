import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ColorExample } from './UiPlaceholderCode';

const Color = () => {
  return (
    <React.Fragment>
        <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Color</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>bg-</code> class with the below-mentioned color variation to set a custom color.</p>
                                    <Row className="g-2">
                                        <div className="col-12">
                                            <span className="placeholder w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-primary w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-secondary w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-success w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-danger w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-warning w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-info w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-light w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-dark w-100"></span>
                                        </div>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <ColorExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
    </React.Fragment>
  )
}

export default Color