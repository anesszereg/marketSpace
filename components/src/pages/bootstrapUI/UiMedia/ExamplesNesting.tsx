import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row, Image } from 'react-bootstrap';
import { DefultExample, NestingExample } from './UiMediaCode';


import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'

const ExamplesNesting = () => {
    document.title=" Media Object | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Media Object" />
                <Row>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Examples</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted mb-4">Use few flex utilities that allow even more flexibility and customization than before.</p>
                                <div>
                                    <div className="d-flex align-items-start text-muted mb-4">
                                        <div className="flex-shrink-0 me-3">
                                            <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                        </div>

                                        <div className="flex-grow-1">
                                            <h5 className="fs-14">Media heading</h5>
                                            This is some content from a media component. You can replace this with any content and adjust it as needed.
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start text-muted mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="fs-14">Media heading</h5>
                                            This is some content from a media component. You can replace this with any content and adjust it as needed.
                                        </div>
                                        <div className="flex-shrink-0 ms-3">
                                            <Image src={avatar3} className="avatar-sm rounded" alt="..." />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start text-muted">
                                        <div className="flex-shrink-0 me-3">
                                            <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="fs-14">Media heading</h5>
                                            This is some content from a media component. You can replace this with any content and adjust it as needed.
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "333px" }}>
                                    <DefultExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Nesting Example</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted mb-4">Media objects can be infinitely nested, though we suggest you stop at some point. Place nested <code>d-flex align-items-start</code> within the <code>flex-grow-1</code> of a parent media object.</p>
                                <div>
                                    <div className="d-flex align-items-start text-muted mb-4">
                                        <div className="flex-shrink-0 me-3">
                                            <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="fs-14">Media heading</h5>
                                            This is some content from a media component. You can replace this with any content and adjust it as needed.
                                            <div className="d-flex align-items-start text-muted mt-3">
                                                <div className="flex-shrink-0 me-3">
                                                    <Image src={avatar3} className="avatar-sm rounded" alt="..." />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14">Media heading</h5>
                                                    This is some content from a media component. You can replace this with any content and adjust it as needed.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start text-muted">
                                        <div className="flex-shrink-0 me-3">
                                            <Image src={avatar4} className="avatar-sm rounded" alt="..." />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="fs-14">Media heading</h5>
                                            This is some content from a media component. You can replace this with any content and adjust it as needed.
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "310px" }}>
                                    <NestingExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ExamplesNesting;