import React from 'react';
import { ProgressBar, Row, Col, Card, Button } from 'react-bootstrap';
import { ContentProgressExmaple, ProgressWithStepExample, StepProgressArrowExample } from './UiProgressCode';

const ContentStep = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Content Progress</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted pb-2">Example of progress with content wrapped in progress.</p>
                            <Card.Body>

                                <Card className="bg-light overflow-hidden shadow-none">
                                    <Card.Body>
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0"><b className="text-secondary">30%</b> Update in progress...</h6>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <h6 className="mb-0">1 min left</h6>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <div className="bg-soft-secondary rounded-0">
                                        <ProgressBar now={30} variant='secondary' />
                                    </div>
                                </Card>

                                <Card className="bg-light overflow-hidden shadow-none">
                                    <Card.Body>
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0"><b className="text-success">60%</b> Update in progress...</h6>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <h6 className="mb-0">45s left</h6>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <div className="bg-soft-success rounded-0">
                                        <ProgressBar now={60} variant='success' />
                                    </div>
                                </Card>

                                <Card className="bg-light overflow-hidden shadow-none">
                                    <Card.Body>
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0"><b className="text-danger">82%</b> Update in progress...</h6>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <h6 className="mb-0">25s left</h6>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <div className="bg-soft-danger rounded-0">
                                        <ProgressBar now={82} variant='danger' />
                                    </div>
                                </Card>

                            </Card.Body>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "345px" }}>
                                <ContentProgressExmaple />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Progress with Steps</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted pb-2">Here is the example of progress which is represented by steps completion.</p>
                            <div className="position-relative m-4">
                                <div style={{ height: "1px" }}>
                                    <ProgressBar now={50} className="progress-sm" />
                                </div>
                                <Button className="position-absolute top-0 start-0 translate-middle btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>1</Button>
                                <Button className="position-absolute top-0 start-50 translate-middle btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>2</Button>
                                <Button className="position-absolute top-0 start-100 translate-middle btn-sm btn-light rounded-pill" style={{ width: "2rem", height: "2rem" }}>3</Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ProgressWithStepExample />
                            </pre>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Step Progress with Arrow</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted pb-2">Use <code>progress-step-arrow </code>class to create step progress with an arrow.</p>
                            <ProgressBar className='progress-step-arrow progress-info'>
                                <ProgressBar now={100} label={'Step1'} />
                                <ProgressBar now={100} label={'Step2'} />
                                <ProgressBar now={100} variant='light text-dark' label={'Step3'} />
                            </ProgressBar>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <StepProgressArrowExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ContentStep