import React, { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";

import avatar2 from "../../../assets/images/users/avatar-2.jpg"
import ListViewTable from './listViewTable';

const SellersListView = () => {

    document.title = "List View - Sellers | Toner eCommerce + Admin React Template";

    const [modal_AddSellerModals, setmodal_AddSellerModals] = useState<boolean>(false);
    function tog_AddSellerModals() {
        setmodal_AddSellerModals(!modal_AddSellerModals);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="List View" pageTitle="Sellers" />
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
                                    <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={559.25} duration={3} decimals={2} suffix="k" />
                                    </h4>
                                    <p className="mb-0 fw-medium text-uppercase fs-14">Total Sellers</p>
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
                                    <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={559.25} duration={3} decimals={2} suffix="k" />
                                    </h4>
                                    <p className="mb-0 fw-medium text-uppercase fs-14">Wholesalers</p>
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
                                    <h4 className="fs-22 fw-semibold mb-3">
                                        <CountUp start={0} end={559.25} duration={3} decimals={2} suffix="k" />
                                    </h4>
                                    <p className="mb-0 fw-medium text-uppercase fs-14">Retail Seller</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} md={6}>
                            <Card className="bg-light border-0">
                                <Card.Body className="p-3">
                                    <div className="p-3 bg-white rounded">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="flex-shrink-0">
                                                <img src={avatar2} alt="" className="avatar-sm rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <Link to="#!"><h6 className="fs-16"><span className="text-success">#1</span> Amanda Harvey</h6></Link>
                                                <p className="text-muted mb-0">To reach if you need to sell 200+ orders.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row id="sellersList">
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-3">
                                        <Col lg={3}>
                                            <div className="search-box">
                                                <input type="text" className="form-control search" placeholder="Search..." />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </Col>
                                        <Col className="col-lg-auto">
                                            <select className="form-select" id="idStatus" name="choices-single-default">
                                                <option defaultValue="All">Status</option>
                                                <option value="All">All</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </Col>
                                        <Col className="col-lg-auto">
                                            <select className="form-select" data-choices data-choices-search-false name="choices-single-default">
                                                <option defaultValue="all">All</option>
                                                <option value="Today">Today</option>
                                                <option value="Yesterday">Yesterday</option>
                                                <option value="Last 7 Days">Last 7 Days</option>
                                                <option value="Last 30 Days">Last 30 Days</option>
                                                <option value="This Month">This Month</option>
                                                <option value="Last Month">Last Month</option>
                                            </select>
                                        </Col>
                                        <Col className="col-lg-auto ms-auto">
                                            <div className="hstack gap-2">
                                                <Button variant='primary' className="add-btn" onClick={() => tog_AddSellerModals()}>Add Seller</Button>
                                                <Dropdown>
                                                    <Dropdown.Toggle className="btn-icon btn btn-soft-dark arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ph-dots-three-outline"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as="ul">
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Modal className="fade" show={modal_AddSellerModals} onHide={() => { tog_AddSellerModals(); }} centered>
                                <Modal.Header className="px-4 pt-4" closeButton>
                                    <h5 className="modal-title" id="exampleModalLabel">Add Seller</h5>
                                </Modal.Header>
                                <Form className="tablelist-form">
                                    <Modal.Body className="p-4">
                                        <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                        <input type="hidden" id="id-field" />

                                        <div className="mb-3">
                                            <Form.Label htmlFor="seller-name-field">Seller Name</Form.Label>
                                            <Form.Control type="text" id="seller-name-field" placeholder="Enter Seller Name" required />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="item-stock-field">Item Stock</Form.Label>
                                            <Form.Control type="text" id="item-stock-field" placeholder="Enter Item Stock" required />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="balance-field">Balance</Form.Label>
                                            <Form.Control type="text" id="balance-field" placeholder="Enter Balance" required />
                                        </div>

                                        <div className="mb-3">
                                            <Form.Label htmlFor="email-field">Seller Email</Form.Label>
                                            <Form.Control type="email" id="email-field" placeholder="Enter Email" required />
                                        </div>

                                        <div className="mb-3">
                                            <Form.Label htmlFor="phone-field">Phone</Form.Label>
                                            <Form.Control type="text" id="phone-field" placeholder="Enter Phone" required />
                                        </div>

                                        <div className="mb-3">
                                            <Form.Label htmlFor="date-field">Create Date</Form.Label>
                                            <Flatpickr
                                                className="form-control flatpickr-input"
                                                placeholder='Select Date-time'
                                                options={{
                                                    dateFormat: "d M, Y",
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="account-status-field" className="form-label">Account Status</label>
                                            <select className="form-select" required id="account-status-field">
                                                <option defaultValue="">Select account Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </Modal.Body>
                                    <div className="modal-footer">
                                        <div className="hstack gap-2 justify-content-end">
                                            <Button className="btn-ghost-danger" onClick={() => { tog_AddSellerModals(); }}>Close</Button>
                                            <Button variant='success' id="add-btn">Add Seller</Button>
                                        </div>
                                    </div>
                                </Form>
                            </Modal>

                            <Card>
                                <Card.Body>
                                    <div className="table-responsive table-card mb-1">
                                        {/* <table className="table align-middle table-nowrap" id="customerTable"> */}
                                        <ListViewTable />
                                        {/* </table> */}
                                        <div className="noresult" style={{ display: "none" }}>
                                            <div className="text-center py-4">
                                                <div className="avatar-md mx-auto mb-4">
                                                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                                                        <i className="bi bi-search"></i>
                                                    </div>
                                                </div>
                                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                                <p className="text-muted mb-0">We've searched more than 150+ seller We did not find any seller for you search.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SellersListView;