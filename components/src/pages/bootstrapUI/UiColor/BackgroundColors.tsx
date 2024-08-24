import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';

const BackgroundColors = () => {
    document.title = " Colors | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base UI" breadcrumbItem="Colors" />
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title">Background Colors Options</h4>
                                <p className="mb-0 text-muted">Use diffrent <code>color style</code> to color your
                                    element with a given table.</p>
                            </Card.Header>

                            <Card.Body>
                                <Row>
                                    <Col xxl={3} md={6}>
                                        <h6 className="mb-3">Background Color</h6>
                                        <div className="table-responsive">
                                            <Table className="table table-bordered align-middle">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-primary</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-secondary</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-secondary p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-success</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-success p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-info</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-info p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-warning</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-warning p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-danger</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-danger p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-dark</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-dark p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-light</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-light p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-body</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-body p-2"></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <h6 className="mb-3">Background Gradient</h6>
                                        <div className="table-responsive">
                                            <Table className="table table-bordered align-middle">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-secondary bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-success bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-info bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-warning bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-danger bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-dark bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-gradient</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-light bg-gradient p-2"></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <h6 className="mb-3">Background Subtle</h6>
                                        <div className="table-responsive">
                                            <Table className="table table-bordered align-middle">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-primary-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-secondary-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-secondary-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-success-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-success-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-info-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-info-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-warning-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-warning-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-danger-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-danger-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-dark-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-dark-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-light-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-light-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>

                                    <Col xxl={3} md={6}>
                                        <h6 className="mb-3">Background Opacity</h6>
                                        <div className="table-responsive">
                                            <Table className="table table-bordered align-middle">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-opacity-10</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary bg-opacity-10 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-opacity-25</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary bg-opacity-25 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-opacity-50</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary bg-opacity-50 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-opacity-75</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary bg-opacity-75 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.bg-opacity-100</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="bg-primary bg-opacity-100 p-2"></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default BackgroundColors;