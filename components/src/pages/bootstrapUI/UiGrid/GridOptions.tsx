import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Row, Table } from 'react-bootstrap';

const GridOptions = () => {
    document.title=" Grid | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Grid" />
                <Row>
                    <div className="col-12">
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Grid Options</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
                                <div className="table-responsive">
                                    <Table className="table-bordered table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col" className="text-center">
                                                    xs<br />
                                                    <span className="fw-normal">&lt;576px</span>
                                                </th>
                                                <th scope="col" className="text-center">
                                                    sm<br />
                                                    <span className="fw-normal">≥576px</span>
                                                </th>
                                                <th scope="col" className="text-center">
                                                    md<br />
                                                    <span className="fw-normal">≥768px</span>
                                                </th>
                                                <th scope="col" className="text-center">
                                                    lg<br />
                                                    <span className="fw-normal">≥992px</span>
                                                </th>
                                                <th scope="col" className="text-center">
                                                    xl<br />
                                                    <span className="fw-normal">≥1200px</span>
                                                </th>
                                                <th scope="col" className="text-center">
                                                    xxl<br />
                                                    <span className="fw-normal">≥1400px</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Grid behavior</th>
                                                <td>Horizontal at all times</td>
                                                <td colSpan={5}>Collapsed to start, horizontal above breakpoints</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Max container width</th>
                                                <td>None (auto)</td>
                                                <td>540px</td>
                                                <td>720px</td>
                                                <td>960px</td>
                                                <td>1140px</td>
                                                <td>1320px</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Class prefix</th>
                                                <td><code>col-</code></td>
                                                <td><code>col-sm-</code></td>
                                                <td><code>col-md-</code></td>
                                                <td><code>col-lg-</code></td>
                                                <td><code>col-xl-</code></td>
                                                <td><code>col-xxl-</code></td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row"># of columns</th>
                                                <td colSpan={6}>12</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Gutter width</th>
                                                <td colSpan={6}>24px (12px on each side of a column)</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Custom gutters</th>
                                                <td colSpan={6}>Yes</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Nestable</th>
                                                <td colSpan={6}>Yes</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Offsets</th>
                                                <td colSpan={6}>Yes</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Column ordering</th>
                                                <td colSpan={6}>Yes</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default GridOptions