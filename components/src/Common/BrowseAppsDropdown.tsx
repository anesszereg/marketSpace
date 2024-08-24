import React from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img13 from "assets/images/brands/img-13.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img4 from "assets/images/brands/img-4.png";

const BrowseAppsDropdown = () => {
    return (
        <React.Fragment>
            <Dropdown className="topbar-head-dropdown ms-1 header-item dropdown-hover-end">
                <Dropdown.Toggle id="browser-apps" type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle arrow-none">
                    <i className='bi bi-grid fs-18'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-lg p-0 dropdown-menu-end">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0 fw-semibold fs-15"> Browse by Apps </h6>
                            </Col>
                            <div className="col-auto">
                                <Link to="#" className="btn btn-sm btn-soft-info"> View All Apps
                                    <i className="ri-arrow-right-s-line align-middle"></i></Link>
                            </div>
                        </Row>
                    </div>

                    <div className="p-2">
                        <Row className="g-0">
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img2} alt="Github" />
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img3} alt="bitbucket"  />
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img13} alt="dribbble"  />
                                </Link>
                            </Col>
                        </Row>

                        <Row className="g-0">
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img5} alt="dropbox"  />
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img6} alt="mail_chimp"  />
                                </Link>
                            </Col>
                            <Col>
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={img4} alt="slack"  />
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Dropdown.Menu>
            </Dropdown>

        </React.Fragment>
    );
}

export default BrowseAppsDropdown;