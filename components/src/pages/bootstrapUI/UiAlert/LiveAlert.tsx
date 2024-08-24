import React, { useState } from 'react'
import { Row, Card,Alert, Col } from 'react-bootstrap'
import { LiveExample } from './UiAlertCode';

const LiveAlert = () => {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title mb-0">Live Alert Example</h4>
                    </Card.Header>
                    <Card.Body>
                        <p className="text-muted">Click the Show live alert button to show an alert on button click.</p>
                        <div id="liveAlertPlaceholder"></div>
                        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                            Nice, you triggered this alert message!
                        </Alert>
                        <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>
                    </Card.Body>
                    <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                        <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                    </Card.Body>
                    <Card.Body>
                        <pre className="language-markup" style={{ height: "82px" }}>
                            <LiveExample />
                        </pre>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LiveAlert;