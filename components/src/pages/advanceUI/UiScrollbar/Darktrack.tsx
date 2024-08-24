import React from 'react'
import { Card, Col, Row, Badge } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';

const Darktrack = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={4} lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Dark Track</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-simplebar-track="dark"</code> attribute to set dark color simplebar track.</p>

                            <div className="mx-n3">
                                <SimpleBar autoHide={false} data-simplebar-track="dark" style={{ maxHeight: "220px" }}>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.1</Badge>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <p className="text-muted">12 Jul, 21</p>
                                                    </div>
                                                </div>

                                                <p className="text-muted mb-4">It will be as simple as in fact, It will seem like simplified</p>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <h5 className="fs-15 mb-0">Michael Lemire</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <div className="hstack gap-3">
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div className="dropdown">
                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-fill"></i>
                                                                </Link>

                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                                    <Link className="dropdown-item" to="#">Another action</Link>
                                                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.0</Badge>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <p className="text-muted">06 Jul, 21</p>
                                                    </div>
                                                </div>
                                                <p className="text-muted mb-4">Sed ut perspiciatis iste error sit</p>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <h5 className="fs-15 mb-0">Carl Lynch</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <div className="hstack gap-3">
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div className="dropdown">
                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-fill"></i>
                                                                </Link>

                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                                    <Link className="dropdown-item" to="#">Another action</Link>
                                                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="list-group-item">
                                            <div>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.2</Badge>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <p className="text-muted">26 Jun, 21</p>
                                                    </div>
                                                </div>
                                                <p className="text-muted mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <h5 className="fs-15 mb-0">Joyce White</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <div className="hstack gap-3">
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div className="dropdown">
                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-fill"></i>
                                                                </Link>

                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                                    <Link className="dropdown-item" to="#">Another action</Link>
                                                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="list-group-item">
                                            <div>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.1</Badge>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <p className="text-muted">24 Jun, 21</p>
                                                    </div>
                                                </div>
                                                <p className="text-muted mb-4">Ut enim ad minima veniam, quis nostrum ullam corporis suscipit consequatur nisi ut</p>
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <h5 className="fs-15 mb-0">Etta Smith</h5>
                                                    </div>

                                                    <div className="flex-shrink-0">
                                                        <div className="hstack gap-3">
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                <Link to="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                <Link to="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                            </div>
                                                            <div className="vr"></div>
                                                            <div className="dropdown">
                                                                <Link className="text-muted" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-fill"></i>
                                                                </Link>

                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link className="dropdown-item" to="#">Action</Link>
                                                                    <Link className="dropdown-item" to="#">Another action</Link>
                                                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Darktrack;