import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { InputSizing } from './BasicElementCode';


const InputSizings = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h4 className="card-title mb-0">Input Sizing</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">Use <code>form-control-lg</code> class to set large size input and Use <code>form-control-sm</code> class to set small size input. No class is needed for default size input.</p>
              <div className="row align-items-center g-3">
                <Col lg={4}>
                  <Form.Control className="form-control-sm" type="text" placeholder=".form-control-sm" />
                </Col>
                <Col lg={4}>
                  <Form.Control type="text" placeholder=".form-control" />
                </Col>
                <Col lg={4}>
                  <Form.Control className="form-control-lg" type="text" placeholder=".form-control-lg" />
                </Col>
              </div>
            </Card.Body>
            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
              <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
            </Card.Body>
            <Card.Body>
              <pre className="language-markup">
                <InputSizing />
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default InputSizings;