import React, { useState, useMemo } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import TableContainer from "Common/TableContainer";
import { shipments } from "Common/data";
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";

const Shipments = () => {

    document.title = "Shipments | Toner eCommerce + Admin React Template";

    const [modal_AddShippingModals, setmodal_AddShippingModals] = useState<boolean>(false);
    function tog_AddShippingModals() {
        setmodal_AddShippingModals(!modal_AddShippingModals);
    }

    const columns = useMemo(
        () => [
            {
                Header: "Order ID",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (<Link to="#" className="fw-medium link-primary">{cellProps.orderId}</Link>)
                },
            },
            {
                Header: "Shipment No",
                accessor: "shipment_no",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Customer",
                accessor: "customer_name",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Supplier",
                accessor: "supplier",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Location",
                accessor: "location",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Order Date",
                accessor: "order_date",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Arrival Date",
                accessor: "arrival_date",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Delivered":
                            return (<span className="badge badge-soft-success"> {cellProps.status}</span>)
                        case "Out Of Delivery":
                            return (<span className="badge badge-soft-danger"> {cellProps.status}</span>)
                        case "Pending":
                            return (<span className="badge badge-soft-warning"> {cellProps.status}</span>)
                        case "Pickups":
                            return (<span className="badge badge-soft-secondary"> {cellProps.status}</span>)
                        case "Shipping":
                            return (<span className="badge badge-soft-info"> {cellProps.status}</span>)
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
                        <ul className="hstack gap-2 list-unstyled mb-0">
                            <li>
                                <Link to="#" className="badge badge-soft-primary edit-item-btn">Edit</Link>
                            </li>
                            <li>
                                <Link to="#" className="badge badge-soft-danger remove-item-btn">Delete</Link>
                            </li>
                        </ul>
                    )
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Shipments" pageTitle="Shipping" />
                    <Card id="shipmentsList">
                        <Card.Header className="border-bottom-dashed">
                            <Row className="align-items-center g-3">
                                <Col xxl={3} sm={6}>
                                    <h6 className="card-title mb-0">Shipping</h6>
                                </Col>
                                <Col className="col-xxl-auto col-sm-auto ms-auto">
                                    <Button variant='success' onClick={() => tog_AddShippingModals()} className="add-btn"><i className="bi bi-plus-circle me-1 align-middle"></i> Add Shipping</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Header className="border-bottom-dashed">
                            <Row className="g-3">
                                <Col xxl={3} lg={6}>
                                    <div className="search-box">
                                        <input type="text" className="form-control search" placeholder="Search for order ID, shipment no, customer, order status or something..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col xxl={3} lg={6}>
                                    {/* <input type="text" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" id="demo-datepicker" placeholder="Select date" /> */}
                                    <Flatpickr
                                        className="form-control flatpickr-input"
                                        placeholder='Select Date'
                                        options={{
                                            mode: "range",
                                            dateFormat: "d M, Y",
                                        }}
                                    />
                                </Col>
                                <Col xxl={2} lg={6}>
                                    <select className="form-select" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                        <option value="">Status</option>
                                        <option value="Pickups">Pickups</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Shipping">Shipping</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Out Of Delivery">Out Of Delivery</option>
                                    </select>
                                </Col>
                                <Col xxl={2} lg={6}>
                                    <select className="form-select" data-choices data-choices-search-false name="choices-single-default">
                                        <option value="">Status</option>
                                        <option defaultValue="all">All</option>
                                        <option value="Today">Today</option>
                                        <option value="Yesterday">Yesterday</option>
                                        <option value="Last 7 Days">Last 7 Days</option>
                                        <option value="Last 30 Days">Last 30 Days</option>
                                        <option value="This Month">This Month</option>
                                        <option value="Last Month">Last Month</option>
                                    </select>
                                </Col>
                                <Col xxl={2} lg={6}>
                                    <Button variant="primary" type="button" className="w-100">Filters</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive table-card">
                                <TableContainer
                                    columns={(columns || [])}
                                    data={(shipments || [])}
                                    // isGlobalFilter={false}
                                    iscustomPageSize={false}
                                    isBordered={false}
                                    customPageSize={10}
                                    className="custom-header-css table align-middle table-nowrap"
                                    tableClassName="table-centered align-middle table-nowrap mb-0"
                                    theadClassName="text-muted table-light"
                                    SearchPlaceholder='Search Products...'
                                />
                            </div>
                            <div className="noresult" style={{ display: "none" }}>
                                <div className="text-center py-4">
                                    <div className="avatar-md mx-auto mb-4">
                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                                            <i className="bi bi-search"></i>
                                        </div>
                                    </div>
                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                    <p className="text-muted mb-0">We've searched more than 150+ shipment orders We did not find any shipment orders for you search.</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Modal className="fade zoomIn" size="lg" show={modal_AddShippingModals} onHide={() => { tog_AddShippingModals(); }} centered>
                        <Modal.Header className="px-4 pt-4" closeButton>
                            <h5 className="modal-title fs-18" id="exampleModalLabel">Create Shipping</h5>
                        </Modal.Header>
                        <Modal.Body className="p-4">
                            <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                            <Form className="tablelist-form">
                                <input type="hidden" id="id-field" />
                                <Row>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="customerName-field">Customer Name</Form.Label>
                                            <Form.Control type="text" id="customerName-field" placeholder="Enter customer name" required />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="supplierName-field">Supplier Name</Form.Label>
                                            <Form.Control type="text" id="supplierName-field" placeholder="Enter supplier name" required />
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="orderDate-field">Order Date</Form.Label>
                                            <Flatpickr
                                                className="form-control flatpickr-input"
                                                placeholder='Select Date'
                                                options={{
                                                    dateFormat: "d M, Y",
                                                }}
                                            />
                                            {/* <Form.Control type="text" id="orderDate-field" data-provider="flatpickr" data-date-format="d M, Y" placeholder="Select date" required /> */}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="arrivalDate-field">Arrival Date</Form.Label>
                                            <Flatpickr
                                                className="form-control flatpickr-input"
                                                placeholder='Select Date'
                                                options={{
                                                    dateFormat: "d M, Y",
                                                }}
                                            />
                                            {/* <Form.Control type="text" id="arrivalDate-field" data-provider="flatpickr" data-date-format="d M, Y" placeholder="Select date" required /> */}
                                        </div>
                                    </Col>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label htmlFor="locationSelect" className="form-label">Location</label>
                                            <select className="form-select" name="choices-single-default" id="locationSelect" required>
                                                <option value="">Location</option>
                                                <option value="Ascension Island">Ascension Island</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Europe">Europe</option>
                                                <option value="Finland">Finland</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="France">France</option>
                                                <option value="England">England</option>
                                                <option value="Scotland">Scotland</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="UA">UA</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Jersey">Jersey</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <label htmlFor="statusSelect" className="form-label">Status</label>
                                            <select className="form-select" name="choices-single-default" id="statusSelect" required>
                                                <option value="">Status</option>
                                                <option value="Pickups">Pickups</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Shipping">Shipping</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Out Of Delivery">Out Of Delivery</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="hstack gap-2 justify-content-end">
                                            <Button className="btn-ghost-danger" onClick={() => { tog_AddShippingModals(); }} data-bs-dismiss="modal"><i className="ri-close-line align-bottom me-1"></i> Close</Button>
                                            <Button variant='primary' id="add-btn">Add Shipping</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Shipments;