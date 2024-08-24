import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';
import { RoundedLabelIconAlertsExample } from './UiAlertCode';

const RoundedLabelIconAlerts = () => {

    const favouriteBtn = (ele: any) => {
        
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Rounded Label Icon Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-label-icon rounded-label</code> class to set an alert with a rounded label icon.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary" className="alert-dismissible alert-label-icon rounded-label fade show">
                                <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> -
                                Rounded label alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Secondary Alert</h6>
                            <Alert variant="secondary" className="alert-dismissible alert-label-icon rounded-label fade show">
                                <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong>
                                - Rounded
                                label alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Success Alert</h6>
                            <Alert variant="success" className="alert-dismissible alert-label-icon rounded-label fade show">
                                <i className="ri-notification-off-line label-icon"></i><strong>Success</strong>
                                - Rounded
                                label alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className="alert-dismissible alert-label-icon rounded-label fade show mb-xl-0">
                                <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong>
                                - Rounded
                                label alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>

                        <div className="col-xl-6">
                            <h6>Warning Alert</h6>
                            <Alert variant="warning" className="alert-dismissible alert-label-icon rounded-label fade show">
                                <i className="ri-alert-line label-icon"></i><strong>Warning</strong> - Rounded
                                label alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Info Alert</h6>
                            <Alert variant="info" className="alert-dismissible alert-label-icon rounded-label fade show">
                                <i className="ri-airplay-line label-icon"></i><strong>Info</strong> -
                                Rounded label
                                alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Light Alert</h6>
                            <Alert variant="light" className="alert-dismissible alert-label-icon rounded-label fade show">
                                <i className="ri-mail-line label-icon"></i><strong>Light</strong> -
                                Rounded label
                                alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant="dark" className="alert-dismissible alert-label-icon rounded-label fade show mb-0">
                                <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> -
                                Rounded label
                                alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </div>
                    </Row>
                </Card.Body>

                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                </Card.Body>
                <Card.Body>
                    <pre className="language-markup" style={{ height: "310px" }}>
                        <RoundedLabelIconAlertsExample />
                    </pre>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default RoundedLabelIconAlerts;