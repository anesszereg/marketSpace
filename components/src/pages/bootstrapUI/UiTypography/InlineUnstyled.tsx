import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { InlineTextExample, UnstyleListExample, InlineListExample } from './UiTypographyCode';

const InlineUnstyled = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Inline Text Elements</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Styling for inline HTML5 elements.</p>
                            <div>
                                <p className="lead">
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                </p>
                                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                <p><u>This line of text will render as underlined</u></p>
                                <p><small>This line of text is meant to be treated as fine print.</small></p>
                                <p><strong>This line rendered as bold text.</strong></p>
                                <p className="mb-0"><em>This line rendered as italicized text.</em></p>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "315px" }}>
                                <InlineTextExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Unstyled List</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>list-unstyled</code> class Remove the default list-style and left margin on list
                                items (immediate children only). <strong>This only applies to immediate
                                    children list items</strong>, meaning you will need to add the class
                                for any nested lists.</p>

                            <div>
                                <ul className="list-unstyled mb-0">
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Nulla volutpat aliquam velit
                                        <ul>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                        </ul>
                                    </li>
                                    <li>Faucibus porta lacus fringilla vel</li>
                                </ul>
                            </div>

                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "140px" }}>
                                <UnstyleListExample />
                            </pre>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Inline List</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>list-inline</code> and
                                <code>list-inline-item</code> class combination to remove a list’s bullets and apply some light margin.
                            </p>

                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">Lorem ipsum</li>
                                <li className="list-inline-item">Phasellus iaculis</li>
                                <li className="list-inline-item">Nulla volutpat</li>
                            </ul>

                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <InlineListExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default InlineUnstyled;