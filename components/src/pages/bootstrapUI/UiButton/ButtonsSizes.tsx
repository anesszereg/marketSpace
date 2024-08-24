import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { SizeButtonsExample } from './UiButtonCode';

const ButtonsSizes = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons Sizes</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-lg</code> class to create a large size button and <code>btn-sm</code> class to create a small size button.</p>
                            <div className="d-flex flex-wrap align-items-center gap-2">
                                <Button size='lg' variant='primary'>Large button</Button>
                                <Button size='lg' variant='light'>Large button</Button>

                                <Button size='sm' variant='primary'>Small button</Button>
                                <Button size='sm' variant='light'>Small button</Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <SizeButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonsSizes;