import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { DefaultButtonsExample } from './UiButtonCode';

const DefaultButtons = () => {
    document.title = " Buttons | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <Breadcrumb breadcrumb="Base UI" breadcrumbItem="Buttons" />
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Default Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use the<code> btn</code> class to show the default button style.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant='primary'>Primary</Button>
                                <Button variant='secondary'>Secondary</Button>
                                <Button variant='success'>Success</Button>
                                <Button variant='info'>Info</Button>
                                <Button variant='warning'>Warning</Button>
                                <Button variant='danger'>Danger</Button>
                                <Button variant='dark'>Dark</Button>
                                <Button variant='link'>Link</Button>
                                <Button variant='light'>Light</Button>
                            </div>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <DefaultButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DefaultButtons