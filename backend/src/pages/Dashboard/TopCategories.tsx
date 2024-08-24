import CustomDropdownToggle from 'Common/CustomDropdownToggle';
import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { TopCategoriesChart } from './DashboardCharts';

const TopCategories = () => {
    return (
        <React.Fragment>
             <Col xxl={3} lg={6}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Categories</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="flex-shrink-0">
                                <Dropdown.Toggle as={CustomDropdownToggle} href="#" className="text-reset dropdown-btn">
                                    <span className="text-muted">Report<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                    <Dropdown.Item className="dropdown-item" href="#">Download Report</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Export</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Import</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
            
                    <Card.Body>
                        <div id="multiple_radialbar" data-colors='["--tb-primary", "--tb-danger", "--tb-success", "--tb-secondary"]' className="apex-charts" dir="ltr"></div>
                        <TopCategoriesChart dataColors='["--tb-primary", "--tb-danger", "--tb-success", "--tb-secondary"]' />

                        <Row className="g-3">
                            <Col md={6}>
                                <Card className="text-center border-dashed mb-0">
                                    <Card.Body>
                                        <h6 className="fs-16">986</h6>
                                        <i className="bi bi-square-fill text-primary me-1 fs-11"></i> Fashion
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="text-center border-dashed mb-0">
                                    <Card.Body>
                                        <h6 className="fs-16">874</h6>
                                        <i className="bi bi-square-fill text-danger me-1 fs-11"></i> Electronics
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="text-center border-dashed mb-0">
                                    <Card.Body>
                                        <h6 className="fs-16">321</h6>
                                        <i className="bi bi-square-fill text-success me-1 fs-11"></i> Groceries
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="text-center border-dashed mb-0">
                                    <Card.Body>
                                        <h6 className="fs-16">741</h6>
                                        <i className="bi bi-square-fill text-secondary me-1 fs-11"></i> Others
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card> 
            </Col>
        </React.Fragment>
    );
}

export default TopCategories;