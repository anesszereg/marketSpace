import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const SocialMedia = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={4}>
                    <h5 className="fs-16">Social Media</h5>
                    <p className="text-muted mb-lg-0">Personal Identifiable Information (PII) is defined as: Any representation of information that permits the identity of an individual to whom the information applies to be reasonably inferred by either direct or indirect means.</p>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Card.Body>
                            <Row className="g-3">
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="facebook">Facebook</Form.Label>
                                        <Form.Control type="text" id="facebook" placeholder="Username" defaultValue="Raquel"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="whatsappInput">Whatsapp</Form.Label>
                                        <Form.Control type="number" id="whatsappInput" placeholder="+(235) 01234 5678" defaultValue="+(253) 98765 4321"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="twitterInput">Twitter <span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" id="twitterInput" placeholder="Username" defaultValue="@raquel_morillo"/>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div>
                                        <Form.Label htmlFor="emailInput2">Email</Form.Label>
                                        <Form.Control type="text" id="emailInput2" placeholder="example@toner.com" defaultValue="raquelmurillo@toner.com"/>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="text-end">
                                        <Button variant='primary' type="submit">Change Social Media</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default SocialMedia;