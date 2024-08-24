import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { ProgressBar, Row, Col, Card } from 'react-bootstrap';
import { DefaultProgressExample, BackgroundColorExample } from './UiProgressCode';

const DefaultBgcolor = () => {
    document.title=" Progress | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Progress" />
                <Row>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Default Progress</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>progress</code> class to show default progress.</p>

                                <div>
                                    <div className="mb-4">
                                        <ProgressBar now={0} />
                                    </div>
                                    <div className="mb-4">
                                        <ProgressBar now={25} />
                                    </div>
                                    <div className="mb-4">
                                        <ProgressBar now={50} />
                                    </div>
                                    <div className="mb-4">
                                        <ProgressBar now={75} />
                                    </div>
                                    <div>
                                        <ProgressBar now={100} />
                                    </div>
                                </div>

                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "240px" }}>
                                    <DefaultProgressExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Progress with background color</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>bg-</code> class to progress bar class with the below-mentioned color variation to set the background color progress bar.</p>
                                <div>
                                    <div className="mb-4">
                                        <ProgressBar variant='primary' now={15} />
                                    </div>
                                    <div className="mb-4">
                                        <ProgressBar variant='success' now={25} />
                                    </div>
                                    <div className="mb-4">
                                        <ProgressBar variant='info' now={50} />
                                    </div>
                                    <div className="mb-4">
                                        <ProgressBar variant='warning' now={75} />
                                    </div>
                                    <div>
                                        <ProgressBar variant='danger' now={100} />
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "240px" }}>
                                    <BackgroundColorExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultBgcolor