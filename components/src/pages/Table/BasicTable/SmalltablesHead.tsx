import React from 'react';
import { Row, Col, Card, Table, Button, ProgressBar } from 'react-bootstrap';
import { SmallTables, TableHead } from './BasicTableCode';

const SmalltablesHead = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Small Tables</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-sm</code> class to create any table more compact by cutting all cell padding in half.</p>
                            <div className="table-responsive">
                                <Table className="table-sm table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Assignee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-medium">01</td>
                                            <td>Implement new UX</td>
                                            <td><span className="badge badge-soft-primary">Backlog</span></td>
                                            <td>Lanora Sandoval</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">02</td>
                                            <td>Design syntax</td>
                                            <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                            <td>Calvin Garrett</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">03</td>
                                            <td>Configurable resources</td>
                                            <td><span className="badge badge-soft-success">Done</span></td>
                                            <td>Florence Guzman</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">04</td>
                                            <td>Implement extensions</td>
                                            <td><span className="badge badge-soft-dark">Backlog</span></td>
                                            <td>Maritza Blanda</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">05</td>
                                            <td>Applications Engineer</td>
                                            <td>
                                                <span className="badge badge-soft-success">Done</span>
                                            </td>
                                            <td>Leslie Alexander</td>
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
                                <SmallTables />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Table Head</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-light</code> or <code>table-dark</code> class to create &lt;thead&gt; appear light or dark.</p>
                            <div className="table-responsive">
                                <Table className="align-middle table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Student</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Author</th>
                                            <th scope="col">Payment</th>
                                            <th scope="col">Process</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Milana Scot</td>
                                            <td>UI/UX design</td>
                                            <td>Mitchell Flores</td>
                                            <td>$450</td>
                                            <td>
                                                <ProgressBar variant="success" now={100} className="progress-sm" />
                                            </td>
                                            <td><Button bsPrefix='a' href="#" className="link-success">Confirmed</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Jassica Welsh</td>
                                            <td>3d Animation</td>
                                            <td>Dan Evgeni</td>
                                            <td>$860</td>
                                            <td>
                                                <ProgressBar variant="warning" now={65} className="progress-sm" />
                                            </td>
                                            <td><Button bsPrefix='a' href="#" className="link-warning">Waiting</Button></td>
                                        </tr>
                                        <tr>
                                            <td>Leslie Alexander</td>
                                            <td>Logotype Design</td>
                                            <td>Olimpia Jordan</td>
                                            <td>$450</td>
                                            <td>
                                                <ProgressBar variant="warning" now={35} className="progress-sm" />
                                            </td>
                                            <td><Button bsPrefix='a' href="#" className="link-warning">Waiting</Button></td>
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
                                <TableHead />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SmalltablesHead;