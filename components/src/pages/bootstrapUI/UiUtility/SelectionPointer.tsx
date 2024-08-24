import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { TextSelectionExample, PointerEventsExample } from './UiUtilityCode'

const SelectionPointer = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Text Selection</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted mb-3">Use <code>user-select-all</code>, <code>user-select-auto</code>, or <code>user-select-none</code> class to the content which is selected when the user interacts with it.</p>
                            <div>
                                <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
                                <p className="user-select-auto">This paragraph has default select behavior.</p>
                                <p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "125px" }}>
                                <TextSelectionExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Pointer Events</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted mb-3">Use <code>pe-none</code> class to prevent and <code>pe-auto</code> class to add element interactions respectively.</p>
                            <div>
                                <p><Link to="#" className="text-success pe-none" tabIndex={-1}>This link</Link> can not be clicked.</p>
                                <p><Link to="#" className="text-success pe-auto">This link</Link> can be clicked (this is default behavior).</p>
                                <p className="pe-none mb-0"><Link to="#" className="text-success" tabIndex={-1}>This link</Link> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <Link to="#" className="pe-auto">this link</Link> has a <code>pe-auto</code> class and can be clicked.</p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <PointerEventsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SelectionPointer