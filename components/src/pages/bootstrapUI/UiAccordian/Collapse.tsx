import React, { useState } from 'react';
import { Card, Col, Row, Button, Collapse } from 'react-bootstrap';
import { CollapseExample, HorizontalCollapseExample } from './UiAccordianCode';

const Collapse1 = () => {
    const [open, setOpen] = useState(false);
    const [collOpen, setcollOpen] = useState(true);
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Collapse Example</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                You can use a link with the <code>href</code> attribute, or a button with the <code>data-bs-target</code> attribute. In both cases, the <code>data-bs-toggle="collapse"</code> is required.
                            </p>
                            <div className="hstack gap-2 flex-wrap mb-3">
                                <Button variant='primary' onClick={() => setOpen(!open)}>
                                    Link with href
                                </Button>
                                <Button variant='primary' onClick={() => setOpen(!open)}>
                                    Button with data-bs-target
                                </Button>
                            </div>
                            <Collapse 
                                in={open}>
                                <Card className="mb-0">
                                    <Card.Body>
                                        When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.
                                    </Card.Body>
                                </Card>
                            </Collapse>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "265px" }}>
                                <CollapseExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Horizontal Collapse</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use the <code>collapse-horizontal</code> class to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element for horizontal collapse.</p>
                            <div className="mb-3">
                                <Button variant='primary' onClick={() => setcollOpen(!collOpen)}>
                                    Toggle Width Collapse
                                </Button>
                            </div>
                            <Collapse 
                                in={collOpen} 
                                dimension="width">
                                <div id='example-collapse-text'>
                                    <Card body className="mb-0" style={{ width: "300px" }}>
                                        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                                    </Card>
                                </div>
                            </Collapse>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <HorizontalCollapseExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Collapse1;