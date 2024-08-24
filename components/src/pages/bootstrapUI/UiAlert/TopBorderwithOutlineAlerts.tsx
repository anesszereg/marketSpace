import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';
import { TopBarAlertsExample } from './UiAlertCode';

const TopBorderwithOutlineAlerts = () => {

    const favouriteBtn = (ele: any) => {
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Top Border with Outline Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-top-border</code> class to set an alert with the top border and outline.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary" className="alert-top-border alert-dismissible fade show">
                                <i className="ri-user-smile-line me-3 align-middle fs-16 text-primary"></i><strong>Primary</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>


                            <h6>Secondary Alert</h6>
                            <Alert variant="secondary" className="alert-top-border alert-dismissible fade show">
                                <i className="ri-check-double-line me-3 align-middle fs-16 text-secondary"></i><strong>Secondary</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Success Alert</h6>
                            <Alert variant="success" className="alert-top-border alert-dismissible fade show">
                                <i className="ri-notification-off-line me-3 align-middle fs-16 text-success"></i><strong>Success</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className="alert-top-border alert-dismissible fade show mb-xl-0">
                                <i className="ri-error-warning-line me-3 align-middle fs-16 text-danger "></i><strong>Danger</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Warning Alert</h6>
                            <Alert variant="warning" className="alert-top-border alert-dismissible fade show">
                                <i className="ri-alert-line me-3 align-middle fs-16 text-warning"></i><strong>Warning</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Info Alert</h6>
                            <Alert variant="info" className="alert-top-border alert-dismissible fade show">
                                <i className="ri-airplay-line me-3 align-middle fs-16 text-info"></i><strong>Info</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Light Alert</h6>
                            <Alert variant="light" className="alert-top-border alert-dismissible fade show">
                                <i className="ri-mail-line me-3 align-middle fs-16 text-dark"></i><strong>Light</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant="dark" className="alert-top-border alert-dismissible fade show mb-0">
                                <i className="ri-refresh-line me-3 align-middle fs-16 text-dark"></i><strong>Dark</strong>
                                - Top border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>
                    </Row>
                </Card.Body>

                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                </Card.Body>
                <Card.Body>
                    <pre className="language-markup" style={{ height: "310px" }}>
                        <TopBarAlertsExample />
                    </pre>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default TopBorderwithOutlineAlerts