import React from 'react'
import { Accordion, Form } from 'react-bootstrap'

const ProductRating = () => {
  return (
    <React.Fragment>
        <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>
                    <span className="text-muted text-uppercase fs-13">Rating</span> <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                </Accordion.Header>

                <Accordion.Body className="text-body">
                    <div className="d-flex flex-column gap-2 filter-check" id="rating-filter">
                        <div className="form-check">
                            <Form.Check type="checkbox" value="4" id="productratingRadio4" />
                            <Form.Label htmlFor="productratingRadio4">
                                <span className="text-muted">
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star"></i>
                                </span> 4 & Above
                            </Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="3" id="productratingRadio3" />
                            <Form.Label htmlFor="productratingRadio3">
                                <span className="text-muted">
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star"></i>
                                    <i className="mdi mdi-star"></i>
                                </span> 3 & Above
                            </Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="2" id="productratingRadio2" />
                            <Form.Label htmlFor="productratingRadio2">
                                <span className="text-muted">
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star"></i>
                                    <i className="mdi mdi-star"></i>
                                    <i className="mdi mdi-star"></i>
                                </span> 2 & Above
                            </Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="1" id="productratingRadio1" />
                            <Form.Label htmlFor="productratingRadio1">
                                <span className="text-muted">
                                    <i className="mdi mdi-star text-warning"></i>
                                    <i className="mdi mdi-star"></i>
                                    <i className="mdi mdi-star"></i>
                                    <i className="mdi mdi-star"></i>
                                    <i className="mdi mdi-star"></i>
                                </span> 1
                            </Form.Label>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </React.Fragment>
  )
}

export default ProductRating
