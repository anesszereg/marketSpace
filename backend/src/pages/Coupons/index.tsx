import React, { useState, useMemo } from 'react';
import { Button, Card, Col, Container, Form, Modal, Offcanvas, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import TableContainer from "Common/TableContainer";
import { couponsList } from "Common/data";
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";

import offerbanner from "../../assets/images/ecommerce/offer-banner.jpg";

const Coupons = () => {

    document.title = "Coupons | Toner eCommerce + Admin React Template";

    const [showCoupons, setShowCoupons] = useState<boolean>(false);
    const [showCouponDetails, setShowCouponsDetails] = useState<any>({});

    const columns = useMemo(
        () => [
            {
                Header: "Discount",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <h5 className="mb-0 fs-16">{cellProps.discount}</h5>
                    )
                },
            },
            {
                Header: "Coupon Title",
                accessor: "couponTitle",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Code",
                accessor: "code",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Product Type",
                accessor: "productType",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Start Date",
                accessor: "startDate",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "End Date",
                accessor: "endDate",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Active":
                            return (<span className="badge badge-soft-success text-uppercase"> {cellProps.status}</span>)
                        case "Expired":
                            return (<span className="badge badge-soft-danger text-uppercase"> {cellProps.status}</span>)
                        default:
                            return (<span className="badge badge-soft-success text-uppercase"> {cellProps.status}</span>)
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
                                <Link to="#couponDetails" data-bs-toggle="offcanvas" className="badge badge-soft-dark view-item-btn" onClick={() => { setShowCouponsDetails(cellProps); setShowCoupons(!showCoupons) }}>View</Link>
                            </li>
                            <li>
                                <Link to="#showModal" className="badge badge-soft-primary edit-item-btn" data-bs-toggle="modal">Edit</Link>
                            </li>
                            <li>
                                <Link to="#deleteModal" data-bs-toggle="modal" className="badge badge-soft-danger remove-item-btn">Delete</Link>
                            </li>
                        </ul>
                    )
                },
            },
        ],[showCoupons]
    );

    const [modal_AddCouponsModals, setmodal_AddCouponsModals] = useState<boolean>(false);
    function tog_AddCouponsModals() {
        setmodal_AddCouponsModals(!modal_AddCouponsModals);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Coupons" pageTitle="Toner" />
                    <div id="couponsList">
                        <Row>
                            <Col xxl={12}>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col xxl={3} md={5}>
                                                <div className="search-box mb-3 mb-md-0">
                                                    <input type="text" className="form-control search" id="searchProductList" placeholder="Search by coupons code & name..." />
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </Col>
                                            <Col className="col-md-auto ms-auto">
                                                <Button variant='success' onClick={() => tog_AddCouponsModals()} className="add-btn"><i className="bi bi-plus-circle me-1 align-middle"></i>Add Coupon</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <Card.Body>
                                        <div className="table-responsive table-card">
                                            <TableContainer
                                                columns={(columns || [])}
                                                data={(couponsList || [])}
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
                    </div>

                    <Modal id="showModal" className="fade zoomIn" size="lg" show={modal_AddCouponsModals} onHide={() => { tog_AddCouponsModals(); }} centered>
                        <Modal.Header className="px-4 pt-4" closeButton>
                            <h5 className="modal-title fs-18" id="exampleModalLabel">Add Coupons</h5>
                        </Modal.Header>
                        <Modal.Body className="p-4">
                            <Form className="tablelist-form">
                                <Row>
                                    <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                    <input type="hidden" id="id-field" />                                
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="couponTitle">Coupon Title</Form.Label>
                                            <Form.Control type="text" id="couponTitle-field" placeholder="Coupon title" required/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="couponCode">Code</Form.Label>
                                            <Form.Control type="text" id="code-field" placeholder="Enter coupon code" required/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="ProductSelect">Product Type</Form.Label>
                                            <select className="form-select" name="categorySelect" id="productType-field">
                                                <option value="">Select Product</option>
                                                <option value="Headphone">Headphone</option>
                                                <option value="Watch">Watch</option>
                                                <option value="Furniture">Furniture</option>
                                                <option value="Clothing">Clothing</option>
                                                <option value="Footwear">Footwear</option>
                                                <option value="Lighting">Lighting</option>
                                                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                                                <option value="Books">Books</option>
                                                <option value="Other Accessories">Other Accessories</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="startDate">Start Date</Form.Label>
                                            {/* <Form.Control type="text" id="startdate-field" data-provider="flatpickr" data-date-format="d M, Y" placeholder="Select date" required/> */}
                                            <Flatpickr
                                                className="form-control flatpickr-input"
                                                placeholder='Select date'
                                                options={{
                                                    dateFormat: "d M, Y",
                                                }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="endDate">END Date</Form.Label>
                                            <Flatpickr
                                                className="form-control flatpickr-input"
                                                placeholder='Select date'
                                                options={{
                                                    dateFormat: "d M, Y",
                                                }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="amountPercentage">Amount/Percentage</Form.Label>
                                            <Form.Control type="text" id="discount-field" placeholder="Enter amount/percentage" required/>
                                        </div>
                                    </Col>                               
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="statusSelect">Status</Form.Label>
                                            <select className="form-select" name="choices-single-default" id="status-Field">
                                                <option value="">Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Expired">Expired</option>                                            
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg={12} className="modal-footer">
                                        <div className="hstack gap-2 justify-content-end">
                                            <Button className="btn-ghost-danger" onClick={() => { tog_AddCouponsModals(); }}><i className="ri-close-line align-bottom me-1"></i> Close</Button>
                                            <Button variant='primary' id="add-btn">Add Coupons</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Modal.Body>
                    </Modal>

                </Container>
            </div>

            <Offcanvas show={showCoupons} onHide={() => setShowCoupons(!showCoupons)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cyber Sale</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <img src={offerbanner} alt="" className="img-thumbnail" />
                    </div>
                    <div className="mt-3">
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <tbody><tr>
                                    <td><span className="text-muted">Use Code</span></td>
                                    <td><span className="fw-medium">{showCouponDetails.code}</span></td>
                                </tr>
                                    <tr>
                                        <td><span className="text-muted">Discount</span></td>
                                        <td><span className="fw-medium text-uppercase">{showCouponDetails.discount}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-muted">Start Date</span></td>
                                        <td><span className="fw-medium">{showCouponDetails.startDate}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-muted">END Date</span></td>
                                        <td><span className="fw-medium">{showCouponDetails.endDate}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-muted">Product Type</span></td>
                                        <td><span className="fw-medium">{showCouponDetails.productType}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-muted">Status</span></td>
                                        <td><span className={showCouponDetails.status === "Expired" ? "badge badge-soft-danger text-uppercase" : "badge badge-soft-success text-uppercase"}>{showCouponDetails.status}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </React.Fragment >
    );
};

export default Coupons;