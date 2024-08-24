import React from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import { VerticalAlignment } from './BasicTableCode';

const Verticalalignment = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Vertical alignment</h4>
                        </Card.Header>

                        <Card.Body>

                            <p className="text-muted">Table cells of <code>&lt;thead&gt;</code> are always vertical aligned to the bottom. Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p>
                            <div className="table-responsive table-nowrap">
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th>Heading</th>
                                            <th>Heading</th>
                                            <th>Heading</th>
                                            <th>Heading</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                        </tr>
                                        <tr className="align-bottom">
                                            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                                            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                                            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                                            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                        </tr>
                                        <tr>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                            <td className="align-top">This cell is aligned to the top.</td>
                                            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
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
                                <VerticalAlignment />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Verticalalignment;