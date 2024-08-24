import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ListBadgeExample, ListCheckboxsExample, ListRadiosExample } from './UiListsCode';

const BadgesCheckboxRadio = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">List with Badges</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use badges to any list group item to show unread counts, activity, and more with the help of some <Link to="https://getbootstrap.com/docs/5.1/utilities/">utilities</Link>.</p>
                            <ListGroup as='ul'>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Send the billing agreement <span className="badge bg-success">High</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Send over all the documentation
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Meeting with daron to review the intake form <span className="badge bg-danger">Low</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Check uikings theme and give customer support <span className="badge bg-secondary">Medium</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Start making a presentation <span className="badge bg-success">High</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "222px" }}>
                                <ListBadgeExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">List with Checkboxs</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use Bootstrap’s checkboxes within list group items and customize as needed. </p>
                            <ListGroup>
                                <ListGroup.Item>
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Declined Payment
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <input className="form-check-input me-1" type="checkbox" value="" defaultChecked />
                                    Delivery Error
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <input className="form-check-input me-1" type="checkbox" value="" defaultChecked />
                                    Wrong Amount
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Wrong Address
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Wrong UX/UI Solution
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <ListCheckboxsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">List with Radios</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use Bootstrap’s radios within list group items and customize as needed. </p>
                            <ListGroup>
                                <ListGroup.Item>
                                    <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                    Declined Payment
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" defaultChecked />
                                    Delivery Error
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                    Wrong Amount
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                    Wrong Address
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                    Wrong UX/UI Solution
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "240px" }}>
                                <ListRadiosExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BadgesCheckboxRadio