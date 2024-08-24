import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { StacksHorizontalExample, StacksVerticalExample } from './UiUtilityCode';

const Stacks = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Stacks - Vertical</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted mb-3">Use <code>vstack</code> class to create vertical layouts. Stacked items are full-width by default. Use <code>gap-</code> class with variation to add space between items.</p>
                            <div>
                                <div className="vstack gap-3">
                                    <div className="bg-light border p-1 px-2">First item</div>
                                    <div className="bg-light border p-1 px-2">Second item</div>
                                    <div className="bg-light border p-1 px-2">Third item</div>
                                </div>

                                <div className="mt-5">
                                    <h5 className="fs-14 mb-3">Vertical Stacks Examples</h5>
                                    <div className="vstack gap-2 col-md-5 mx-auto">
                                        <Button variant="primary">Save changes</Button>
                                        <Button variant="outline-secondary">Cancel</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "220px" }}>
                                <StacksVerticalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Stacks - Horizontal</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted mb-3">Use <code>hstack</code> class to create horizontal layouts. Stacked items are full-width by default. Use <code>gap-</code> class with variation to add space between items.</p>
                            <div>
                                <div className="hstack gap-3">
                                    <div className="bg-light border p-1 px-2">First item</div>
                                    <div className="bg-light border p-1 px-2">Second item</div>
                                    <div className="bg-light border p-1 px-2">Third item</div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-muted mb-3">Using horizontal margin utilities like <code>ms-auto</code> as spacers:</p>

                                    <div className="hstack gap-3">
                                        <div className="bg-light border p-1 px-2">First item</div>
                                        <div className="bg-light border p-1 px-2 ms-auto">Second item</div>
                                        <div className="bg-light border p-1 px-2">Third item</div>
                                    </div>
                                    <div className="hstack gap-3 mt-3">
                                        <div className="bg-light border p-1 px-2">First item</div>
                                        <div className="vr"></div>
                                        <div className="bg-light border p-1 px-2">Second item</div>

                                        <div className="bg-light border p-1 px-2 ms-auto">Third item</div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h5 className="fs-13 mb-3">Horizontal Stacks Examples</h5>
                                    <div className="hstack gap-3">
                                        <input className="form-control me-auto" type="text" placeholder="Add your item here..." />
                                        <Button variant="primary">Submit</Button>
                                        <div className="vr"></div>
                                        <Button variant="outline-secondary">Reset</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "220px" }}>
                                <StacksHorizontalExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Stacks;