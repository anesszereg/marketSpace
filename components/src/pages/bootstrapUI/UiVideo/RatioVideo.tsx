import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';
import { Ratio169Example, Ratio43Example, CustomRationExample, Ratio219Example, Ratio11Example } from './UiVideoCode';

const RatioVideo = () => {
    document.title=" Embed Video | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Embed Video" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Ratio Video 16:9</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Wrap any embed in<code>&lt;iframe&gt;</code> tag, in a parent element, use <code>ratio-16x9</code> class to set aspect ratio 16:9. </p>
                                <div>
                                    <div className="ratio ratio-16x9">
                                        <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video"></iframe>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup">
                                    <Ratio169Example />
                                </pre>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Ratio Video 4:3</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>ratio-4x3</code> class to set aspect ratio 4:3.</p>
                                <div className="ratio ratio-4x3">
                                    <iframe className="rounded" src="https://www.youtube.com/embed/PHcgN1GTjdU" title="YouTube video"></iframe>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup">
                                    <Ratio43Example />
                                </pre>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Custom Ratios</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>--tb-aspect-ratio: 50%</code> to style element to set aspect ratio 2:1.</p>
                                <div className="ratio" style={{ aspectRatio: "2" }}>
                                    <iframe className="rounded" src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video"></iframe>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup">
                                    <CustomRationExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Ratio Video 21:9</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>ratio-21x9</code> class to set aspect ratio 21:9.</p>
                                <div className="ratio ratio-21x9">
                                    <iframe className="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video"></iframe>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup">
                                    <Ratio219Example />
                                </pre>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Ratio Video 1:1</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>ratio-1x1</code> class to set aspect ratio 1:1.</p>
                                <div className="ratio ratio-1x1">
                                    <iframe className="rounded" src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video"></iframe>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup">
                                    <Ratio11Example />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default RatioVideo