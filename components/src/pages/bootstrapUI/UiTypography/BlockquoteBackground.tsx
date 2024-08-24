import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BlockquoteColorExample } from './UiTypographyCode';

const BlockquoteBackground = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Blockquote Background Color</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted text-muted">Use <code>blockquote-</code> class with the below-mentioned color variation to set the blockquote background color.</p>
                            <div>
                                <Row className="gy-4">
                                    <Col xl={4} md={6}>
                                        <blockquote className="blockquote custom-blockquote blockquote-primary rounded mb-0">
                                            <p className="text-dark mb-2">Custom Blockquote Primary Example</p>
                                            <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                        </blockquote>
                                    </Col>

                                    <Col xl={4} md={6}>
                                        <blockquote className="blockquote custom-blockquote blockquote-secondary rounded mb-0">
                                            <p className="text-dark mb-2">Custom Blockquote Secondary Example</p>
                                            <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                        </blockquote>
                                    </Col>

                                    <Col xl={4} md={6}>
                                        <blockquote className="blockquote custom-blockquote blockquote-success rounded mb-0">
                                            <p className="text-dark mb-2">Custom Blockquote Success Example</p>
                                            <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                        </blockquote>
                                    </Col>

                                    <Col xl={4} md={6}>
                                        <blockquote className="blockquote custom-blockquote blockquote-info rounded mb-0">
                                            <p className="text-dark mb-2">Custom Blockquote Info Example</p>
                                            <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                        </blockquote>
                                    </Col>

                                    <Col xl={4} md={6}>
                                        <blockquote className="blockquote custom-blockquote blockquote-danger rounded mb-0">
                                            <p className="text-dark mb-2">Custom Blockquote Danger Example</p>
                                            <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                        </blockquote>
                                    </Col>

                                    <Col xl={4} md={6}>
                                        <blockquote className="blockquote custom-blockquote blockquote-warning rounded mb-0">
                                            <p className="text-dark mb-2">Custom Blockquote Warning Example</p>
                                            <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                        </blockquote>
                                    </Col>

                                    <Col xl={4} md={6}>
                                        <blockquote className="blockquote custom-blockquote blockquote-dark rounded mb-0">
                                            <p className="text-dark mb-2">Custom Blockquote Dark Example</p>
                                            <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                        </blockquote>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <BlockquoteColorExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default BlockquoteBackground;