import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Captions, TableFoot } from './BasicTableCode';

const FootCaption = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Table Foot</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Add <code>&lt;tbody&gt;</code> attribute to group footer content in an HTML table.</p>
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
                                            <td>17, Nov 2021</td>
                                            <td>$410</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="table-light">
                                        <tr>
                                            <td colSpan={4}>Total</td>
                                            <td>$940</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <TableFoot />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Captions</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">You can also put the <code>&lt;caption&gt;</code> attribute on the top of the table with <code>caption-top</code> class.</p>
                            <div className="table-responsive">
                                <table className="table caption-top table-nowrap mb-0">
                                    <caption>List of users</caption>
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
                                            <td className="fw-medium">01</td>
                                            <td>Milana Scot</td>
                                            <td>UI/UX design</td>
                                            <td>Mitchell Flores</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">02</td>
                                            <td>Jassica Welsh</td>
                                            <td>3d Animation</td>
                                            <td>Dan Evgeni</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">03</td>
                                            <td>Leslie Alexander</td>
                                            <td>Logotype Design</td>
                                            <td>Olimpia Jordan</td>
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
                                <Captions />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FootCaption;