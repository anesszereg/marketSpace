import React from 'react';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//SimpleBar
import SimpleBar from "simplebar-react";

//import images
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";

const NotificationDropdown = () => {
    return (
        <React.Fragment>
            <Dropdown className="topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
                <Dropdown.Toggle id="notification" type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle arrow-none">
                    <i className='bi bi-bell fs-18'></i>
                    <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger"><span className="notification-badge">4</span><span className="visually-hidden">unread messages</span></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">

                    <div className="dropdown-head rounded-top">
                        <div className="p-3 border-bottom border-bottom-dashed">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="mb-0 fs-16 fw-semibold"> Notifications <span className="badge badge-soft-danger fs-13 notification-badge"> 4</span></h6>
                                    <p className="fs-14 text-muted mt-1 mb-0">You have <span className="fw-semibold notification-unread">3</span> unread messages</p>
                                </Col>
                                <Dropdown className="col-auto">
                                    <Dropdown.Toggle as="a" href="/" data-bs-toggle="dropdown" className="link-secondary fs-14 bg-transparent border-0 arrow-none">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <li><Dropdown.Item href="/#">All Clear</Dropdown.Item></li>
                                        <li><Dropdown.Item href="/#">Mark all as read</Dropdown.Item></li>
                                        <li><Dropdown.Item href="/#">Archive All</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>
                        </div>

                    </div>

                    <div className="py-2 ps-2" id="notificationItemsTabContent">
                        <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                            <h6 className="text-overflow text-muted fs-13 my-2 text-uppercase notification-title">New</h6>
                            <div className="text-reset notification-item d-block dropdown-item position-relative unread-message">
                                <div className="d-flex">
                                    <div className="avatar-xs me-3 flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                            <i className="bx bx-badge-check"></i>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="mt-0 fs-14 mb-2 lh-base">Your <b>Elite</b> author Graphic
                                                Optimization <span className="text-secondary">reward</span> is ready!
                                            </h6>
                                        </Link>
                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                            <span><i className="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                                        </p>
                                    </div>
                                    <div className="px-2 fs-15">
                                        <div className="form-check notification-check">
                                            <input className="form-check-input" type="checkbox" value="" id="all-notification-check01" />
                                            <label className="form-check-label" htmlFor="all-notification-check01"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-reset notification-item d-block dropdown-item position-relative unread-message">
                                <div className="d-flex">
                                    <div className="position-relative me-3 flex-shrink-0">
                                        <img src={avatar2} className="rounded-circle avatar-xs" alt="user-pic" />
                                        <span className="active-badge position-absolute start-100 translate-middle p-1 bg-success rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="mt-0 mb-1 fs-14 fw-semibold">Angela Bernier</h6>
                                        </Link>
                                        <div className="fs-13 text-muted">
                                            <p className="mb-1">Answered to your comment on the cash flow forecast&apos;s graph 🔔.</p>
                                        </div>
                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                            <span><i className="mdi mdi-clock-outline"></i> 48 min ago</span>
                                        </p>
                                    </div>
                                    <div className="px-2 fs-15">
                                        <div className="form-check notification-check">
                                            <input className="form-check-input" type="checkbox" value="" id="all-notification-check02" />
                                            <label className="form-check-label" htmlFor="all-notification-check02"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-reset notification-item d-block dropdown-item position-relative unread-message">
                                <div className="d-flex">
                                    <div className="avatar-xs me-3 flex-shrink-0">
                                        <span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                            <i className='bx bx-message-square-dots'></i>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="mt-0 mb-2 fs-14 lh-base">You have received <b className="text-success">20</b> new messages in the conversation
                                            </h6>
                                        </Link>
                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                            <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                                        </p>
                                    </div>
                                    <div className="px-2 fs-15">
                                        <div className="form-check notification-check">
                                            <input className="form-check-input" type="checkbox" value="" id="all-notification-check03" />
                                            <label className="form-check-label" htmlFor="all-notification-check03"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-overflow text-muted fs-13 my-2 text-uppercase notification-title">Read Before</h6>

                            <div className="text-reset notification-item d-block dropdown-item position-relative">
                                <div className="d-flex">

                                    <div className="position-relative me-3 flex-shrink-0">
                                        <img src={avatar8} className="rounded-circle avatar-xs" alt="user-pic" />
                                        <span className="active-badge position-absolute start-100 translate-middle p-1 bg-warning rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </div>

                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="mt-0 mb-1 fs-14 fw-semibold">Maureen Gibson</h6>
                                        </Link>
                                        <div className="fs-13 text-muted">
                                            <p className="mb-1">We talked about a project on linkedin.</p>
                                        </div>
                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                            <span><i className="mdi mdi-clock-outline"></i> 4 hrs ago</span>
                                        </p>
                                    </div>
                                    <div className="px-2 fs-15">
                                        <div className="form-check notification-check">
                                            <input className="form-check-input" type="checkbox" value="" id="all-notification-check04" />
                                            <label className="form-check-label" htmlFor="all-notification-check04"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                        <div className="notification-actions" id="notification-actions">
                            <div className="d-flex text-muted justify-content-center align-items-center">
                                Select <div id="select-content" className="text-body fw-semibold px-1">0</div> Result <Button variant='link-danger' className="btn-link p-0 ms-2" data-bs-toggle="modal" data-bs-target="#removeNotificationModal">Remove</Button>
                            </div>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    );
}

export default NotificationDropdown;