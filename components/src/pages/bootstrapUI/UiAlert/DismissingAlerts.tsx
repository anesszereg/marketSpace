import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';
import {DismissingExample} from './UiAlertCode';

const DismissingAlerts = () => {

    const favouriteBtn = (ele: any) => {
        
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Dismissing Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-dismissible</code> class to add dismissing button to the alert.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary" className="fade alert-dismissible show">
                                <strong> Hi! </strong> A simple <b>Dismissible primary Alert </b> — check it out!
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Secondary Alert</h6>
                            <Alert variant="secondary" className="fade alert-dismissible show">
                                <strong> How are you! </strong> A simple <b>Dismissible secondary alert</b>
                                —check it out!
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Success Alert</h6>
                            <Alert variant="success" className="fade alert-dismissible show">
                                <strong>Right Way !</strong> A simple <b>Dismissible success alert</b> —check
                                it out!
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className="fade alert-dismissible show">
                                <strong> Something is very wrong! </strong> A simple <b>Dismissible danger alert</b> —check
                                it out!
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Warning Alert</h6>
                            <Alert variant='warning' className="fade alert-dismissible show">
                                <strong>Welcome Back!</strong> A simple <b>Dismissible warning alert</b> —check it out!
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Info Alert</h6>
                            <Alert variant='info' className="fade alert-dismissible show">
                                <strong>Don't forget' it !</strong> A simple <b>Dismissible info alert</b>
                                —check it out!
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Light Alert</h6>
                            <Alert variant='light' className="fade alert-dismissible show">
                                <strong>Mind Your Step!</strong> A simple <b>Dismissible light alert</b>
                                —check it out!
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant='dark' className="fade alert-dismissible show">
                                <strong>Did you know?</strong> A simple <b>Dismissible dark alert</b>
                                —check it out!
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
                        <DismissingExample />
                    </pre>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default DismissingAlerts;