import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import { SatisfactionChart } from './DashboardCharts';
import CustomDropdownToggle from 'Common/CustomDropdownToggle';

const CustomerSatisfaction = () => {
    return (
        <React.Fragment>
             <Col xxl={3}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Customer Satisfaction</h4>
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
                        <div id="area_chart_spline" data-colors='["--tb-primary", "--tb-success"]' className="apex-charts" dir="ltr"></div>
                        <SatisfactionChart dataColors='["--tb-primary", "--tb-success"]' />
            
                        <div className="mt-3 p-3 border rounded text-center">
                            <Row>
                                <Col xl={6} className="border-end">
                                    <h6 className="fs-17">$10,532</h6>
                                    <p className="text-muted mb-0"><i className="bi bi-app-indicator text-primary align-middle me-1"></i> This Month</p>
                                </Col>
                                <Col xl={6}>
                                    <h6 className="fs-17">$9,532</h6>
                                    <p className="text-muted mb-0"><i className="bi bi-app-indicator text-success align-middle me-1"></i> Last Month</p>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card> 
            </Col>
        </React.Fragment>
    );
};

export default CustomerSatisfaction;