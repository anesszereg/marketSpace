import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap';
import { ImgSizesExample } from './UiImageCode';

// import Images
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'
import avatar8 from 'assets/images/users/avatar-8.jpg'
import avatar10 from 'assets/images/users/avatar-10.jpg'

const ImageSizes = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Image Sizes</h4>
                        </Card.Header>

                        <Card.Body>

                            <p className="text-muted mb-4">Use <code>avatar-xxs</code>, <code>avatar-xs</code>, <code>avatar-sm</code>, <code>avatar-md</code>, <code>avatar-lg</code>, <code>avatar-xl</code> class for different image sizes.</p>
                            <Row>
                                <Col md={12}>
                                    <Row className="g-3">
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar2} alt="" className="rounded avatar-xxs" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-xxs</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar10} alt="" className="rounded avatar-xs" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-xs</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar3} alt="" className="rounded avatar-sm" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-sm</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar4} alt="" className="rounded avatar-md" />
                                                <p className="mt-2  mb-lg-0"><code>avatar-md</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar5} alt="" className="rounded avatar-lg" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-lg</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar8} alt="" className="rounded avatar-xl" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-xl</code></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={12}>
                                    <Row className="g-3 mt-5">
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar2} alt="" className="rounded-circle avatar-xxs" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-xxs</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar10} alt="" className="rounded-circle avatar-xs" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-xs</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar3} alt="" className="rounded-circle avatar-sm" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-sm</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar4} alt="" className="rounded-circle avatar-md" />
                                                <p className="mt-2  mb-lg-0"><code>avatar-md</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar5} alt="" className="rounded-circle avatar-lg" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-lg</code></p>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div>
                                                <Image src={avatar8} alt="" className="rounded-circle avatar-xl" />
                                                <p className="mt-2 mb-lg-0"><code>avatar-xl</code></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <div className="card-body">
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <ImgSizesExample />
                            </pre>
                        </div>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default ImageSizes