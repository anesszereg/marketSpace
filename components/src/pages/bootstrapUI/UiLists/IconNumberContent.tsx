import React from 'react';
import { Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import { ListIconExample, ListNumberedExample, CustomListExample } from './UiListsCode';

// import Images
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'


const IconNumberContent = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">List with Icon</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use icons to any list group item to show icons to list group items.</p>
                            <ListGroup>
                                <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send the billing agreement</ListGroup.Item>
                                <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send over all the documentation.</ListGroup.Item>
                                <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Meeting with daron to review the intake form</ListGroup.Item>
                                <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Check uikings theme and give customer support</ListGroup.Item>
                                <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Start making a presentation</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ListIconExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">List with Numbered</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>list-group-numbered</code> class (optionally use an <code>&lt;ol&gt;</code> element) to show numbered list group items. </p>
                            <ListGroup as='ol' className="list-group-numbered">
                                <ListGroup.Item>Send the billing agreement</ListGroup.Item>
                                <ListGroup.Item>Send over all the documentation.</ListGroup.Item>
                                <ListGroup.Item>Meeting with daron to review the intake form</ListGroup.Item>
                                <ListGroup.Item>Check uikings theme and give customer support</ListGroup.Item>
                                <ListGroup.Item>Start making a presentation</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "128px" }}>
                                <ListNumberedExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Content Lists</h4>
                        </Card.Header>
                        <Card.Body>
                            <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <a href="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</a>.</p>
                            <div data-simplebar style={{ maxHeight: "215px" }}>
                                <ListGroup as='ul' className="mb-1">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-danger-subtle text-danger rounded">
                                                            <i className="ri-netflix-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <h6 className="fs-14 mb-0">Netfilx</h6>
                                                        <small className="text-muted">2 min Ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="text-danger">-$25.50</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-success-subtle text-success rounded">
                                                            <i className="ri-spotify-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <h6 className="fs-14 mb-0">Spotify</h6>
                                                        <small className="text-muted">5 days Ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="text-success">$48.25</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar2} alt="" className="avatar-xs rounded" />
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <h6 className="fs-14 mb-0">Emily Slater</h6>
                                                        <small className="text-muted">8 days Ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="text-success">$354.90</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-secondary-subtle text-secondary rounded">
                                                            <i className="ri-paypal-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <h6 className="fs-14 mb-0">Paypal</h6>
                                                        <small className="text-muted">1 month Ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="text-danger">-$12.22</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar3} alt="" className="avatar-xs rounded" />
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <h6 className="fs-14 mb-0">Harvey Wells</h6>
                                                        <small className="text-muted">4 month Ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="text-success">-$459.78</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "128px" }}>
                                <CustomListExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default IconNumberContent;