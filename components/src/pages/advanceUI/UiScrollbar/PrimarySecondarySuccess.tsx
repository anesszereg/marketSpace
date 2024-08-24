import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';

// import Images
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";

const PrimarySecondarySuccess = () => {
    return (
        <React.Fragment>
            <Row className="mt-2">
                <Col lg={12}>
                    <div className="justify-content-between d-flex align-items-center mb-3">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Simplebar Track Color</h5>
                    </div>
                    <Row >
                        <Col xl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Primary Track</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>data-simplebar-track="primary"</code> attribute to set primary color simplebar track.</p>

                                    <div className="mx-n3">
                                        <SimpleBar autoHide={false} data-simplebar-track="primary" style={{ maxHeight: "275px" }}>
                                            <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs me-3">
                                                        <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                            <i className="ri-checkbox-circle-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow-1 text-muted">
                                                        <p className="m-0">Your <span className="fw-bold text-dark">Elite</span> author Graphic Optimization <span className="text-secondary">reward</span> is ready!</p>

                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <div className="fs-12 text-muted">
                                                            <i className="mdi mdi-clock-outline"></i> 30 min ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#!" className="text-reset notification-item d-block dropdown-item active">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs me-3">
                                                        <Image src={avatar2} className="rounded-circle img-fluid" alt="user-pic" />
                                                    </div>
                                                    <div className="flex-grow-1 text-muted">
                                                        <h6 className="mb-1 fs-15">Angela Bernier</h6>
                                                        <p className="mb-0">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                                                    </div>

                                                    <div className="flex-shrink-0 ms-2">
                                                        <div className="fs-12 text-muted">
                                                            <i className="mdi mdi-clock-outline"></i> 01 hr ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs me-3">
                                                        <span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                                            <i className="ri-message-2-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow-1 text-muted">
                                                        <p className="m-0">You have received <span className="fw-bold text-success">20</span> new messages in the conversation</p>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <div className="fs-12 text-muted">
                                                            <i className="mdi mdi-clock-outline"></i> 02 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs me-3">
                                                        <Image src={avatar8} className="rounded-circle img-fluid" alt="user-pic" />
                                                    </div>
                                                    <div className="flex-grow-1 text-muted">
                                                        <h6 className="mb-1 fs-15">Maureen Gibson</h6>
                                                        <p className="mb-0">We talked about a project on linkedin.</p>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <div className="fs-12 text-muted">
                                                            <i className="mdi mdi-clock-outline"></i> 02 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#!" className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 avatar-xs me-3">
                                                        <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                            <i className="ri-checkbox-circle-fill"></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow-1 text-muted">
                                                        <p className="m-0">Your <span className="fw-bold text-dark">Elite</span> author Graphic Optimization <span className="text-secondary">reward</span> is ready!</p>

                                                    </div>
                                                    <div className="flex-shrink-0 ms-2">
                                                        <div className="fs-12 text-muted">
                                                            <i className="mdi mdi-clock-outline"></i> 30 min ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="text-center my-2">
                                                <Link to="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </Link>
                                            </div>
                                        </SimpleBar>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Secondary Track</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>data-simplebar-track="secondary"</code> attribute to set secondary color simplebar track.</p>

                                    <div className="mx-n3">
                                        <SimpleBar autoHide={false} data-simplebar-track="secondary"  style={{ maxHeight: "275px" }}>
                                            <div className="list-group list-group-flush">
                                                <Link to="#" className="list-group-item text-muted py-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-shrink-0 align-self-center me-3">
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-light text-primary">
                                                                    M
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Michael Johnston</h5>
                                                            <p className="text-truncate mb-0">New updates for ABC Theme</p>
                                                        </div>
                                                        <div className="fs-12">06 mins</div>
                                                    </div>
                                                </Link>
                                                <Link to="#" className="list-group-item text-muted py-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-shrink-0 align-self-center me-3">
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-light text-primary">
                                                                    D
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Darren James</h5>
                                                            <p className="text-truncate mb-0">Bug Report - abc theme</p>
                                                        </div>
                                                        <div className="fs-12">12 mins</div>
                                                    </div>
                                                </Link>
                                                <Link to="#" className="list-group-item text-muted py-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-shrink-0 align-self-center me-3">
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-light text-primary">
                                                                    P
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Patricia Shelton</h5>
                                                            <p className="text-truncate mb-0">Nice to meet you</p>
                                                        </div>
                                                        <div className="fs-12">28 mins</div>
                                                    </div>
                                                </Link>

                                                <Link to="#" className="list-group-item text-muted py-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-shrink-0 align-self-center me-3">
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-light text-primary">
                                                                    T
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Thomas McNeil</h5>
                                                            <p className="text-truncate mb-0">This theme is awesome!</p>
                                                        </div>
                                                        <div className="fs-12">02 hrs</div>
                                                    </div>
                                                </Link>

                                                <Link to="#" className="list-group-item text-muted py-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-shrink-0 align-self-center me-3">
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-light text-primary">
                                                                    C
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Carolyn Jones</h5>
                                                            <p className="text-truncate mb-0">I've finished it! See you so</p>
                                                        </div>
                                                        <div className="fs-12">03 hrs</div>
                                                    </div>
                                                </Link>
                                                <Link to="#" className="list-group-item text-muted py-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-shrink-0 align-self-center me-3">
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-light text-primary">
                                                                    M
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Michael Johnston</h5>
                                                            <p className="text-truncate mb-0">New updates for ABC Theme</p>
                                                        </div>
                                                        <div className="fs-12">03 hrs</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SimpleBar>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Success Track</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>data-simplebar-track="success"</code> attribute to set success color simplebar track.</p>

                                    <div className="mx-n3">
                                        <SimpleBar autoHide={false} data-simplebar-track="success"  style={{ maxHeight: "275px" }}>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <div>2019 - 21</div>
                                                        </div>
                                                        <div className="flex-shrink-0 mx-3">
                                                            <i className="ri-arrow-right-fill text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 text-muted overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Lead designer / Developer</h5>
                                                            <div className="text-truncate">Xyz Company</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <div>2017 - 19</div>
                                                        </div>
                                                        <div className="flex-shrink-0 mx-3">
                                                            <i className="ri-arrow-right-fill text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 text-muted overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Senior Graphic Designer</h5>
                                                            <div className="text-truncate">Abc Company</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <div>2016 - 17</div>
                                                        </div>
                                                        <div className="flex-shrink-0 mx-3">
                                                            <i className="ri-arrow-right-fill text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 text-muted overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Graphic Designer</h5>
                                                            <div className="text-truncate">Xyz Company</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <div>2017 - 16</div>
                                                        </div>
                                                        <div className="flex-shrink-0 mx-3">
                                                            <i className="ri-arrow-right-fill text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 text-muted overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Graphic Designer</h5>
                                                            <div className="text-truncate">Abc Company</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <div>2016 - 15</div>
                                                        </div>
                                                        <div className="flex-shrink-0 mx-3">
                                                            <i className="ri-arrow-right-fill text-muted"></i>
                                                        </div>
                                                        <div className="flex-grow-1 text-muted overflow-hidden">
                                                            <h5 className="text-truncate fs-15 mb-1">Graphic Designer</h5>
                                                            <div className="text-truncate">Xyz Company</div>
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
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default PrimarySecondarySuccess