import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';
import { AdditionalContentCodeExample } from './UiAlertCode';

const AdditionalContentAlerts = () => {

    const favouriteBtn = (ele: any) => {
        
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Additional Content Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-additional</code> class and Use the <code>alert-</code> class to HTML elements like headings, paragraphs, dividers etc.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary" className="alert-dismissible alert-additional fade show">
                                <div className="alert-body">
                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <i className="ri-error-warning-line fs-16 align-middle"></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="alert-heading">Well done !</h5>
                                            <p className="mb-0">Aww yeah, you successfully read this important alert message. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="alert-content">
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                </div>
                            </Alert>

                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className="alert-dismissible alert-additional fade show mb-xl-0">
                                <div className="alert-body">
                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <i className="ri-alert-line fs-16 align-middle"></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="alert-heading">Something is very wrong!</h5>
                                            <p className="mb-0">Change a few things up and try submitting again.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="alert-content">
                                    <p className="mb-0">Whenever you need to, be sure to use margin
                                        utilities to keep things nice and tidy.</p>
                                </div>
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Success Alert</h6>
                            <Alert variant="success" className="alert-dismissible alert-additional fade show">
                                <div className="alert-body">
                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <i className="ri-notification-off-line fs-16 align-middle"></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="alert-heading">Yey! Everything worked!</h5>
                                            <p className="mb-0">This alert needs your attention, but it's not super important.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="alert-content">
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                </div>
                            </Alert>

                            <h6>Warning Alert</h6>
                            <Alert variant="warning" className="alert-dismissible alert-additional fade show mb-0">
                                <div className="alert-body">
                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <i className="ri-alert-line fs-16 align-middle"></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="alert-heading">Uh oh, something went wrong!</h5>
                                            <p className="mb-0">Better check yourself, you're not looking too good.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="alert-content">
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                </div>
                            </Alert>
                        </Col>
                    </Row>
                </Card.Body>

                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                </Card.Body>
                <Card.Body>
                    <pre className="language-markup" style={{ height: "310px" }}>
                        <AdditionalContentCodeExample />
                    </pre>
                </Card.Body>
            </Card>

        </React.Fragment>
    )
}

export default AdditionalContentAlerts