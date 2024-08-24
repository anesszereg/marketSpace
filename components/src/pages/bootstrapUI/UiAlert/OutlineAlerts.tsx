import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';
import {OutlineAlertsExample} from './UiAlertCode';

const OutlineAlerts = () => {

    const favouriteBtn = (ele: any) => {
        
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Outline Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-outline</code> class to set an alert with outline.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Outline Alert</h6>
                            <Alert variant="primary" className="alert-dismissible alert-outline fade show">
                                <strong> Hi! </strong> - Outline <b>primary alert</b> example
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Secondary Outline Alert</h6>
                            <Alert variant="secondary" className=" alert-dismissible alert-outline fade show">
                                <strong> How are you! </strong> - Outline <b>secondary alert</b> example
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Success Outline Alert</h6>
                            <Alert variant="success" className="alert-dismissible alert-outline fade show">
                                <strong> Yey! Everything worked! </strong> - Outline <b>success alert</b> example
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Danger Outline Alert</h6>
                            <Alert variant="danger" className="alert-dismissible alert-outline fade show mb-xl-0">
                                <strong> Something is very wrong! </strong> - Outline <b>danger alert</b> example
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Warning Outline Alert</h6>
                            <Alert variant="warning" className="alert-dismissible alert-outline fade show">
                                <strong> Uh oh, something went wrong! </strong> - Outline <b>warning alert</b> example
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Info Outline Alert</h6>
                            <Alert variant="info" className="alert-dismissible alert-outline fade show">
                                <strong>Don't forget' it !</strong> - Outline <b>info alert</b> example
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant="dark" className="alert-dismissible alert-outline fade show mb-0">
                                <strong>Did you know?</strong> - Outline <b>dark alert</b> example
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
                        <OutlineAlertsExample />
                    </pre>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default OutlineAlerts;