import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { SingleButtonDropdownExample } from './UiDropdownCode';


const SingleButtonDropdown = () => {
    document.title=" Dropdowns | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Dropdowns" />

                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Single Button Dropdown</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>btn</code> class at to create a dropdown
                                    toggle with &lt;button&gt; element.
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary">
                                            Dropdown button
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary">
                                            Dropdown link
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "310px" }}>
                                    <SingleButtonDropdownExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default SingleButtonDropdown;