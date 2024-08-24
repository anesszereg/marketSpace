import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';

const Timepicker = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Flatpickr - Timepicker</h4>
                        </Card.Header>

                        <Card.Body>
                            <Form action="#">
                                <Row className="gy-3">
                                    <Col lg={6}>
                                        <div>
                                            <Form.Label className="form-label mb-0">Timepicker</Form.Label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-time-basic="true"</code> attribute.</p>
                                            <Flatpickr
                                                className="form-control"
                                                options={{
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: "H:i",
                                                }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div>
                                            <Form.Label className="form-label mb-0">24-hour Time Picker</Form.Label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-time-hrs="true"</code> attribute.</p>
                                            <Flatpickr
                                                className="form-control"
                                                options={{
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: "H:i",
                                                    time_24hr: true
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label mb-0">Time Picker w/ Limits</Form.Label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-min-time="Min.Time" data-max-time="Max.Time"</code> attribute.</p>
                                            <Flatpickr
                                                className="form-control"
                                                options={{
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: "H:i",
                                                    minTime: "16:00",
                                                    maxTime: "22:30",
                                                }}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label mb-0">Preloading Time</Form.Label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-default-time="Your Default Time"</code> attribute.</p>
                                            <Flatpickr
                                                className="form-control"
                                                options={{
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: "H:i",
                                                    defaultDate: "13:45"
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label mb-0">Inline</Form.Label>
                                            <p className="text-muted">Set <code>data-provider="timepickr" data-time-inline="Your Default Time"</code> attribute.</p>
                                            <Flatpickr
                                                className="form-control"
                                                options={{
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    // inline: true,
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Timepicker;