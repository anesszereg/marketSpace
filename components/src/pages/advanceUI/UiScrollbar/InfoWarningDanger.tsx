import React from 'react'
import { Card, Col, Row, Image, Badge, Button } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';

// import Images

import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";

const InfoWarningDanger = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Info Track</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-simplebar-track="info"</code> attribute to set info color simplebar track.</p>

                            <div className="mx-n3">
                                <SimpleBar autoHide={false} data-simplebar-track="info" style={{ maxHeight: "238px" }} className="px-3">
                                    <ol className="list-group list-group-flush list-group-numbered">
                                        <li className="list-group-item d-flex align-items-center">
                                            A list item
                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            A second list item
                                            <Badge bg="danger" className="ms-auto ">Refund</Badge>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            A third list item
                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            A fourth list item
                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            A Fifth list item
                                            <Badge bg="warning" className="ms-auto">Inprogress</Badge>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            A Sixth list item
                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                        </li>
                                    </ol>
                                </SimpleBar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Warning Track</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-simplebar-track="warning"</code> attribute to set warning color simplebar track.</p>

                            <div className="mx-n3">
                                <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} data-simplebar-track="warning" className="px-3">
                                    <div className="d-flex align-items-center py-3">
                                        <div className="avatar-xs flex-shrink-0 me-3">
                                            <Image src={avatar3} alt="" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h5 className="fs-15 mb-1">Esther James</h5>
                                                <p className="text-muted mb-0">Frontend Developer</p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center py-3">
                                        <div className="avatar-xs flex-shrink-0 me-3">
                                            <Image src={avatar4} alt="" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h5 className="fs-15 mb-1">Jacqueline Steve</h5>
                                                <p className="text-muted mb-0">UI/UX Designer</p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center py-3">
                                        <div className="avatar-xs flex-shrink-0 me-3">
                                            <Image src={avatar5} alt="" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h5 className="fs-15 mb-1">George Whalen</h5>
                                                <p className="text-muted mb-0">Backend Developer</p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center py-3">
                                        <div className="avatar-xs flex-shrink-0 me-3">
                                            <Image src={avatar3} alt="" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div>
                                                <h5 className="fs-15 mb-1">Carl Lynch</h5>
                                                <p className="text-muted mb-0">Frontend Developer</p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Danger Track</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-simplebar-track="danger"</code> attribute to set danger color simplebar track.</p>

                            <div className="mx-n3">
                                <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="px-3" data-simplebar-track="danger">
                                    <Link to="#" className="d-flex align-items-center py-2">
                                        <div className="flex-shrink-0 avatar-xs me-3">
                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                <i className="ri-hashtag"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="fs-15 mb-1">ABC Project Customization</h5>
                                            <p className="text-muted mb-0">04 Members</p>
                                        </div>
                                        <div className="flex-shrink-0 align-self-start ms-2">
                                            <div className="badge badge-soft-warning fs-11">Inprogress</div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="d-flex align-items-center py-2">
                                        <div className="flex-shrink-0 avatar-xs me-3">
                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                <i className="ri-hashtag"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="fs-15 mb-1">Client - John</h5>
                                            <p className="text-muted mb-0">02 Members</p>
                                        </div>
                                        <div className="flex-shrink-0 align-self-start ms-2">
                                            <div className="badge badge-soft-warning fs-11">Inprogress</div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="d-flex align-items-center py-2">
                                        <div className="flex-shrink-0 avatar-xs me-3">
                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                <i className="ri-hashtag"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="fs-15 mb-1">Brand logo Design</h5>
                                            <p className="text-muted mb-0">01 Members</p>
                                        </div>
                                        <div className="flex-shrink-0 align-self-start ms-2">
                                            <div className="badge badge-soft-success fs-10">Completed</div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="d-flex align-items-center py-2">
                                        <div className="flex-shrink-0 avatar-xs me-3">
                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                <i className="ri-hashtag"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="fs-15 mb-1">Project update</h5>
                                            <p className="text-muted mb-0">03 Members</p>
                                        </div>
                                        <div className="flex-shrink-0 align-self-start ms-2">
                                            <div className="badge badge-soft-warning fs-11">Inprogress</div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="d-flex align-items-center py-2">
                                        <div className="flex-shrink-0 avatar-xs me-3">
                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                <i className="ri-hashtag"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="fs-15 mb-1">Chat App</h5>
                                            <p className="text-muted mb-0">05 Members</p>
                                        </div>
                                        <div className="flex-shrink-0 align-self-start ms-2">
                                            <div className="badge badge-soft-success fs-10">Completed</div>
                                        </div>
                                    </Link>
                                </SimpleBar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default InfoWarningDanger