import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BlockquotesExample } from './UiTypographyCode';

const Blockquotes = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Blockquotes</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>&lt;blockquote className="blockquote"&gt;</code> class for quoting blocks of content from another source within your document .</p>
                            <Row>
                                <Col xxl={6}>
                                    <div>
                                        <blockquote className="blockquote fs-14 mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </Col>
                                <Col xxl={6}>
                                    <div className="mt-4 mt-lg-0">
                                        <blockquote className="blockquote blockquote-reverse fs-14 mb-0">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <BlockquotesExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Blockquotes;