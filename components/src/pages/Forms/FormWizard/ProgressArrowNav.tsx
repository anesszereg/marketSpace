import React, { useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Form, Nav, ProgressBar, Row, Tab, Image } from 'react-bootstrap';

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import dummyUser from "assets/images/users/user-dummy-img.jpg";

const ProgressArrowNav = () => {
    document.title=" Wizard | Toner eCommerce + React Admin Template";


    const [activeTab, setactiveTab] = useState<number>(0);
    const [activeArrowTab, setactiveArrowTab] = useState(1);

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Forms" breadcrumbItem="Forms Wizard" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Progress Nav Steps</h4>
                            </Card.Header>
                            <Card.Body className="form-steps">
                                <Form action="#">
                                    <Tab.Container activeKey={activeTab}>
                                        <div className="text-center pt-3 pb-4 mb-1">
                                            <h5>Signup Your Account</h5>
                                        </div>
                                        <div id="custom-progress-bar" className="progress-nav mb-4">
                                            <div>
                                                <ProgressBar now={activeTab * 50} style={{ height: "1px" }}></ProgressBar>
                                            </div>

                                            <Nav as="ul" variant="pills" className="progress-bar-tab custom-nav">
                                                <Nav.Item as="li">
                                                    <Nav.Link as="button" eventKey="0" onClick={() => setactiveTab(0)} className="rounded-pill">1</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link as="button" eventKey="1" onClick={() => setactiveTab(1)} className="rounded-pill">2</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link as="button" eventKey="2" onClick={() => setactiveTab(2)} className="rounded-pill">3</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>

                                        <Tab.Content>
                                            <Tab.Pane eventKey="0" id="pills-gen-info" role="tabpanel" aria-labelledby="pills-gen-info-tab">
                                                <div>
                                                    <div className="mb-4">
                                                        <div>
                                                            <h5 className="mb-1">General Information</h5>
                                                            <p className="text-muted">Fill all Information as below</p>
                                                        </div>
                                                    </div>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="gen-info-email-input">Email</label>
                                                                <input type="text" className="form-control" id="gen-info-email-input" placeholder="Enter Email" />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="gen-info-username-input">User Name</label>
                                                                <input type="text" className="form-control" id="gen-info-username-input" placeholder="Enter User Name" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="gen-info-password-input">Password</label>
                                                        <input type="password" className="form-control" id="gen-info-password-input" placeholder="Enter Password" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-3 mt-4">
                                                    <button type="button" className="btn btn-success btn-label right ms-auto nexttab nexttab" onClick={() => setactiveTab(1)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to more info</button>
                                                </div>
                                            </Tab.Pane>


                                            <Tab.Pane eventKey="1" id="pills-info-desc" role="tabpanel" aria-labelledby="pills-info-desc-tab">
                                                <div>
                                                    <div className="text-center">
                                                        <div className="profile-user position-relative d-inline-block mx-auto mb-2">
                                                            <Image src={dummyUser} className="rounded-circle avatar-lg img-thumbnail user-profile-image" alt="user-profile-image" />
                                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                                <input id="profile-img-file-input" type="file" className="profile-img-file-input" accept="image/png, image/jpeg" />
                                                                <label htmlFor="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                                        <i className="ri-camera-fill"></i>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <h5 className="fs-14">Add Image</h5>

                                                    </div>
                                                    <div>
                                                        <label className="form-label" htmlFor="gen-info-description-input">Description</label>
                                                        <textarea className="form-control" placeholder="Enter Description" id="gen-info-description-input" rows={2}></textarea>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-3 mt-4">
                                                    <button type="button" className="btn btn-link text-decoration-none btn-label previestab" onClick={() => setactiveTab(0)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to General</button>
                                                    <button type="button" className="btn btn-success btn-label right ms-auto nexttab nexttab" onClick={() => setactiveTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit</button>
                                                </div>
                                            </Tab.Pane>


                                            <Tab.Pane eventKey="2" id="pills-success" role="tabpanel" aria-labelledby="pills-success-tab">
                                                <div>
                                                    <div className="text-center">

                                                        <div className="mb-4">
                                                            {/* <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style="width:120px;height:120px"></lord-icon> */}
                                                        </div>
                                                        <h5>Well Done !</h5>
                                                        <p className="text-muted">You have Successfully Signed Up</p>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                        </Tab.Content>
                                    </Tab.Container>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Arrow Nav Steps</h4>
                            </Card.Header>
                            <Card.Body className="form-steps">
                                <Form action="#">
                                    <Tab.Container activeKey={activeArrowTab}>
                                        <div className="text-center pt-3 pb-4 mb-1">
                                            <Image src={logoDark} alt="" height="22" />
                                        </div>
                                        <div className="step-arrow-nav mb-4">

                                            <Nav as="ul" variant="pills" className="custom-nav nav-justified">
                                                <Nav.Item as="li">
                                                    <Nav.Link as="button" eventKey="1" onClick={() => setactiveArrowTab(1)}>General</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link as="button" eventKey="2" onClick={() => setactiveArrowTab(2)}>Description</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link as="button" eventKey="3" onClick={() => setactiveArrowTab(3)}>Finish</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>

                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <div>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="steparrow-gen-info-email-input">Email</label>
                                                                <input type="text" className="form-control" id="steparrow-gen-info-email-input" placeholder="Enter Email" />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="steparrow-gen-info-username-input">User Name</label>
                                                                <input type="text" className="form-control" id="steparrow-gen-info-username-input" placeholder="Enter User Name" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="steparrow-gen-info-password-input">Password</label>
                                                        <input type="password" className="form-control" id="steparrow-gen-info-password-input" placeholder="Enter Password" />
                                                    </div>
                                                    <div>
                                                        <label className="form-label" htmlFor="steparrow-gen-info-confirm-password-input">Confirm Password</label>
                                                        <input type="password" className="form-control" id="steparrow-gen-info-confirm-password-input" placeholder="Enter Confirm Password" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-3 mt-4">
                                                    <button type="button" className="btn btn-success btn-label right ms-auto nexttab nexttab" onClick={() => setactiveArrowTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to more info</button>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="2">
                                                <div>
                                                    <div className="mb-3">
                                                        <label htmlFor="formFile" className="form-label">Upload Image</label>
                                                        <input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                    <div>
                                                        <label className="form-label" htmlFor="des-info-description-input">Description</label>
                                                        <textarea className="form-control" placeholder="Enter Description" id="des-info-description-input" rows={3}></textarea>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-3 mt-4">
                                                    <button type="button" className="btn btn-light btn-label previestab" onClick={() => setactiveArrowTab(1)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to General</button>
                                                    <button type="button" className="btn btn-success btn-label right ms-auto nexttab nexttab" onClick={() => setactiveArrowTab(3)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit</button>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <div className="text-center">

                                                    <div className="avatar-md mt-5 mb-4 mx-auto">
                                                        <div className="avatar-title bg-light text-success display-4 rounded-circle">
                                                            <i className="ri-checkbox-circle-fill"></i>
                                                        </div>
                                                    </div>
                                                    <h5>Well Done !</h5>
                                                    <p className="text-muted">You have Successfully Signed Up</p>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Form>
                            </Card.Body>

                        </Card>

                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ProgressArrowNav