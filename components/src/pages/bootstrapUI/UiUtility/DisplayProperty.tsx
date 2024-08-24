import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

const DisplayProperty = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Display Property</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use below-mentioned class to an element to display the value of components and more with our display utilities.</p>
                            <div className="live-preview">
                                <div>
                                    <Row>
                                        <Col lg={6}>
                                            <div>
                                                <h5 className="fs-13 mb-3">Display classes</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-bordered">
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th scope="col" style={{ width: "40%" }}>Display Property</th>
                                                                <th scope="col">Class</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Display : none</td>
                                                                <td><code>.d-none</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : inline</td>
                                                                <td><code>.d-inline</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : inline-block</td>
                                                                <td><code>.d-inline-block</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : block</td>
                                                                <td><code>.d-block</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : table</td>
                                                                <td><code>.d-table</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : table-cell</td>
                                                                <td><code>.d-table-cell</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : table-row</td>
                                                                <td><code>.d-table-row</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : flex</td>
                                                                <td><code>.d-flex</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Display : inline-flex</td>
                                                                <td><code>.d-inline-flex</code></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div>
                                                <h5 className="fs-13 mb-3">Hiding elements</h5>
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th scope="col">Screen Size</th>
                                                                <th scope="col">Class</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Hidden on all</td>
                                                                <td><code>.d-none</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hidden only on xs</td>
                                                                <td><code>.d-none .d-sm-block</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hidden only on sm</td>
                                                                <td><code>.d-sm-none .d-md-block</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hidden only on md</td>
                                                                <td><code>.d-md-none .d-lg-block</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hidden only on lg</td>
                                                                <td><code>.d-lg-none .d-xl-block</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hidden only on xl</td>
                                                                <td><code>.d-xl-none</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Visible on all</td>
                                                                <td><code>.d-block</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Visible only on xs</td>
                                                                <td><code>.d-block .d-sm-none</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Visible only on sm</td>
                                                                <td><code>.d-none .d-sm-block .d-md-none</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Visible only on md</td>
                                                                <td><code>.d-none .d-md-block .d-lg-none</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Visible only on lg</td>
                                                                <td><code>.d-none .d-lg-block .d-xl-none</code></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Visible only on xl</td>
                                                                <td><code>.d-none .d-xl-block</code></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="mt-4">
                                    <h5 className="fs-13">Display in print</h5>
                                    <p className="text-muted">Change the display value of elements when printing with our print display utility classes.</p>

                                    <ul className="ps-4 mb-0">
                                        <li className="py-1"><code>.d-print-none</code></li>
                                        <li className="py-1"><code>.d-print-inline</code></li>
                                        <li className="py-1"><code>.d-print-inline-block</code></li>
                                        <li className="py-1"><code>.d-print-block</code></li>
                                        <li className="py-1"><code>.d-print-table</code></li>
                                        <li className="py-1"><code>.d-print-table-row</code></li>
                                        <li className="py-1"><code>.d-print-table-cell</code></li>
                                        <li className="py-1"><code>.d-print-flex</code></li>
                                        <li className="py-1"><code>.d-print-inline-flex</code></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DisplayProperty;