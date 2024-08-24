import React, { useState, useMemo, useCallback } from 'react';
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import TableContainer from "Common/TableContainer";
import { ListView } from "Common/data";
import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';

const InvoiceListTable = () => {

    const [modal_AddUserModals, setmodal_AddUserModals] = useState<boolean>(false);
    const [isMultiDeleteButton, setIsMultiDeleteButton] = useState<boolean>(false)

    function tog_AddUserModals() {
        setmodal_AddUserModals(!modal_AddUserModals);
    }

    // Checked All
    const checkedAll = useCallback(() => {
        const checkall = document.getElementById("checkAll") as HTMLInputElement;
        const ele = document.querySelectorAll(".invoiceCheckBox");

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
        const ele = document.querySelectorAll(".invoiceCheckBox:checked");
        ele.length > 0 ? setIsMultiDeleteButton(true) : setIsMultiDeleteButton(false);
    }

    const columns = useMemo(
        () => [
            {
                Header: (<div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkAll" onClick={() => checkedAll()} />
                </div>),
                Cell: (cellProps: any) => {
                    return (<div className="form-check">
                        <input className="invoiceCheckBox form-check-input" type="checkbox" name="chk_child" value={cellProps.row.original.id} onChange={() => checkedbox()} />
                    </div>);
                },
                id: '#',
            },
            {
                Header: "ID",
                accessor: (cellProps: any) => {
                    return (
                        <Link to="#" className="fw-medium">{cellProps.id}</Link>
                    )
                },
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "User Name",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (<div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                            <img src={cellProps.img} alt="" className="avatar-xs rounded-circle user-profile-img" />
                        </div>
                        <div className="flex-grow-1 ms-2 user_name">{cellProps.customer}</div>
                    </div>)
                }
            },
            {
                Header: "Email",
                accessor: "email",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Country",
                accessor: "country",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Date",
                accessor: "date",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Amount",
                accessor: "amt",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Payment Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.paystatus) {
                        case "Paid":
                            return (<span className="badge badge-soft-success">{cellProps.paystatus}</span>)
                        case "Unpaid":
                            return (<span className="badge badge-soft-warning">{cellProps.paystatus}</span>)
                        case "Refund":
                            return (<span className="badge badge-soft-primary">{cellProps.paystatus}</span>)
                        default:
                            return (<span className="badge badge-soft-danger">{cellProps.paystatus}</span>)
                    }
                },
            },
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <React.Fragment>
                            <Dropdown>
                                <Dropdown.Toggle href="#!" className="btn btn-soft-secondary btn-sm dropdown btn-icon arrow-none">
                                    <i className="ri-more-fill align-middle"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                    <li>
                                        <Dropdown.Item href="/invoices-details">
                                            <i className="ri-eye-fill align-bottom me-2 text-muted" /> View
                                        </Dropdown.Item>
                                    </li>
                                    <li>
                                        <Dropdown.Item href="#" className="remove-list">
                                            <i className="ri-pencil-fill align-bottom me-2 text-muted" />Edit
                                        </Dropdown.Item>
                                    </li>
                                    <li>
                                        <Dropdown.Item href="#" className="remove-list">
                                            <i className="ri-pencil-fill align-bottom me-2 text-muted" />Download
                                        </Dropdown.Item>
                                    </li>
                                    <Dropdown.Divider />
                                    <li>
                                        <Dropdown.Item href="#" className="remove-list">
                                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />Delete
                                        </Dropdown.Item>
                                    </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </React.Fragment>
                    )
                },
            },
        ],
        [checkedAll]
    );

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card id="invoiceList">
                        <Card.Header className="border-0">
                            <div className="d-flex align-items-center">
                                <h5 className="card-title mb-0 flex-grow-1">Invoices</h5>
                                <div className="flex-shrink-0">
                                    <div className="d-flex gap-2 flex-wrap">
                                        {isMultiDeleteButton && <Button variant="danger" className="btn-icon"><i className="ri-delete-bin-2-line"></i></Button>}
                                        <Link to="/invoices-create" className="btn btn-primary" onClick={tog_AddUserModals}><i className="ri-add-line align-bottom me-1"></i> Create Invoice</Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="bg-soft-light border border-dashed border-start-0 border-end-0">
                            <form>
                                <Row className="g-3">
                                    <Col xxl={5} sm={12}>
                                        <div className="search-box">
                                            <input type="text" className="form-control search bg-light border-light" placeholder="Search for customer, email, country, status or something..." />
                                            <i className="ri-search-line search-icon"></i>
                                        </div>
                                    </Col>

                                    <Col xxl={3} sm={4}>
                                        {/* <input type="text" className="form-control bg-light border-light" id="datepicker-range" placeholder="Select date" /> */}
                                        <Flatpickr
                                            className="form-control bg-light border-light"
                                            placeholder='Select Date'
                                            options={{
                                                mode: "range",
                                                dateFormat: "d M, Y",
                                            }}
                                        />
                                    </Col>

                                    <Col xxl={3} sm={4}>
                                        <div className="input-light">
                                            <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                                <option value="">Status</option>
                                                <option defaultValue="all">All</option>
                                                <option value="Unpaid">Unpaid</option>
                                                <option value="Paid">Paid</option>
                                                <option value="Cancel">Cancel</option>
                                                <option value="Refund">Refund</option>
                                            </select>
                                        </div>
                                    </Col>


                                    <Col xxl={1} sm={4}>
                                        <Button variant="info" type="button" className="w-100" >
                                            <i className="ri-equalizer-fill me-1 align-bottom"></i> Filters
                                        </Button>
                                    </Col>

                                </Row>

                            </form>

                        </Card.Body>
                        <Card.Body>
                            <div>
                                <div className="table-responsive table-card">
                                    <TableContainer
                                        columns={(columns || [])}
                                        data={(ListView || [])}
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
                                            <p className="text-muted mb-0">We've searched more than 150+ invoices We did not find any invoices for you search.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal className="fade" show={modal_AddUserModals} onHide={() => { tog_AddUserModals(); }}>
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
                                    <Form.Control className="d-none" value="" id="users-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                </div>
                                <div className="avatar-lg p-1">
                                    <div className="avatar-title bg-light rounded-circle">
                                        {/* <img src="../assets/images/users/user-dummy-img.jpg" id="users-img-field" className="avatar-md rounded-circle object-cover" /> */}
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
                            <select className="form-control" required id="account-status-field">
                                <option value="">Account Status</option>
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
        </React.Fragment >
    );
};

export default InvoiceListTable;