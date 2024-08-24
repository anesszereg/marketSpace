import React, { useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const FormInputspin = () => {

    const [defaultCounter, setdefaultCounter] = useState(5);
    const [lightCounter, setlightCounter] = useState(5);
    const [fullwidthCounter, setfullwidthCounter] = useState(5);
    const [lfullwidthCounter, setlfullwidthCounter] = useState(5);
    const [blueCounter, setblueCounter] = useState(5);
    const [skyCounter, setskyCounter] = useState(5);
    const [greenCounter, setgreenCounter] = useState(5);
    const [tealCounter, settealCounter] = useState(5);
    const [yellowCounter, setyellowCounter] = useState(5);
    const [redCounter, setredCounter] = useState(5);

    function countUP(id: any, prev_data_attr: any) {
        id(prev_data_attr + 1);
    }

    function countDown(id: any, prev_data_attr: any) {
        id(prev_data_attr - 1);
    }

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Form Input Spin</h4>
                        </Card.Header>

                        <Card.Body>
                            <div>
                                <Row className="gy-4">
                                    <Col sm={6}>
                                        <div>
                                            <h5 className="fs-13 fw-medium text-muted">Default</h5>

                                            <div className="input-step">
                                                <Button className="minus"
                                                    onClick={() => {
                                                        countDown(setdefaultCounter, defaultCounter);
                                                    }}>
                                                    –
                                                </Button>
                                                <Form.Control type="number"
                                                    className="product-quantity"
                                                    value={defaultCounter}
                                                    min="0"
                                                    max="100"
                                                    readOnly
                                                />
                                                <Button type="button" className="plus"
                                                    onClick={() => {
                                                        countUP(setdefaultCounter, defaultCounter);
                                                    }}>
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col sm={6}>
                                        <div>
                                            <h5 className="fs-13 fw-medium text-muted">Light</h5>
                                            <div className="input-step light">
                                                <Button className="minus"
                                                    onClick={() => {
                                                        countDown(setlightCounter, lightCounter);
                                                    }}
                                                >–</Button>
                                                <Form.Control type="number"
                                                    className="product-quantity"
                                                    value={lightCounter}
                                                    min="0"
                                                    max="100"
                                                    readOnly />
                                                <Button className="plus"
                                                    onClick={() => {
                                                        countUP(setlightCounter, lightCounter);
                                                    }}>
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-4 pt-2">
                                    <Row className="gy-4">
                                        <Col sm={6}>
                                            <div>
                                                <h5 className="fs-13 fw-medium text-muted">Default (Full width)</h5>
                                                <div className="input-step full-width">
                                                    <Button className="minus"
                                                        onClick={() => {
                                                            countDown(
                                                                setfullwidthCounter,
                                                                fullwidthCounter
                                                            );
                                                        }}>
                                                        –
                                                    </Button>
                                                    <Form.Control type="number"
                                                        className="product-quantity"
                                                        value={fullwidthCounter}
                                                        min="0"
                                                        max="100"
                                                        readOnly />
                                                    <Button className="plus"
                                                        onClick={() => {
                                                            countUP(
                                                                setfullwidthCounter,
                                                                fullwidthCounter
                                                            );
                                                        }}>
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div>
                                                <h5 className="fs-13 fw-medium text-muted">Light (Full width)</h5>
                                                <div className="input-step full-width light">
                                                    <Button className="minus"
                                                        onClick={() => {
                                                            countDown(
                                                                setlfullwidthCounter,
                                                                lfullwidthCounter
                                                            );
                                                        }}>
                                                        –
                                                    </Button>
                                                    <Form.Control type="number"
                                                        className="product-quantity"
                                                        value={lfullwidthCounter}
                                                        min="0"
                                                        max="100"
                                                        readOnly />
                                                    <Button className="plus"
                                                        onClick={() => {
                                                            countUP(
                                                                setlfullwidthCounter,
                                                                lfullwidthCounter
                                                            );
                                                        }}>
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <Row className="mt-4 pt-2">
                                    <h5 className="fs-13 fw-medium text-muted">Colored</h5>
                                    <div className="d-flex flex-wrap align-items-start gap-2">
                                        <div className="input-step step-primary">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setblueCounter, blueCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={blueCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setblueCounter, blueCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="input-step step-secondary">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setskyCounter, skyCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={skyCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setskyCounter, skyCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="input-step step-success">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setgreenCounter, greenCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={greenCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setgreenCounter, greenCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="input-step step-info">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countUP(settealCounter, tealCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={tealCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(settealCounter, tealCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="input-step step-warning">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setyellowCounter, yellowCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={yellowCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setyellowCounter, yellowCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="input-step step-danger">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setredCounter, redCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={redCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setredCounter, redCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default FormInputspin