import React from 'react';
import { Card, Col, Dropdown, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuItemDropdownExample } from './UiDropdownCode';

const DropdownMenuItemColor = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Dropdown Menu Item Color</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Example of dropdown menu and dropdown item color.</p>
                            <Row>
                                <Col xxl={3}>
                                    <div>
                                        <h6 className="font-size-13 mb-3">Dropdown Menu Success link example
                                        </h6>
                                        <div className="clearfix">
                                            <div className="dropdown-menu d-inline-block position-relative dropdownmenu-success" style={{ zIndex: "1" }}>
                                                <Link className="dropdown-item" to="#">Action</Link>
                                                <Link className="dropdown-item" to="#">Another action</Link>
                                                <Link className="dropdown-item active" to="#">Something else here</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link className="dropdown-item" to="#">Separated link</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={9}>
                                    <div className="mt-lg-0 mt-3">
                                        <h6 className="font-size-13 mb-0">Dropdown Menu link Color example</h6>
                                        <div>
                                            <Row>
                                                <Col lg={4} sm={6}>
                                                    <div className="mt-3">
                                                        <p className="font-size-13 mb-2">Dropdown menu Primary link</p>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="primary">
                                                                Primary
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='dropdownmenu-primary'>
                                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                <Dropdown.Divider />
                                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>

                                                <Col lg={4} sm={6}>
                                                    <div className="mt-3">
                                                        <p className="font-size-13 mb-2">Dropdown menu Secondary link</p>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="secondary">
                                                                Sacondary
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='dropdownmenu-secondary'>
                                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                <Dropdown.Divider />
                                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>

                                                <Col lg={4} sm={6}>
                                                    <div className="mt-3">
                                                        <p className="font-size-13 mb-2">Dropdown menu Success link</p>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="success">
                                                                Success
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='dropdownmenu-success'>
                                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                <Dropdown.Divider />
                                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>

                                                <Col lg={4} sm={6}>
                                                    <div className="mt-3">
                                                        <p className="font-size-13 mb-2">Dropdown menu Warning link</p>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="warning">
                                                                Warning
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='dropdownmenu-warning'>
                                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                <Dropdown.Divider />
                                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>

                                                <Col lg={4} sm={6}>
                                                    <div className="mt-3">
                                                        <p className="font-size-13 mb-2">Dropdown menu Info link</p>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="info">
                                                                Info
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='dropdownmenu-info'>
                                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                <Dropdown.Divider />
                                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>

                                                <Col lg={4} sm={6}>
                                                    <div className="mt-3">
                                                        <p className="font-size-13 mb-2">Dropdown menu Danger link</p>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="danger">
                                                                Danger
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='dropdownmenu-danger'>
                                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                <Dropdown.Divider />
                                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </div>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <MenuItemDropdownExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DropdownMenuItemColor