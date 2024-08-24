import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';


const Flatpicker = () => {
  document.title=" Pickers | Toner eCommerce + React Admin Template";


  // const date:any = new Date()

  return (
    <React.Fragment>
      <div className="page">
        <Breadcrumb breadcrumb="Forms" breadcrumbItem="Pickers" />
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header>
                <h4 className="card-title mb-0">Flatpickr - Datepicker</h4>
              </Card.Header>

              <Card.Body>
                <Form action="#">
                  <Row className="gy-3">
                    <Col lg={6}>
                      <div>
                        <Form.Label className="form-label mb-0">Basic</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            dateFormat: "d M, Y"
                          }}
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div>
                        <Form.Label className="form-label mb-0">DateTime</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d.m.y" data-enable-time</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            enableTime: true,
                            dateFormat: "Y-m-d H:i",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">Human-Friendly Dates</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-altFormat="F j, Y"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">MinDate and MaxDate</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-minDate="Your Min. Date" data-maxDate="Your Max. date"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            minDate: "today",
                            // maxDate: new Date().fp_incr(14)
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">Default Date</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-deafult-date="Your Default Date"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            dateFormat: "Y-m-d",
                            defaultDate: ["2022-01-20"]
                          }}
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">Disabling Dates</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-disable="true"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            disable: ["2022-01-30", "2022-02-21", "2022-03-08", new Date(2025, 4, 9)],
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">Selecting Multiple Dates</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-multiple-date="true"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            mode: "multiple",
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">Range</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            mode: "range",
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">Inline</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-deafult-date="today" data-inline-date="true"</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            inline: true,
                            dateFormat: "Y-m-d"
                          }}
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mt-3">
                        <Form.Label className="form-label mb-0">Week Numbers</Form.Label>
                        <p className="text-muted">Set <code>data-provider="flatpickr" data-date-format="d M, Y" data-week-number</code> attribute.</p>
                        <Flatpickr
                          className="form-control"
                          options={{
                            weekNumbers: true,
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d",
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
      </div>
    </React.Fragment>
  )
}

export default Flatpicker;