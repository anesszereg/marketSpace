import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

const ApplicationNotifications = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={4}>
                    <h5 className="fs-16">Application Notifications:</h5>
                    <p className="text-muted mb-lg-0">An app notification is a message or alert sent by an application to the device user. They include push notifications and in-app notifications.</p>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Card.Body>
                            <h6 className="fs-16">By Email</h6>
                            <p className="text-muted">Receive the latest news, update and industry tutorials for us.</p>
                            
                            <Row className="g-3">
                                <Col lg={12}>
                                    <div className="form-check">
                                        <Form.Check type="checkbox" value="" id="ExclusiveProduct"/>
                                        <Form.Label htmlFor="ExclusiveProduct">
                                            Exclusive product offers
                                        </Form.Label>
                                        <p className="text-muted">Used or owned by only one person or group, and not shared with anyone else.</p>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="form-check">
                                        <Form.Check type="checkbox" value="" id="dailyMessages"/>
                                        <Form.Label htmlFor="dailyMessages">
                                            Daily Messages
                                        </Form.Label>
                                        <p className="text-muted">Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.</p>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="form-check">
                                        <Form.Check type="checkbox" value="" id="weeklyActivity" defaultChecked/>
                                        <Form.Label htmlFor="weeklyActivity">
                                            Weekly activity summary
                                        </Form.Label>
                                        <p className="text-muted">Open the activity app on the watch and scroll down to the bottom and tap on "Weekly Summary"</p>
                                    </div>
                                </Col>
                            </Row>

                            <h6 className="fs-16 mt-4">Notification from Us</h6>
                            <p className="text-muted">Receive the latest news, update and industry tutorials for us.</p>

                            <Row className="g-3">
                                <Col lg={4}>
                                    <div className="form-check">
                                        <Form.Check type="checkbox" value="" id="news&Upates" defaultChecked/>
                                        <Form.Label htmlFor="news&Upates">
                                            News & Updates
                                        </Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="form-check">
                                        <Form.Check type="checkbox" value="" id="bestTrips"/>
                                        <Form.Label htmlFor="bestTrips">
                                            Best Trips
                                        </Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="form-check">
                                        <Form.Check type="checkbox" value="" id="userResearch"/>
                                        <Form.Label htmlFor="userResearch">
                                            User Research
                                        </Form.Label>
                                    </div>
                                </Col>
                            </Row>

                            <h6 className="fs-16 mt-4">Comments</h6>
                            <p className="text-muted">Receive the latest news, update and industry tutorials for us.</p>
                            
                            <Row className="g-3">
                                <Col lg={4}>
                                    <div className="form-check">
                                        <Form.Check type="radio" name="commentsList" id="donotNotifyme"/>
                                        <Form.Label htmlFor="donotNotifyme">
                                            Do not notify me
                                        </Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="form-check">
                                        <Form.Check type="radio" name="commentsList" id="mentionsOnly"/>
                                        <Form.Label htmlFor="mentionsOnly">
                                            Mentions only
                                        </Form.Label>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="form-check">
                                        <Form.Check type="radio" name="commentsList" id="allcomment" defaultChecked/>
                                        <Form.Label htmlFor="allcomment">
                                            All comments
                                        </Form.Label>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ApplicationNotifications;