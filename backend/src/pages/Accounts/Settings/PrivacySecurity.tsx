import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrivacySecurity = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={4}>
                    <h5 className="fs-16">Privacy & Security</h5>
                    <p className="text-muted mb-lg-0">Security is about the safeguarding of data, whereas privacy is about the safeguarding of user identity. The specific differences, however, are more complex, and there can certainly be areas of overlap between the two.</p>
                </Col>
                <Col lg={8}>
                    <Card >
                        <Card.Body>
                            <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                                <div className="flex-grow-1">
                                    <h6 className="fs-16 mb-1">Two-factor Authentication</h6>
                                    <p className="text-muted">Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.</p>
                                </div>
                                <div className="flex-shrink-0 ms-sm-3">
                                    <Link to="#" className="btn btn-sm btn-primary">Enable Two-facor Authentication</Link>
                                </div>
                            </div>

                            <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                <div className="flex-grow-1">
                                    <h6 className="fs-16 mb-1">Secondary Verification</h6>
                                    <p className="text-muted">The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina.</p>
                                </div>
                                <div className="flex-shrink-0 ms-sm-3">
                                    <Link to="#" className="btn btn-sm btn-primary">Set up secondary method</Link>
                                </div>
                            </div>

                            <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                <div className="flex-grow-1">
                                    <h6 className="fs-16 mb-1">Backup Codes</h6>
                                    <p className="text-muted mb-sm-0">A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com.</p>
                                </div>
                                <div className="flex-shrink-0 ms-sm-3">
                                    <Link to="#" className="btn btn-sm btn-primary">Generate backup codes</Link>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h5 className="card-title text-decoration-underline mb-3">Delete This Account:</h5>
                                <p className="text-muted">Go to the Data &amp; Privacy section of your profile Account. Scroll to "Your data &amp; privacy options." Delete your Profile Account. Follow the instructions to delete your account :</p>
                                <div>
                                    <Form.Control type="password" id="passwordInput" placeholder="Enter your password" defaultValue="make@321654987" style={{maxWidth: "265px"}}/>
                                </div>
                                <div className="hstack gap-2 mt-3">
                                    <Link to="#" className="btn btn-soft-danger">Close &amp; Delete This Account</Link>
                                    <Link to="#" className="btn btn-soft-dark">Cancel</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default PrivacySecurity;