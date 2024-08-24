import React from 'react';
import { Row, Col, Card, Form, Image } from 'react-bootstrap';
import { ResponsiveTables } from './BasicTableCode';

// import Images
import avatar1 from 'assets/images/users/avatar-1.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'
import avatar6 from 'assets/images/users/avatar-6.jpg'
import { Link } from 'react-router-dom';


const Responsive = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Responsive Tables</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>table-responsive</code> class to make any table responsive across all viewports. Responsive tables allow tables to be scrolled horizontally with ease.</p>
                            <div className="table-responsive">
                                <table className="table align-middle table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" style={{ width: "42px" }}>
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="" id="responsivetableCheck" />
                                                    <Form.Label htmlFor="responsivetableCheck"></Form.Label>
                                                </div>
                                            </th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Purchased</th>
                                            <th scope="col">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="" id="responsivetableCheck01" />
                                                    <Form.Label htmlFor="responsivetableCheck01"></Form.Label>
                                                </div>
                                            </th>
                                            <td><Link to="#" className="fw-medium">#VZ2110</Link></td>
                                            <td>10 Oct, 14:47</td>
                                            <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar3} alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Jordan Kennedy
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Mastering the grid</td>
                                            <td>$9.98</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="" id="responsivetableCheck02" />
                                                    <Form.Label htmlFor="responsivetableCheck02"></Form.Label>
                                                </div>
                                            </th>
                                            <td><Link to="#" className="fw-medium">#VZ2109</Link></td>
                                            <td>17 Oct, 02:10</td>
                                            <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar4} alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Jackson Graham
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Splashify</td>
                                            <td>$270.60</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="" id="responsivetableCheck03" />
                                                    <Form.Label htmlFor="responsivetableCheck03"></Form.Label>
                                                </div>
                                            </th>
                                            <td><Link to="#" className="fw-medium">#VZ2108</Link></td>
                                            <td>26 Oct, 08:20</td>
                                            <td className="text-primary"><i className="ri-refresh-line fs-17 align-middle"></i> Refunded</td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar5} alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Lauren Trujillo
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Wireframing Kit for Figma</td>
                                            <td>$145.42</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="" id="responsivetableCheck04" />
                                                    <Form.Label htmlFor="responsivetableCheck04"></Form.Label>
                                                </div>
                                            </th>
                                            <td><Link to="#" className="fw-medium">#VZ2107</Link></td>
                                            <td>02 Nov, 04:52</td>
                                            <td className="text-danger"><i className="ri-close-circle-line fs-17 align-middle"></i> Cancel</td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar6} alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Curtis Weaver
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Wireframing Kit for Figma</td>
                                            <td>$170.68</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" value="" id="responsivetableCheck05" />
                                                    <Form.Label htmlFor="responsivetableCheck05"></Form.Label>
                                                </div>
                                            </th>
                                            <td><Link to="#" className="fw-medium">#VZ2106</Link></td>
                                            <td>10 Nov, 07:20</td>
                                            <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar1} alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        Jason schuller
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Splashify</td>
                                            <td>$350.87</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="table-light">
                                        <tr>
                                            <td colSpan={6}>Total</td>
                                            <td>$947.55</td>
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
                                <ResponsiveTables />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Responsive;