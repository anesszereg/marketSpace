import React from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';
import CustomDropdownToggle from 'Common/CustomDropdownToggle';

const TopProducts = () => {
    return (
        <React.Fragment>
             <Col xxl={3} lg={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Products</h4>
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
                    </Card.Header>
            
                    <Card.Body>
                        <div className="mb-4">
                            <span className="badge badge-soft-dark float-end">90%</span>
                            <h6 className="mb-2">Fashion & Clothing</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-success bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="badge badge-soft-dark float-end">64%</span>
                            <h6 className="mb-2">Lighting</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-warning bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "64%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="badge badge-soft-dark float-end">77%</span>
                            <h6 className="mb-2">Footwear</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-danger bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "77%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="badge badge-soft-dark float-end">53%</span>
                            <h6 className="mb-2">Electronics</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-info bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "53%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="badge badge-soft-dark float-end">81%</span>
                            <h6 className="mb-2">Beauty & Personal Care</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-primary bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "81%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="badge badge-soft-dark float-end">96%</span>
                            <h6 className="mb-2">Books</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-secondary bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "96%"}}></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="badge badge-soft-dark float-end">69%</span>
                            <h6 className="mb-2">Furniture</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-success bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "69%"}}></div>
                            </div>
                        </div>
                        <div>
                            <span className="badge badge-soft-dark float-end">63%</span>
                            <h6 className="mb-2">Mobile Accessories</h6>
                            <div className="progress progress-sm" role="progressbar">
                                <div className="progress-bar bg-dark bg-opacity-50 progress-bar-striped progress-bar-animated" style={{width: "63%"}}></div>
                            </div>
                        </div>
                    </Card.Body>
                </Card> 
            </Col> 
        </React.Fragment>
    );
}

export default TopProducts;