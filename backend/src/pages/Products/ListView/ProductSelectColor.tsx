import React from 'react'
import { Accordion, Form } from 'react-bootstrap';

const ProductSelectColor = () => {
  return (
    <React.Fragment>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <span className="text-muted text-uppercase fs-13">Colors</span>
            </Accordion.Header>

              <Accordion.Body className="text-body pt-1">
                <ul className="clothe-colors list-unstyled hstack gap-3 mb-0 flex-wrap" id="color-filter">
                  <li>
                    <Form.Check type="radio" name="colors" value="success" id="color-1"/>
                    <Form.Label className="avatar-xs btn btn-success p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-1"></Form.Label>
                  </li>
                  <li>
                    <Form.Check type="radio" name="colors" value="info" id="color-2"/>
                    <Form.Label className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-2"></Form.Label>
                  </li>
                  <li>
                    <Form.Check type="radio" name="colors" value="warning" id="color-3"/>
                    <Form.Label className="avatar-xs btn btn-warning p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-3"></Form.Label>
                  </li>
                  <li>
                    <Form.Check type="radio" name="colors" value="danger" id="color-4"/>
                    <Form.Label className="avatar-xs btn btn-danger p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-4"></Form.Label>
                  </li>
                  <li>
                    <Form.Check type="radio" name="colors" value="primary" id="color-5"/>
                    <Form.Label className="avatar-xs btn btn-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-5"></Form.Label>
                  </li>
                  <li>
                    <Form.Check type="radio" name="colors" value="secondary" id="color-6"/>
                    <Form.Label className="avatar-xs btn btn-secondary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-6"></Form.Label>
                  </li>
                  <li>
                    <Form.Check type="radio" name="colors" value="dark" id="color-7"/>
                    <Form.Label className="avatar-xs btn btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-7"></Form.Label>
                  </li>
                  <li>
                    <Form.Check type="radio" name="colors" value="light" id="color-8"/>
                    <Form.Label className="avatar-xs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-8"></Form.Label>
                  </li>
                </ul>
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>

    </React.Fragment>
  );
};

export default ProductSelectColor;
