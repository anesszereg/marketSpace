import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { ClearfixExample } from './UiTypographyCode';

const Clearfix = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Clearfix</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>clearfix</code> class to clear/set floated content within a container.</p>
                            <div className="bg-light clearfix p-3">
                                <Button variant='secondary' className="float-start">Example Button floated left</Button>
                                <Button variant='success' className="float-end">Example Button floated right</Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ClearfixExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Clearfix;