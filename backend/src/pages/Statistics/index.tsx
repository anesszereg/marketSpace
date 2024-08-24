import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from 'Common/BreadCrumb';

import { IncomeStatisticsCharts, PurchaseCharts, TopSellingProductCharts, OrdersbyCountriesCharts } from './StatisticsCharts';

const Statistics = () => {

    document.title = "Statistics | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Statistics" pageTitle="Statistics" />
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Sales / Purchase</h5>
                                </Card.Header>
                                <div className="card-body">
                                    <PurchaseCharts dataColors='["--tb-primary", "--tb-success"]' />
                                </div>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Income Statistics</h5>
                                </Card.Header>
                                <div className="card-body">
                                    <IncomeStatisticsCharts dataColors='["--tb-success", "--tb-primary", "--tb-success"]' />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={8}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Top Selling Product</h5>
                                </Card.Header>
                                <div className="card-body">
                                    <TopSellingProductCharts dataColors='["--tb-primary", "--tb-primary-rgb, 0.80", "--tb-primary-rgb, 0.70", "--tb-primary-rgb, 0.60", "--tb-primary-rgb, 0.50"]' />
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Orders by Countries</h5>
                                </Card.Header>
                                <div className="card-body">
                                    <OrdersbyCountriesCharts dataColors='["--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info","--tb-danger", "--tb-info"]' />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Statistics
