import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Button, Card, Col, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { PopoversExample } from './UiGeneralCode';

const Popovers = () => {
    document.title=" General | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="General" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Popovers</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Popovers example are available with follwing options , Directions are mirrored when using Bootstrap in RTL.</p>
                                <div className="hstack flex-wrap gap-2">
                                    <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="popover-positioned-top"> <Popover.Header as="h3">"Popover top"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                        <Button variant="light">Popover on top</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Popover right"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                        <Button variant="light">Popover on right</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="popover-positioned-bottom"> <Popover.Header as="h3">"Popover bottom"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                        <Button variant="light">Popover on bottom</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="popover-positioned-left"> <Popover.Header as="h3">"Popover left"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                        <Button variant="light">Popover on left</Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Dismissible popover"</Popover.Header> <Popover.Body> And here's some amazing content. It's very engaging. Right?" </Popover.Body> </Popover>}>
                                        <Button variant="success">Dismissible popover</Button>
                                    </OverlayTrigger>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "250px" }}>
                                    <PopoversExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Popovers;