import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardTextAlignment = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Card Text Alignment</h5>
                    </div>
                    <Row>
                        <Col xxl={4} lg={6}>
                            <Card className="card-body">
                                <div className="avatar-sm mb-3">
                                    <div className="avatar-title bg-success-subtle text-success fs-17 rounded">
                                        <i className="ri-smartphone-line"></i>
                                    </div>
                                </div>
                                <h4 className="card-title">Text Application</h4>
                                <p className="card-text text-muted">Send a link to apply on mobile device. Appropriately communicate one-to-one technology.</p>
                                <Link to="#" className="btn btn-success">Apply Now</Link>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card className="card-body text-center">
                                <div className="avatar-sm mx-auto mb-3">
                                    <div className="avatar-title bg-success-subtle text-success fs-17 rounded">
                                        <i className="ri-add-line"></i>
                                    </div>
                                </div>
                                <h4 className="card-title">Add New Application</h4>
                                <p className="card-text text-muted">Send a link to apply on mobile device. Appropriately communicate one-to-one technology.</p>
                                <Link to="#" className="btn btn-success">Add New</Link>
                            </Card>
                        </Col>
                        <Col xxl={4} lg={6}>
                            <Card className="card-body text-end">
                                <div className="avatar-sm ms-auto mb-3">
                                    <div className="avatar-title bg-success-subtle text-success fs-17 rounded">
                                        <i className="ri-gift-fill"></i>
                                    </div>
                                </div>
                                <h4 className="card-title">Text Application</h4>
                                <p className="card-text text-muted">Send a link to apply on mobile device. Appropriately communicate one-to-one technology.</p>
                                <Link to="#" className="btn btn-success">Add New</Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Row>
        </React.Fragment>
    )
}

export default CardTextAlignment;