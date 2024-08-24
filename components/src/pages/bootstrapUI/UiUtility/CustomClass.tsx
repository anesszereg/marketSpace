import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

const CustomClass = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Custom Class</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the below-mentioned class to an element to custom display the value of components and more with our display utilities.</p>
                            <div className="live-preview">
                                <div>
                                    <div className="table-responsive">
                                        <Table className="table-bordered mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col" style={{ width: "40%" }}>Property</th>
                                                    <th scope="col">Class</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>font-family: 'Inter', sans-serif;</td>
                                                    <td><code>.ff-base</code></td>
                                                </tr>
                                                <tr>
                                                    <td>font-family: 'Inter', sans-serif;</td>
                                                    <td><code>.ff-secondary</code></td>
                                                </tr>
                                                <tr>
                                                    <td>font-weight: 500;</td>
                                                    <td><code>.fw-medium</code></td>
                                                </tr>
                                                <tr>
                                                    <td>min-width: 80px;</td>
                                                    <td><code>.w-xs</code></td>
                                                </tr>
                                                <tr>
                                                    <td>min-width: 95px;</td>
                                                    <td><code>.w-sm</code></td>
                                                </tr>
                                                <tr>
                                                    <td>min-width: 110px;</td>
                                                    <td><code>.w-md</code></td>
                                                </tr>
                                                <tr>
                                                    <td>min-width: 140px;</td>
                                                    <td><code>.w-lg</code></td>
                                                </tr>
                                                <tr>
                                                    <td>min-width: 160px;</td>
                                                    <td><code>.w-xl</code></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomClass;