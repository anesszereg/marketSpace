import React, { useState } from 'react';
import { Card, Col, Row, Table, Badge, Button } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { BasicRaterExample, RaterWithStepExample, CustomMsgExample, ReadOnlyRaterExample, OnHoverExample, ReasetRaterExample } from "./UiRatingCode";
import Rating from "react-rating"


const RatingRtr = () => {

  document.title = " Ratings | Toner eCommerce + React Admin Template";

  const [customize, setcustomize] = useState<any>(0)
  const [reset, setreset] = useState<any>(0)

  return (
    <React.Fragment>
      <div className="page">
        <Breadcrumb breadcrumb="Advance UI" breadcrumbItem="Ratings" />
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header className="align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Rater Js</h4>
              </Card.Header>
              <Card.Body>
                <p className="text-muted">Rater-js is a star rating widget for the browser. here are the various examples of rating shown below with variation.</p>
                <div className="live-preview">
                  <div className="table-responsive">
                    <Table className="align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Title</th>
                          <th scope="col">Example</th>
                          <th scope="col">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Basic Rater</th>
                          <td>
                            <div id="basic-rater" dir="ltr">
                              <Rating
                                initialRating={3}
                                emptySymbol="mdi mdi-star-outline text-muted"
                                fullSymbol="mdi mdi-star text-warning "
                              />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <BasicRaterExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Rater with Step</th>
                          <td>
                            <div id="rater-step" dir="ltr" >
                              <Rating
                                initialRating={1.5}
                                fractions={2}
                                emptySymbol="mdi mdi-star-outline text-muted "
                                fullSymbol="mdi mdi-star text-warning "
                              />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <RaterWithStepExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Custom Messages</th>
                          <td>
                            <div id="rater-message" dir="ltr">
                              <Rating
                                emptySymbol="mdi mdi-star-outline text-muted"
                                fullSymbol="mdi mdi-star text-warning "
                              />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <CustomMsgExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Example with unlimited number of stars. readOnly option is set to true.</th>
                          <td>
                            <div id="rater-unlimitedstar" dir="ltr">
                              <Rating
                                stop={16}
                                emptySymbol="mdi mdi-star-outline text-muted fa-1x"
                                fullSymbol="mdi mdi-star text-warning"
                                initialRating={4.5}
                                readonly
                              />
                            </div>
                          </td>
                          <td>
                            <pre>
                              <ReadOnlyRaterExample />
                            </pre>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">On Hover Event</th>
                          <td>
                            <div dir="ltr">
                              <div id="rater-onhover" className="align-middle d-inline">
                                <Rating
                                  stop={5}
                                  emptySymbol="mdi mdi-star-outline text-muted "
                                  fullSymbol="mdi mdi-star text-warning "
                                  onChange={() => setcustomize(customize)}
                                />
                              </div>
                              <Badge bg="info" className="ratingnum align-middle ms-2">{customize}</Badge>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <OnHoverExample />
                            </pre>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">Clear/Reset Rater</th>
                          <td>
                            <div dir="ltr">
                              <div id="raterreset" className="align-middle d-inline">
                                <Rating
                                  emptySymbol="mdi mdi-star-outline text-muted"
                                  fullSymbol={reset}
                                  onHover={() => setreset("mdi mdi-star text-warning")}
                                />
                              </div>
                              <span className="clear-rating"></span>
                              <Button id="raterreset-button" color="light" size="sm" className="ms-2" onClick={() => setreset("mdi mdi-star-outline text-muted")}>Reset</Button>
                            </div>
                          </td>
                          <td>
                            <pre>
                              <ReasetRaterExample />
                            </pre>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div className="d-none code-view">
                  <pre>

                  </pre>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default RatingRtr;