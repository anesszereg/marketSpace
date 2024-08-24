import React from 'react';
import { ProgressBar, Row, Col, Card } from 'react-bootstrap';
import { LabelExample, MultipleBarsExample } from './UiProgressCode';

const LabelBars = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Progress with Label</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Add labels to your progress bars by placing text within the progress-bar.</p>
                            <div>
                                <ProgressBar now={25} label={`${25}%`} />
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <LabelExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Multiple Bars</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>bg-</code> class to progress bar class with the below-mentioned color to change the appearance of individual progress bars.</p>
                            <ProgressBar>
                                <ProgressBar now={15} key={1} />
                                <ProgressBar variant="success" now={30} key={2} />
                                <ProgressBar variant="info" now={20} key={3} />
                            </ProgressBar>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "90px" }}>
                                <MultipleBarsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LabelBars;