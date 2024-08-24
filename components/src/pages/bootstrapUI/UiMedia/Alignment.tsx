import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import { MediaExample } from './UiMediaCode';

// import Images
import avatar2 from 'assets/images/users/avatar-2.jpg';
import avatar6 from 'assets/images/users/avatar-6.jpg';
import avatar8 from 'assets/images/users/avatar-8.jpg';

const Alignment = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Media Alignment</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted mb-4">The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>
                            <div>
                                <div className="d-flex align-items-start text-muted mb-4">
                                    <div className="flex-shrink-0 me-3">
                                        <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                    </div>

                                    <div className="flex-grow-1">
                                        <h5 className="fs-14">Top Aligned media</h5>
                                        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center text-muted mb-4">
                                    <div className="flex-shrink-0 me-3">
                                        <Image src={avatar6} className="avatar-sm rounded" alt="..." />
                                    </div>

                                    <div className="flex-grow-1">
                                        <h5 className="fs-14">Center Aligned media</h5>
                                        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end text-muted">
                                    <div className="flex-shrink-0 me-3">
                                        <Image src={avatar8} className="avatar-sm rounded" alt="..." />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fs-14">Bottom Aligned media</h5>
                                        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <MediaExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Alignment;