import React from 'react';
import { Card, Col, Row, Table, Button, Dropdown } from 'react-bootstrap';
import { TablesBorderColors, TablesWithoutBorders } from './BasicTableCode';

const BordercolorsWithoutborders = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Tables Border Colors</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>border-</code> class with color variation class to set table border color.</p>
                            <div className="table-responsive">
                                <Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Assignee</th>
                                            <th scope="col">Price</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-medium">01</td>
                                            <td>Implement new UX</td>
                                            <td><span className="badge badge-soft-primary">Backlog</span></td>
                                            <td>Lanora Sandoval</td>
                                            <td>$4,521</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as='a' className='arrow-none'>
                                                        <i className="ri-more-2-fill"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#">View</Dropdown.Item>
                                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">02</td>
                                            <td>Design syntax</td>
                                            <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                            <td>Calvin Garrett</td>
                                            <td>$7,546</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as='a' className='arrow-none'>
                                                        <i className="ri-more-2-fill"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#">View</Dropdown.Item>
                                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">03</td>
                                            <td>Configurable resources</td>
                                            <td><span className="badge badge-soft-success">Done</span></td>
                                            <td>Florence Guzman</td>
                                            <td>$1,350</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as='a' className='arrow-none'>
                                                        <i className="ri-more-2-fill"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#">View</Dropdown.Item>
                                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">04</td>
                                            <td>Implement extensions</td>
                                            <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                            <td>Maritza Blanda</td>
                                            <td>$4,521</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as='a' className='arrow-none'>
                                                        <i className="ri-more-2-fill"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#">View</Dropdown.Item>
                                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
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
                                <TablesBorderColors />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0 flex-grow-1">Tables Without Borders</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-borderless</code> to set a table without borders.</p>
                            <div className="table-responsive">
                                <Table className="table-borderless align-middle table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Job Title</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-medium">01</td>
                                            <td>Annette Black</td>
                                            <td>Industrial Designer</td>
                                            <td>10, Nov 2021</td>
                                            <td><span className="badge badge-soft-success">Active</span></td>
                                            <td>
                                                <div className="hstack gap-3 fs-15">
                                                    <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                    <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">02</td>
                                            <td>Bessie Cooper</td>
                                            <td>Graphic Designer</td>
                                            <td>13, Nov 2021</td>
                                            <td><span className="badge badge-soft-success">Active</span></td>
                                            <td>
                                                <div className="hstack gap-3 fs-15">
                                                    <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                    <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">03</td>
                                            <td>Leslie Alexander</td>
                                            <td>Product Manager</td>
                                            <td>17, Nov 2021</td>
                                            <td><span className="badge badge-soft-success">Active</span></td>
                                            <td>
                                                <div className="hstack gap-3 fs-15">
                                                    <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                    <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-medium">04</td>
                                            <td>Lenora Sandoval</td>
                                            <td>Applications Engineer</td>
                                            <td>25, Nov 2021</td>
                                            <td><span className="badge badge-soft-danger">Disabled</span></td>
                                            <td>
                                                <div className="hstack gap-3 fs-15">
                                                    <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                    <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                </div>
                                            </td>
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
                                <TablesWithoutBorders />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BordercolorsWithoutborders;