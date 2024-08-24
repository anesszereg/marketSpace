import React from 'react';
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { TooltipsExample } from './UiGeneralCode';

const Tooltips = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Tooltips</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Tooltip example are available with follwing options, Directions are mirrored when using Bootstrap in RTL.</p>
                            <div className="hstack flex-wrap gap-2">
                                <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> Tooltip on Top. </Tooltip>}>
                                    <Button variant="light">Tooltip on Top</Button>
                                </OverlayTrigger>

                                <OverlayTrigger placement='right' overlay={<Tooltip id="tooltip-right"> Tooltip on right. </Tooltip>}>
                                    <Button variant="light">Tooltip on right</Button>
                                </OverlayTrigger>

                                <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-bottom"> Tooltip on bottom. </Tooltip>}>
                                    <Button variant="light">Tooltip on bottom</Button>
                                </OverlayTrigger>

                                <OverlayTrigger placement='left' overlay={<Tooltip id="tooltip-left"> Tooltip on left. </Tooltip>}>
                                    <Button variant="light">Tooltip on left</Button>
                                </OverlayTrigger>

                                <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> <em>Tooltip</em> <u>with</u> <b>HTML</b> </Tooltip>}>
                                    <Button variant="primary">Tooltip with HTML</Button>
                                </OverlayTrigger>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "250px" }}>
                                <TooltipsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Tooltips