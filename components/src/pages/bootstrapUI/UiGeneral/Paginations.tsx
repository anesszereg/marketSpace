import React from 'react';
import { Card, Col, Pagination, Row } from 'react-bootstrap';
import { PaginationExample } from './UiGeneralCode';

const Paginations = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Pagination</h4>
                        </Card.Header>

                        <Card.Body>
                            <div>
                                <Row>
                                    <Col lg={6}>
                                        <h5 className="fs-15">Default Pagination</h5>
                                        <p className="text-muted">Use <code>pagination</code> class to ul element to indicate a series of related content exists across multiple pages. </p>

                                        <nav aria-label="Page navigation example">
                                            <Pagination>
                                                <Pagination.Item>Previous</Pagination.Item>
                                                <Pagination.Item>{1}</Pagination.Item>
                                                <Pagination.Item>{2}</Pagination.Item>
                                                <Pagination.Item>{3}</Pagination.Item>
                                                <Pagination.Item>Next</Pagination.Item>
                                            </Pagination>
                                        </nav>

                                        <nav aria-label="Page navigation example">
                                            <Pagination>
                                                <Pagination.Item>← Prev</Pagination.Item>
                                                <Pagination.Item>{1}</Pagination.Item>
                                                <Pagination.Item>{2}</Pagination.Item>
                                                <Pagination.Item>{3}</Pagination.Item>
                                                <Pagination.Item>Next →</Pagination.Item>
                                            </Pagination>
                                        </nav>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="mt-4 mt-lg-0">
                                            <h5 className="fs-15">Disabled and Active states</h5>
                                            <p className="text-muted">Use <code>disabled</code> class to links that appear un-clickable and <code>active</code> class to indicate the current page. </p>

                                            <nav aria-label="...">
                                                <Pagination>
                                                    <Pagination.Item className="disabled">← Prev</Pagination.Item>
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    <Pagination.Item active>{2}</Pagination.Item>
                                                    <Pagination.Item>{3}</Pagination.Item>
                                                    <Pagination.Item>Next →</Pagination.Item>
                                                </Pagination>
                                            </nav>

                                            <nav aria-label="...">
                                                <Pagination>
                                                    <Pagination.Item disabled>
                                                        <span><i className="mdi mdi-chevron-left"></i></span>
                                                    </Pagination.Item>
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    <Pagination.Item active>{2}</Pagination.Item>
                                                    <Pagination.Item>{3}</Pagination.Item>
                                                    <Pagination.Item>
                                                        <i className="mdi mdi-chevron-right"></i>
                                                    </Pagination.Item>
                                                </Pagination>
                                            </nav>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <div className="mt-4">
                                            <h5 className="fs-15">Sizing</h5>
                                            <p className="text-muted">Use <code>pagination-lg</code> or <code>pagination-sm</code> to set different pagination sizes.</p>

                                            <nav aria-label="...">
                                                <Pagination className="pagination-lg">
                                                    <Pagination.Item disabled>← Prev</Pagination.Item>
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    <Pagination.Item>{2}</Pagination.Item>
                                                    <Pagination.Item>{3}</Pagination.Item>
                                                    <Pagination.Item>Next →</Pagination.Item>
                                                </Pagination>
                                            </nav>

                                            <nav aria-label="...">
                                                <Pagination className="pagination-sm">
                                                    <Pagination.Item disabled>← Prev</Pagination.Item>
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    <Pagination.Item>{2}</Pagination.Item>
                                                    <Pagination.Item>{3}</Pagination.Item>
                                                    <Pagination.Item>Next →</Pagination.Item>
                                                </Pagination>
                                            </nav>
                                        </div>

                                    </Col>

                                    <Col lg={6}>
                                        <div className="mt-4">
                                            <h5 className="fs-15">Alignment</h5>

                                            <p className="text-muted">Use <code>justify-content-start</code>, <code>justify-content-start</code>, or <code>justify-content-start</code>, class to pagination class to change the alignment of pagination respectively.</p>

                                            <nav aria-label="Page navigation example">
                                                <Pagination className="justify-content-center">
                                                    <Pagination.Item className="disabled">← Prev</Pagination.Item>
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    <Pagination.Item>{2}</Pagination.Item>
                                                    <Pagination.Item>{3}</Pagination.Item>
                                                    <Pagination.Item>Next →</Pagination.Item>
                                                </Pagination>
                                            </nav>

                                            <nav aria-label="Page navigation example">
                                                <Pagination className="justify-content-end">
                                                    <Pagination.Item className="disabled">← Prev</Pagination.Item>
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    <Pagination.Item>{2}</Pagination.Item>
                                                    <Pagination.Item>{3}</Pagination.Item>
                                                    <Pagination.Item>Next →</Pagination.Item>
                                                </Pagination>
                                            </nav>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6}>
                                        <div className="mt-4">
                                            <h5 className="fs-15">Custom Separated Pagination</h5>
                                            <p className="text-muted">Use <code>pagination-separated</code> class to pagination class to set custom separated pagination.</p>

                                            <Pagination className="pagination-lg pagination-separated">
                                                <Pagination.Item disabled>←</Pagination.Item>
                                                <Pagination.Item>1</Pagination.Item>
                                                <Pagination.Item active>{2}</Pagination.Item>
                                                <Pagination.Item>3</Pagination.Item>
                                                <Pagination.Item>4</Pagination.Item>
                                                <Pagination.Item>5</Pagination.Item>
                                                <Pagination.Item>→</Pagination.Item>
                                            </Pagination>

                                            <Pagination className="pagination-separated">
                                                <Pagination.Item disabled>←</Pagination.Item>
                                                <Pagination.Item>1</Pagination.Item>
                                                <Pagination.Item active>
                                                    {2}
                                                </Pagination.Item>
                                                <Pagination.Item>3</Pagination.Item>
                                                <Pagination.Item>4</Pagination.Item>
                                                <Pagination.Item>5</Pagination.Item>
                                                <Pagination.Item>→</Pagination.Item>
                                            </Pagination>

                                            <Pagination className="pagination-sm pagination-separated">
                                                <Pagination.Item disabled>←</Pagination.Item>
                                                <Pagination.Item>1</Pagination.Item>
                                                <Pagination.Item active>{2}</Pagination.Item>
                                                <Pagination.Item>3</Pagination.Item>
                                                <Pagination.Item>4</Pagination.Item>
                                                <Pagination.Item>5</Pagination.Item>
                                                <Pagination.Item>→</Pagination.Item>
                                            </Pagination>
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="mt-4">
                                            <h5 className="fs-15">Custom Rounded Pagination</h5>
                                            <p className="text-muted">Use <code>pagination-rounded</code> class to pagination class to set custom rounded pagination.</p>

                                            <Pagination className="pagination-lg pagination-rounded">
                                                <Pagination.Item disabled>←</Pagination.Item>
                                                <Pagination.Item>1</Pagination.Item>
                                                <Pagination.Item active>{2}</Pagination.Item>
                                                <Pagination.Item>3</Pagination.Item>
                                                <Pagination.Item>4</Pagination.Item>
                                                <Pagination.Item>5</Pagination.Item>
                                                <Pagination.Item>→</Pagination.Item>
                                            </Pagination>

                                            <Pagination className="pagination-rounded">
                                                <Pagination.Item disabled>←</Pagination.Item>
                                                <Pagination.Item>1</Pagination.Item>
                                                <Pagination.Item active>{2}</Pagination.Item>
                                                <Pagination.Item>3</Pagination.Item>
                                                <Pagination.Item>4</Pagination.Item>
                                                <Pagination.Item>5</Pagination.Item>
                                                <Pagination.Item>→</Pagination.Item>
                                            </Pagination>

                                            <Pagination className="pagination-sm pagination-rounded">
                                                <Pagination.Item disabled>←</Pagination.Item>
                                                <Pagination.Item>1</Pagination.Item>
                                                <Pagination.Item active>{2}</Pagination.Item>
                                                <Pagination.Item>3</Pagination.Item>
                                                <Pagination.Item>4</Pagination.Item>
                                                <Pagination.Item>5</Pagination.Item>
                                                <Pagination.Item>→</Pagination.Item>
                                            </Pagination>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "250px" }}>
                                <PaginationExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Paginations;