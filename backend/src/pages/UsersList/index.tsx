import React, { useState, useMemo, useCallback } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import TableContainer from "Common/TableContainer";
import { userList } from "Common/data";
import Flatpickr from "react-flatpickr";
import dummyImg from "../../assets/images/users/user-dummy-img.jpg"
import { Link } from 'react-router-dom';

const UsersList = () => {
    document.title = "Users List | Toner eCommerce + Admin React Template";
    const [modal_AddUserModals, setmodal_AddUserModals] = useState<boolean>(false);
    const [isMultiDeleteButton, setIsMultiDeleteButton] = useState<boolean>(false)
    function tog_AddUserModals() {
        setmodal_AddUserModals(!modal_AddUserModals);
    }

    // Checked All
    const checkedAll = useCallback(() => {
        const checkall = document.getElementById("checkAll") as HTMLInputElement;
        const ele = document.querySelectorAll(".userCheckBox");

        if (checkall.checked) {
            ele.forEach((ele: any) => {
                ele.checked = true;
            });
        } else {
            ele.forEach((ele: any) => {
                ele.checked = false;
            });
        }
        checkedbox();
    }, []);

    const checkedbox = () => {
        const ele = document.querySelectorAll(".userCheckBox:checked");
        ele.length > 0 ? setIsMultiDeleteButton(true) : setIsMultiDeleteButton(false);
    }

    const columns = useMemo(
        () => [
            {
                Header: (<div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkAll" onClick={() => checkedAll()} />
                </div>),
                Cell: (cellProps: any) => {
                    return (
                        <div className="form-check">
                            <input className="userCheckBox form-check-input" type="checkbox" name="chk_child" value={cellProps.row.original.id} onChange={() => checkedbox()} />
                        </div>
                    );
                },
                id: '#',
            },
            {
                Header: "User Name",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (<div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                            <img src={cellProps.user_img} alt="" className="avatar-xs rounded-circle user-profile-img" />
                        </div>
                        <div className="flex-grow-1 ms-2 user_name">{cellProps.user_name}</div>
                    </div>)
                }
            },
            {
                Header: "Email",
                accessor: "email_id",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Create Date",
                accessor: "date",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Account Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Active":
                            return (<span className="badge badge-soft-success"> {cellProps.status}</span>)
                        case "Inactive":
                            return (<span className="badge badge-soft-danger"> {cellProps.status}</span>)
                        default:
                            return (<span className="badge badge-soft-success"> {cellProps.status}</span>)
                    }
                },
            },
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <div className="d-flex gap-2">
                            <div className="edit">
                                <Button variant="ghost-info" size="sm" className="btn-ghost-info btn-icon edit-item-btn"><i className="ph-pencil-line"></i></Button>
                            </div>
                            <div className="remove">
                                <Button variant="ghost-danger" size="sm" className="btn-ghost-danger btn-icon remove-item-btn"><i className="ph-trash"></i></Button>
                            </div>
                        </div>
                    )
                },
            },
        ],
        [checkedAll]
    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Users List" pageTitle="Users List" />

                    <Row>
                        <Col xxl={3} md={6}>
                            <Card className="card-height-100 bg-warning-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1530&quot;)" fill="none">
                                            <path d="M209 112L130 191" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M324 10L149 185" strokeWidth="8" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M333 35L508 -140" strokeWidth="10" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M282 58L131 209" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M290 16L410 -104" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M216 186L328 74" strokeWidth="6" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M255 53L176 132" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M339 191L519 11" strokeWidth="8" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M95 151L185 61" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M249 16L342 -77" strokeWidth="6" stroke="url(#SvgjsLinearGradient1532)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M129 230L286 73" strokeWidth="10" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M80 216L3 293" strokeWidth="6" stroke="url(#SvgjsLinearGradient1531)" strokeLinecap="round" className="BottomLeft"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1530">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1531">
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1532">
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-warning-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="p-4 z-1 position-relative">
                                    <h4 className="fs-22 fw-semibold mb-3"><CountUp end={7845102} /> </h4>
                                    <p className="mb-0 fw-medium text-uppercase fs-14">Total Users</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} md={6}>
                            <Card className="card-height-100 bg-success-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1608&quot;)" fill="none">
                                            <path d="M390 87L269 208" strokeWidth="10" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M358 175L273 260" strokeWidth="8" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M319 84L189 214" strokeWidth="10" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M327 218L216 329" strokeWidth="8" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M126 188L8 306" strokeWidth="8" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M220 241L155 306" strokeWidth="10" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M361 92L427 26" strokeWidth="6" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M391 188L275 304" strokeWidth="8" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M178 74L248 4" strokeWidth="10" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M84 52L-56 192" strokeWidth="6" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M183 111L247 47" strokeWidth="10" stroke="url(#SvgjsLinearGradient1610)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M46 8L209 -155" strokeWidth="6" stroke="url(#SvgjsLinearGradient1609)" strokeLinecap="round" className="TopRight"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1608">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1609">
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1610">
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-success-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="p-4 z-1 position-relative">
                                    <h4 className="fs-22 fw-semibold mb-3"><CountUp end={559.25} decimals={2} suffix="k" /></h4>
                                    <p className="mb-0 fw-medium text-uppercase fs-14">Active Users</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} md={6}>
                            <Card className="card-height-100 bg-info-subtle border-0 overflow-hidden">
                                <div className="position-absolute end-0 start-0 top-0 z-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        width="400" height="250" preserveAspectRatio="none" viewBox="0 0 400 250">
                                        <g mask="url(&quot;#SvgjsMask1551&quot;)" fill="none">
                                            <path d="M306 65L446 -75" strokeWidth="8" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M399 2L315 86" strokeWidth="10" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M83 77L256 -96" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M281 212L460 33" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M257 62L76 243" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M305 123L214 214" strokeWidth="6" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M327 222L440 109" strokeWidth="6" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                            <path d="M287 109L362 34" strokeWidth="10" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M259 194L332 121" strokeWidth="8" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M376 186L240 322" strokeWidth="8" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M308 153L123 338" strokeWidth="6" stroke="url(#SvgjsLinearGradient1553)" strokeLinecap="round" className="TopRight"></path>
                                            <path d="M218 62L285 -5" strokeWidth="8" stroke="url(#SvgjsLinearGradient1552)" strokeLinecap="round" className="BottomLeft"></path>
                                        </g>
                                        <defs>
                                            <mask id="SvgjsMask1551">
                                                <rect width="400" height="250" fill="#ffffff"></rect>
                                            </mask>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1552">
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1553">
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0)" offset="0"></stop>
                                                <stop stopColor="rgba(var(--tb-info-rgb), 0.2)" offset="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <Card.Body className="p-4 z-1 position-relative">
                                    <h4 className="fs-22 fw-semibold mb-3"><CountUp end={559.25} decimals={2} suffix="k" /></h4>
                                    <p className="mb-0 fw-medium text-uppercase fs-14">Unactive Users</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} md={6}>
                            <Card className="bg-light border-0">
                                <Card.Body className="p-3">
                                    <div className="p-3 bg-white rounded">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-danger-subtle text-danger fs-4 rounded">
                                                        <i className="ph-gift"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <Link to="#" className="stretched-link"><h6 className="fs-17">Invite your friends to Toner</h6></Link>
                                                <p className="text-muted mb-0">Nor again is there anyone pursues</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row id="usersList">
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-lg-2 g-4">
                                        <Col lg={3}>
                                            <div className="search-box">
                                                <input type="text" className="form-control search" placeholder="Search for users..." />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>

                                        {isMultiDeleteButton && <Button variant="danger" className="btn-icon"><i className="ri-delete-bin-2-line"></i></Button>}

                                        <Col sm={3} className="col-lg-auto ms-auto">
                                            <Button onClick={() => tog_AddUserModals()} variant='primary' type="button" className="w-100 add-btn">
                                                Add User
                                            </Button>
                                        </Col>
                                        <Col sm={9} className="col-lg-auto">
                                            <select className="form-select" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                                <option value="all">All</option>
                                                <option value="Today">Today</option>
                                                <option value="Yesterday">Yesterday</option>
                                                <option value="Last 7 Days">Last 7 Days</option>
                                                <option value="Last 30 Days">Last 30 Days</option>
                                                <option defaultValue="This Month">This Month</option>
                                                <option value="Last Month">Last Month</option>
                                            </select>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <div className="table-responsive table-card mb-1">
                                        <TableContainer
                                            columns={(columns || [])}
                                            data={(userList || [])}
                                            // isGlobalFilter={false}
                                            iscustomPageSize={false}
                                            isBordered={false}
                                            customPageSize={10}
                                            className="custom-header-css table align-middle table-nowrap"
                                            tableClassName="table-centered align-middle table-nowrap mb-0"
                                            theadClassName="text-muted table-light"
                                            SearchPlaceholder='Search Products...'
                                        />
                                        <div className="noresult" style={{ display: "none" }}>
                                            <div className="text-center">
                                                {/* <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px"></lord-icon> */}
                                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                                <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Modal className="fade" show={modal_AddUserModals} onHide={() => { tog_AddUserModals(); }} centered>
                        <Modal.Header className="px-4 pt-4" closeButton>
                            <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                        </Modal.Header>
                        <Form className="tablelist-form">
                            <Modal.Body className="p-4">
                                <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                <input type="hidden" id="id-field" />

                                <div className="text-center">
                                    <div className="position-relative d-inline-block">
                                        <div className="position-absolute  bottom-0 end-0">
                                            <label htmlFor="customer-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">
                                                <div className="avatar-xs cursor-pointer">
                                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                                        <i className="ri-image-fill"></i>
                                                    </div>
                                                </div>
                                            </label>
                                            <Form.Control className="d-none" defaultValue="" id="users-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                        </div>
                                        <div className="avatar-lg p-1">
                                            <div className="avatar-title bg-light rounded-circle">
                                                <img src={dummyImg} alt="dummyImg" id="users-img-field" className="avatar-md rounded-circle object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <Form.Label htmlFor="user-name">User Name</Form.Label>
                                    <Form.Control type="text" id="user-name-field" placeholder="Enter Name" required />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="email-field">User Email</Form.Label>
                                    <Form.Control type="email" id="email-field" placeholder="Enter Email" required />
                                </div>

                                <div className="mb-3">
                                    <Form.Label htmlFor="date-field">Date</Form.Label>
                                    <Flatpickr
                                        className="form-control flatpickr-input"
                                        placeholder='Select Date'
                                        options={{
                                            mode: "range",
                                            dateFormat: "d M, Y",
                                        }}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="account-status" className="form-label">Account Status</label>
                                    <select className="form-select" required id="account-status-field">
                                        <option defaultValue="">Account Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">inactive</option>
                                    </select>
                                </div>
                            </Modal.Body>
                            <div className="modal-footer">
                                <div className="hstack gap-2 justify-content-end">
                                    <Button className="btn-ghost-danger" onClick={() => { tog_AddUserModals(); }}>Close</Button>
                                    <Button variant='success' id="add-btn">Add User</Button>
                                </div>
                            </div>
                        </Form>
                    </Modal>

                </Container >
            </div >
        </React.Fragment >
    );
};

export default UsersList;