import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BlockquoteBorderColorExample } from './UiTypographyCode';

const BlockquoteBorder = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Blockquote Border Color</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted text-muted">Use <code>blockquote-outline</code> class to set blockquote border color.</p>
                            <Row className="gy-4">

                                <Col xl={4} md={6}>
                                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-primary rounded mb-0">
                                        <p className="text-dark mb-2">Custom Blockquote Outline Primary Example</p>
                                        <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                    </blockquote>
                                </Col>

                                <Col xl={4} md={6}>
                                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-secondary rounded mb-0">
                                        <p className="text-dark mb-2">Custom Blockquote Outline Secondary Example</p>
                                        <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                    </blockquote>
                                </Col>

                                <Col xl={4} md={6}>
                                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
                                        <p className="text-dark mb-2">Custom Blockquote Outline Success Example</p>
                                        <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                    </blockquote>
                                </Col>

                                <Col xl={4} md={6}>
                                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-info rounded mb-0">
                                        <p className="text-dark mb-2">Custom Blockquote Outline Info Example</p>
                                        <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                    </blockquote>
                                </Col>

                                <Col xl={4} md={6}>
                                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-danger rounded mb-0">
                                        <p className="text-dark mb-2">Custom Blockquote Outline Danger Example</p>
                                        <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                    </blockquote>
                                </Col>

                                <Col xl={4} md={6}>
                                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-warning rounded mb-0">
                                        <p className="text-dark mb-2">Custom Blockquote Outline Warning Example</p>
                                        <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                    </blockquote>
                                </Col>

                                <Col xl={4} md={6}>
                                    <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-dark rounded mb-0">
                                        <p className="text-dark mb-2">Custom Blockquote Outline Dark Example</p>
                                        <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                    </blockquote>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <BlockquoteBorderColorExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BlockquoteBorder