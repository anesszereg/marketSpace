import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

const TextColors = () => {
    return (
        <React.Fragment>
            <Container fluid={true}>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Text Colors Options</h4>
                            <p className="mb-0 text-muted">Use diffrent <code>color style</code> to color your
                                element with a given table.</p>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                <Col xxl={9}>
                                    <h6 className="mb-3">Text Color</h6>
                                    <Row>
                                        <Col xxl={4} md={6}>
                                            <div className="table-responsive">
                                                <Table className="table table-bordered align-middle">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-primary</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-primary">text-primary</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-primary-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-primary-emphasis">text-primary-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-secondary</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-secondary">text-secondary</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-secondary-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-secondary-emphasis">text-secondary-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-success</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-success">text-success</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-success-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-success-emphasis">text-success-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-info</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-info">text-info</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-info-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-info-emphasis">text-info-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-warning</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-warning p-2">text-warning</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                        <Col xxl={4} md={6}>
                                            <div className="table-responsive">
                                                <Table className="table table-bordered align-middle">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-warning-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-warning-emphasis p-2">text-warning-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-danger</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-danger">text-danger</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-danger-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-danger-emphasis">text-danger-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-dark</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-dark">text-dark</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-dark-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-dark-emphasis">text-dark-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-light</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-light bg-dark">text-light</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-light-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-light-emphasis">text-light-emphasis</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-body</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-body">text-body</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-body-emphasis</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-body-emphasis">text-body-emphasis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                        <Col xxl={4} md={6}>
                                            <div className="table-responsive">
                                                <Table className="table table-bordered align-middle">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-muted</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-muted">text-muted</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-body-secondary</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-body-secondary">text-body-secondary</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-body-tertiary</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-body-tertiary">text-body-tertiary</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-black</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-black">text-black</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-black-50</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-black-50">text-black-50</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-white</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-white bg-dark">text-white</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-white-75</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-white-75 bg-dark">text-white-75</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "100px" }}>
                                                                <code>.text-white-50</code>
                                                            </td>
                                                            <td style={{ width: "100px" }}>
                                                                <div className="text-white-50 bg-dark">text-white-50</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xxl={3} md={6}>
                                    <h6 className="mb-3">Opacity & Text Opacity</h6>
                                    <div className="table-responsive">
                                        <Table className="table table-bordered align-middle">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.opacity-25</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="bg-primary opacity-25 p-2"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.opacity-50</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="bg-primary opacity-50 p-2"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.opacity-75</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="bg-primary opacity-75 p-2"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.opacity-100</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="bg-primary opacity-100 p-2"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.text-opacity-25</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="text-primary text-opacity-25">text-primary</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.text-opacity-50</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="text-primary text-opacity-50">text-primary</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.text-opacity-75</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="text-primary text-opacity-75">text-primary</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: "100px" }}>
                                                        <code>.text-opacity-100</code>
                                                    </td>
                                                    <td style={{ width: "100px" }}>
                                                        <div className="text-primary text-opacity-100">text-primary</div>
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

export default TextColors