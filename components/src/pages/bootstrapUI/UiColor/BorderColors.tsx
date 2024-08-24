import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

const BorderColors = () => {
    return (
        <React.Fragment>
            <Container fluid={true}>
                <Row>
                    <Col lg ={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title">Border Colors Options</h4>
                                <p className="mb-0 text-muted">Use diffrent <code>color style</code> to color your
                                    element with a given table.</p>
                            </Card.Header>
                            <Card.Body>

                                <Row>
                                    <Col xxl={3} md={6}>
                                        <h6 className="mb-3">Border Color</h6>
                                        <div className="table-responsive">
                                            <Table className="table table-bordered align-middle">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-primary</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-primary p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-secondary</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-secondary p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-success</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-success p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-info</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-info p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-warning</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-warning p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-danger</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-danger p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-dark</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-dark p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-light</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-light p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-body</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-body p-2"></div>
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
                                                            <code>.border-primary-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-primary-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-secondary-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-secondary-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-success-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-success-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-info-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-info-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-warning-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-warning-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-danger-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-danger-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-dark-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-dark-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-light-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-light-subtle p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-body-subtle</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-body-subtle p-2"></div>
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
                                                            <code>.border-opacity-10</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-primary border-opacity-10 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-opacity-25</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-primary border-opacity-25 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-opacity-50</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-primary border-opacity-50 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-opacity-75</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-primary border-opacity-75 p-2"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: "100px" }}>
                                                            <code>.border-opacity-100</code>
                                                        </td>
                                                        <td style={{ width: "100px" }}>
                                                            <div className="border border-primary border-opacity-100 p-2"></div>
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
            </Container>
        </React.Fragment>
    )
}

export default BorderColors;