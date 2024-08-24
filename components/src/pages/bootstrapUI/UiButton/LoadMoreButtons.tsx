import React from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { LoadingbuttonsExample } from './UiButtonCode';

const LoadMoreButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Load More Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Example of loading buttons.</p>
                            <Row>
                                <Col lg={6}>
                                    <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                        <Button variant='outline-primary' className="btn-load">
                                            <span className="d-flex align-items-center">
                                                <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <span className="flex-grow-1 ms-2">
                                                    Loading...
                                                </span>
                                            </span>
                                        </Button>
                                        <Button className="btn-success btn-load">
                                            <span className="d-flex align-items-center">
                                                <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <span className="flex-grow-1 ms-2">
                                                    Loading...
                                                </span>
                                            </span>
                                        </Button>
                                        <Button variant='outline-secondary' className="btn-load">
                                            <span className="d-flex align-items-center">
                                                <Spinner animation="grow" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <span className="flex-grow-1 ms-2">
                                                    Loading...
                                                </span>
                                            </span>
                                        </Button>
                                        <Button className="btn-danger btn-load">
                                            <span className="d-flex align-items-center">
                                                <Spinner animation="grow" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <span className="flex-grow-1 ms-2">
                                                    Loading...
                                                </span>
                                            </span>
                                        </Button>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                        <Button variant='outline-primary' className="btn-load">
                                            <span className="d-flex align-items-center">
                                                <span className="flex-grow-1 me-2">
                                                    Loading...
                                                </span>
                                                <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </span>
                                        </Button>
                                        <button type="button" className="btn btn-success btn-load">
                                            <span className="d-flex align-items-center">
                                                <span className="flex-grow-1 me-2">
                                                    Loading...
                                                </span>
                                                <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </span>
                                        </button>
                                        <button type="button" className="btn btn-outline-warning btn-load">
                                            <span className="d-flex align-items-center">
                                                <span className="flex-grow-1 me-2">
                                                    Loading...
                                                </span>
                                                <Spinner animation="grow" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </span>
                                        </button>
                                        <button type="button" className="btn btn-info btn-load">
                                            <span className="d-flex align-items-center">
                                                <span className="flex-grow-1 me-2">
                                                    Loading...
                                                </span>
                                                <Spinner animation="grow" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </span>
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "310px" }}>
                                <LoadingbuttonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LoadMoreButtons;