import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';
import { SolidAlertsExample } from './UiAlertCode';

const SolidAlerts = () => {

    const favouriteBtn = (ele: any) => {
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Solid Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-solid</code> class to set an alert with solid style.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Solid Alert</h6>
                            <Alert variant="primary" className="alert-dismissible alert-solid fade show">
                                <strong>Hi!</strong> - Solid <b>primary alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Secondary Solid Alert</h6>
                            <Alert variant="secondary" className="alert-dismissible alert-solid fade show">
                                <strong>How are you!</strong> - Solid <b>secondary alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Success Solid Alert</h6>
                            <Alert variant="success" className="alert-dismissible alert-solid fade show">
                                <strong>Yey! Everything worked! </strong> - Solid <b>success alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Danger Solid Alert</h6>
                            <Alert variant="danger" className="alert-dismissible alert-solid fade show mb-xl-0">
                                <strong>Something is very wrong!</strong> - Solid <b>danger alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Warning Solid Alert</h6>
                            <Alert variant="warning" className="alert-dismissible alert-solid fade show">
                                <strong>Uh oh, something went wrong!</strong> - Solid <b>warning alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Info Solid Alert</h6>
                            <Alert variant="info" className="alert-dismissible alert-solid fade show">
                                <strong>Don't forget' it !</strong> - Solid <b>info alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>


                            <h6>Light Solid Alert</h6>
                            <Alert variant="light" className="alert-dismissible alert-solid fade show">
                                <strong>Mind Your Step!</strong> - Solid <b>secondary alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Dark Solid Alert</h6>
                            <Alert variant="dark" className="alert-dismissible alert-solid fade show mb-0">
                                <strong>Did you know?</strong> - Solid <b>dark alert</b> example
                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>
                    </Row>
                </Card.Body>

                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                    <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                </Card.Body>
                <Card.Body>
                    <pre className="language-markup" style={{ height: "310px" }}>
                        <SolidAlertsExample />
                    </pre>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default SolidAlerts