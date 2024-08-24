import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AvatarGroupExample } from './UiImageCode';

// import Images
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'

const AvatarGroup = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Avatar Group</h4>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col lg={6}>
                                    <div className="mt-lg-0 mt-3">
                                        <p className="text-muted">Use <code>avatar-group</code> class to show avatar images with the group.</p>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
                                            </div>
                                            <div className="avatar-group-item">
                                                <Image src={avatar5} alt="" className="rounded-circle avatar-sm" />
                                            </div>
                                            <div className="avatar-group-item">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                        A
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="avatar-group-item">
                                                <Image src={avatar2} alt="" className="rounded-circle avatar-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mt-lg-0 mt-3">
                                        <p className="text-muted">Use <code>avatar-group</code> class with <code>data-bs-toggle="tooltip"</code> to show avatar group images with tooltip.</p>
                                        <div className="avatar-group">
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
                                                <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
                                            </Link>
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Frank Hook">
                                                <Image src={avatar3} alt="" className="rounded-circle avatar-sm" />
                                            </Link>
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                                        C
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="mORE">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle">
                                                        2+
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <AvatarGroupExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AvatarGroup