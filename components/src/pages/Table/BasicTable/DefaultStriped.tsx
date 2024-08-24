import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DefaultTables, StrippedRow } from './BasicTableCode';

const DefaultStriped = () => {
    document.title=" Basic Tables | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Tabels" breadcrumbItem="Basic Tables" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Default Table</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>table</code> class to show bootstrap-based default table.</p>
                                <div className="table-responsive">
                                    <Table className="align-middle table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Customer</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Invoice</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><Link to="#" className="fw-medium">#VZ2110</Link></th>
                                                <td>Bobby Davis</td>
                                                <td>October 15, 2021</td>
                                                <td>$2,300</td>
                                                <td><Link to="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#" className="fw-medium">#VZ2109</Link></th>
                                                <td>Christopher Neal</td>
                                                <td>October 7, 2021</td>
                                                <td>$5,500</td>
                                                <td><Link to="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#" className="fw-medium">#VZ2108</Link></th>
                                                <td>Monkey Karry</td>
                                                <td>October 5, 2021</td>
                                                <td>$2,420</td>
                                                <td><Link to="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><Link to="#" className="fw-medium">#VZ2107</Link></th>
                                                <td>James White</td>
                                                <td>October 2, 2021</td>
                                                <td>$7,452</td>
                                                <td><Link to="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "275px" }}>
                                    <DefaultTables />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Striped Rows</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>table-striped</code> class to add zebra-striping to any table row within the &lt;tbody&gt;.</p>
                                <div className="table-responsive">
                                    <Table className="table-striped table-nowrap align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Customer</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Invoice</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="fw-medium">01</td>
                                                <td>Bobby Davis</td>
                                                <td>Nov 14, 2021</td>
                                                <td>$2,410</td>
                                                <td><span className="badge bg-success">Confirmed</span></td>
                                            </tr>
                                            <tr>
                                                <td className="fw-medium">02</td>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>$1,450</td>
                                                <td><span className="badge bg-warning">Waiting</span></td>
                                            </tr>
                                            <tr>
                                                <td className="fw-medium">03</td>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>$3,500</td>
                                                <td><span className="badge bg-success">Confirmed</span></td>
                                            </tr>
                                            <tr>
                                                <td className="fw-medium">04</td>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>$6,875</td>
                                                <td><span className="badge bg-danger">Cancelled</span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "275px" }}>
                                    <StrippedRow />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultStriped;