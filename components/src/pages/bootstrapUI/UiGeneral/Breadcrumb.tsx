import React from 'react';
import { Card, Col, Row, Breadcrumb } from 'react-bootstrap';
import { BreadcrumbExample } from './UiGeneralCode';

const Breadcrumbs = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Breadcrumb</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Indicate the current page’s location within a navigational hierarchy</p>
                            <div>
                                <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
                                    <Breadcrumb.Item href="#" className='breadcrumb-general'>Home</Breadcrumb.Item>
                                </Breadcrumb>

                                <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }} >
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item className='breadcrumb-general'> Library </Breadcrumb.Item>
                                </Breadcrumb>
                                <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
                                    <Breadcrumb.Item className='breadcrumb-general'> General </Breadcrumb.Item>
                                </Breadcrumb>

                                <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
                                    <Breadcrumb.Item href="#"><i className="ri-home-5-fill" /></Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
                                    <Breadcrumb.Item className='breadcrumb-general'> General </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "250px" }}>
                                <BreadcrumbExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Breadcrumbs;