import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { TableNesting, Variants } from './BasicTableCode';

const NestingVariants = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Table Nesting</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Example of basic table nesting. Border styles, active styles, and table variants are not inherited by nested tables.</p>

                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Job Title</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-medium">01</td>
                                            <td>Annette Black</td>
                                            <td>Industrial Designer</td>
                                            <td>10, Nov 2021</td>
                                            <td>$450</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}>
                                                <table className="table table-nowrap mb-0">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Student</th>
                                                            <th scope="col">Course</th>
                                                            <th scope="col">Author</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-medium">I</td>
                                                            <td>Milana Scot</td>
                                                            <td>3d Animation</td>
                                                            <td>James Black</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">II</td>
                                                            <td>Juston Eichmann</td>
                                                            <td>Design syntax</td>
                                                            <td>Olimpia Jordan</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">02</td>
                                            <td>Bessie Cooper</td>
                                            <td>Graphic Designer</td>
                                            <td>13, Nov 2021</td>
                                            <td>$875</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">03</td>
                                            <td>Leslie Alexander</td>
                                            <td>Product Manager</td>
                                            <td>16, Nov 2021</td>
                                            <td>$410</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">04</td>
                                            <td>Bettie Johson</td>
                                            <td>Applications Engineer</td>
                                            <td>24, Nov 2021</td>
                                            <td>$620</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">05</td>
                                            <td>Monkey Karry</td>
                                            <td>Implement new UX</td>
                                            <td>25, Nov 2021</td>
                                            <td>$795</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <TableNesting />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Variants</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-</code> class with below-mentioned color variation class within &lt;tr&gt; to set color on table row.</p>
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Department</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Default</td>
                                            <td>Monkey Karry</td>
                                            <td>Medical Specialist</td>
                                            <td>Orthopedics</td>
                                        </tr>
                                        <tr className="table-primary">
                                            <td>Primary</td>
                                            <td>James White</td>
                                            <td>Medical Assistant</td>
                                            <td>Surgery</td>
                                        </tr>
                                        <tr className="table-secondary">
                                            <td>Secondary</td>
                                            <td>Aaron James</td>
                                            <td>Medical Specialist</td>
                                            <td>Neurology</td>
                                        </tr>
                                        <tr className="table-success">
                                            <td>Success</td>
                                            <td>Bettie Johson</td>
                                            <td>Medical Specialist</td>
                                            <td>Cardiology</td>
                                        </tr>
                                        <tr className="table-danger">
                                            <td>Danger</td>
                                            <td>Bessie Cooper</td>
                                            <td>Medical Assistant</td>
                                            <td>Surgery</td>
                                        </tr>
                                        <tr className="table-warning">
                                            <td>Warning</td>
                                            <td>Lenora Sandoval</td>
                                            <td>Medical Assistant</td>
                                            <td>Cardiology</td>
                                        </tr>
                                        <tr className="table-info">
                                            <td>Info</td>
                                            <td>Eric Pierce</td>
                                            <td>Medical Specialist</td>
                                            <td>Neurology</td>
                                        </tr>
                                        <tr className="table-light">
                                            <td>Light</td>
                                            <td>Ruth Zimmermann</td>
                                            <td>Medical Specialist</td>
                                            <td>Neurology</td>
                                        </tr>
                                        <tr className="table-dark">
                                            <td>Dark</td>
                                            <td>Leslie Alexander</td>
                                            <td>Medical Assistant</td>
                                            <td>Cardiology</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <Variants />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default NestingVariants;