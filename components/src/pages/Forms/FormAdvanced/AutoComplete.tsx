import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap'
import Selection from './Selection'


const AutoComplete = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Auto Complete</h4>
                        </Card.Header>

                        <Card.Body>
                            <div>
                                <Row className="g-3">
                                    <Col lg={6}>
                                        <div>
                                            <Form.Label className="text-muted">Search Result of Fruit Names</Form.Label>
                                            <Form.Control placeholder='Search for fruits...' id="autoCompleteFruit" type="text" dir="ltr" spellCheck={false} autoComplete="off" autoCapitalize="off" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div>
                                            <Form.Label className="text-muted">Search Result of Car Names</Form.Label>
                                            <Form.Control placeholder='Search for cars...' id="autoCompleteCars" type="text" dir="ltr" spellCheck={false} autoComplete="off" autoCapitalize="off" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Multi Select</h4>
                        </Card.Header>

                        <Card.Body>
                            <Selection />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AutoComplete