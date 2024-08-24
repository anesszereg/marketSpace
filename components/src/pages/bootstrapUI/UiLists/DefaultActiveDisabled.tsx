import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { DefaultListExample, ActiveItemExample,DisabledItemExample } from './UiListsCode';

// import Images
import avatar1 from 'assets/images/users/avatar-1.jpg'
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'

const DefaultActiveDisabled = () => {
    document.title=" Lists | Toner eCommerce + React Admin Template";
    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Lists" />
                <Row>
                    <Col xxl={4} xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Default List</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>list-group</code> class in an unordered list and <code>list-group-item</code> class to create a default list group.</p>
                                <div>
                                    <ListGroup as='ul'>
                                        <ListGroup.Item><i className="ri-bill-line align-middle me-2"></i> Send the billing agreement</ListGroup.Item>
                                        <ListGroup.Item><i className="ri-file-copy-2-line align-middle me-2"></i>Send over all the documentation.</ListGroup.Item>
                                        <ListGroup.Item><i className="ri-question-answer-line align-middle me-2"></i>Meeting with daron to review the intake form</ListGroup.Item>
                                        <ListGroup.Item><i className="ri-secure-payment-line align-middle me-2"></i>Check uikings theme and give customer support</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup">
                                    <DefaultListExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={4} xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Active Item</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>active</code> class to <code>list-group-item</code> to indicate the current active selection.</p>
                                <div>
                                    <ListGroup as='ul'>
                                        <ListGroup.Item as='li' active>Send the billing agreement</ListGroup.Item>
                                        <ListGroup.Item as='li'>Send over all the documentation.</ListGroup.Item>
                                        <ListGroup.Item as='li'>Meeting with daron to review the intake form</ListGroup.Item>
                                        <ListGroup.Item as='li'>Check uikings theme and give customer support</ListGroup.Item>
                                        <ListGroup.Item as='li'>Start making a presentation</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "110px" }}>
                                    <ActiveItemExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xxl={4} xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Disabled Items</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>disabled</code> class to <code>list-group-item</code> to make it <em>appear</em> disabled.</p>
                                <ListGroup as='ul'>
                                    <ListGroup.Item disabled aria-disabled="true">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img src={avatar1} alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                James Ballard
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img src={avatar2} alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Nancy Martino
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img src={avatar3} alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Henry Baird
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img src={avatar3} alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Erica Kernan
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{ height: "105px" }}>
                                    <DisabledItemExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultActiveDisabled;