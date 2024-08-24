import React from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from './world.svg.json';
import CustomDropdownToggle from 'Common/CustomDropdownToggle';

//import images
import us from "../../assets/images/flags/us.svg";
import gl from "../../assets/images/flags/gl.svg";
import br from "../../assets/images/flags/br.svg";
import au from "../../assets/images/flags/au.svg";
import ru from "../../assets/images/flags/ru.svg";
import ca from "../../assets/images/flags/ca.svg";

const TopSalesLocation = () => {
    return (
        <React.Fragment>
             <Col xxl={3} lg={6} className="order-0 order-xxl-last">
                <Card className="card-height-100">
                    <Card.Header>
                        <div className="d-flex align-items-center">
                            <h6 className="card-title flex-grow-1 mb-0">Top Sales Location</h6>
                            <div className="flex-shrink-0">
                                <Dropdown className="card-header-dropdown">
                                    <Dropdown.Toggle as={CustomDropdownToggle} href="#"  className="text-reset dropdown-btn">
                                        <span className="text-muted">Report<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item>Download Report</Dropdown.Item>
                                        <Dropdown.Item>Export</Dropdown.Item>
                                        <Dropdown.Item>Import</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className='custom-vector-map'>
                        <VectorMap {...world} style={{ height: "255px"}} />
                        <div id="world-map-line-markers" data-colors='["--tb-light"]'></div>

                        <div className="mt-4">
                            <h4 className="mb-1">65,802 <small className="fw-normal fs-14">Total Sales</small></h4>
                            <p className="text-muted">Sales from Jan - Dec 2022</p>
                        </div>
                        
                        <div className="table-responsive table-card mt-3">
                            <table className="table table-borderless table-striped align-middle table-sm fs-14 mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src={us} alt="" height="18" className="rounded-circle" />
                                                </div>
                                                <h6 className="fw-medium fs-14 mb-0">United States</h6>
                                            </div>
                                        </td>
                                        <td>
                                            23410
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src={gl} alt="" height="18" className="rounded-circle" />
                                                </div>
                                                <h6 className="fw-medium fs-14 mb-0">Greenland</h6>
                                            </div>
                                        </td>
                                        <td>
                                            19520
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src={br} alt="" height="18" className="rounded-circle" />
                                                </div>
                                                <h6 className="fw-medium fs-14 mb-0">Brazil</h6>
                                            </div>
                                        </td>
                                        <td>
                                            16459
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src={au} alt="" height="18" className="rounded-circle" />
                                                </div>
                                                <h6 className="fw-medium fs-14 mb-0">Australia</h6>
                                            </div>
                                        </td>
                                        <td>
                                            14795
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src={ru} alt="" height="18" className="rounded-circle" />
                                                </div>
                                                <h6 className="fw-medium fs-14 mb-0">Russia</h6>
                                            </div>
                                        </td>
                                        <td>
                                            13479
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src={ca} alt="" height="18" className="rounded-circle" />
                                                </div>
                                                <h6 className="fw-medium fs-14 mb-0">Canada</h6>
                                            </div>
                                        </td>
                                        <td>
                                            12645
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default TopSalesLocation;