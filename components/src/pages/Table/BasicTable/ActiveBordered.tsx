import React, { useRef } from 'react';
import { Card, Col, Row, Table, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ActiveTables, BorderedTables } from './BasicTableCode';

const ActiveBordered = () => {

    const ref = useRef(null);

    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Active Tables</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-active</code> class to highlight a table row or cell.</p>
                            <div className="table-responsive">
                                <Table className="align-middle table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ width: "42px" }}>
                                                <div className='form-check'>
                                                    <Form.Check ref={ref} type="checkbox" value="" id="activetableCheck01"  defaultChecked={true} />
                                                    <Form.Label htmlFor="activetableCheck"></Form.Label>
                                                </div>
                                            </th>
                                            <th scope="col">Order ID</th>
                                            <th scope="col">Shop</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className='form-check'>
                                                    <Form.Check ref={ref} type="checkbox" value="" id="activetableCheck01"  defaultChecked={true} />
                                                    <Form.Label htmlFor="activetableCheck01"></Form.Label>
                                                </div>
                                            </th>
                                            <td>#541254265</td>
                                            <td>Amezon</td>
                                            <td>Cleo Carson</td>
                                            <td>$4,521</td>
                                            <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                        </tr>
                                        <tr className="table-active">
                                            <th scope="row">
                                                <div className='form-check'>
                                                <Form.Check ref={ref} type="checkbox" value="" id="activetableCheck01"  defaultChecked={true} />
                                                    <Form.Label htmlFor="activetableCheck02"></Form.Label>
                                                </div>
                                            </th>
                                            <td>#744145235</td>
                                            <td>Shoppers</td>
                                            <td>Juston Eichmann</td>
                                            <td>$7,546</td>
                                            <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className='form-check'>
                                                <Form.Check ref={ref} type="checkbox" value="" id="activetableCheck01"  defaultChecked={true} />
                                                    <Form.Label htmlFor="activetableCheck03"></Form.Label>
                                                </div>
                                            </th>
                                            <td>#9855126598</td>
                                            <td>Flipkart</td>
                                            <td>Bettie Johson</td>
                                            <td>$1,350</td>
                                            <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className='form-check'>
                                                <Form.Check ref={ref} type="checkbox" value="" id="activetableCheck01"  defaultChecked={true} />
                                                    <Form.Label htmlFor="activetableCheck04"></Form.Label>
                                                </div>
                                            </th>
                                            <td>#847512653</td>
                                            <td>Shoppers</td>
                                            <td className="table-active">Maritza Blanda</td>
                                            <td>$4,521</td>
                                            <td><Link to="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
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
                                <ActiveTables />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Bordered Tables</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-bordered</code> class to show borders on all sides of the table and cells.</p>
                            <div className="table-responsive">
                                <Table className="table-bordered align-middle table-nowrap mb-0">
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
                                <BorderedTables />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ActiveBordered;
