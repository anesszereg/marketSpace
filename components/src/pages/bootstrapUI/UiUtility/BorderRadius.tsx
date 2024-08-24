import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';

// import Images
import avatar1 from 'assets/images/users/avatar-1.jpg'
import avatar2 from 'assets/images/users/avatar-2.jpg'

import img2 from 'assets/images/small/img-2.jpg'

const BorderRadius = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Border Radius</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use below-mentioned class to an element to easily round its corners.</p>
                            <div className="live-preview">
                                <div>
                                    <div>
                                        <div className="d-flex align-items-start flex-wrap gap-4">
                                            <div className="text-center">
                                                <Image src={avatar2} className="avatar-md rounded" alt="rounded" />
                                                <p><code>.rounded</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar2} className="avatar-md rounded-top" alt="rounded-top" />
                                                <p><code>.rounded-top</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar2} className="avatar-md rounded-end" alt="rounded-end" />
                                                <p><code>.rounded-end</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar2} className="avatar-md rounded-bottom" alt="rounded-bottom" />
                                                <p><code>.rounded-bottom</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar2} className="avatar-md rounded-start" alt="rounded-start" />
                                                <p><code>.rounded-start</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar2} className="avatar-md rounded-circle" alt="rounded-circle" />
                                                <p><code>.rounded-circle</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar2} className="avatar-md rounded-top" alt="rounded-top" />
                                                <p><code>.rounded-top</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={img2} className="avatar-md w-auto rounded-pill" alt="rounded-pill" />
                                                <p><code>.rounded-pill</code></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fs-13 mb-3">Sizes</h5>
                                        <div className="d-flex align-items-start flex-wrap gap-4">
                                            <div className="text-center">
                                                <Image src={avatar1} className="avatar-md rounded-0" alt="rounded-0" />
                                                <p><code>.rounded-0</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar1} className="avatar-md rounded-1" alt="rounded-1" />
                                                <p><code>.rounded-1</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar1} className="avatar-md rounded-2" alt="rounded-2" />
                                                <p><code>.rounded-2</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar1} className="avatar-md rounded-3" alt="rounded-3" />
                                                <p><code>.rounded-3</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar1} className="avatar-md rounded-4" alt="rounded-4" />
                                                <p><code>.rounded-4</code></p>
                                            </div>
                                            <div className="text-center">
                                                <Image src={avatar1} className="avatar-md rounded-5" alt="rounded-5" />
                                                <p><code>.rounded-5</code></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BorderRadius;