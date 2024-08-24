import React from 'react'
import { Accordion, Form } from 'react-bootstrap'

const ProductDiscount = () => {
  return (
    <React.Fragment>
        <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>
                    <span className="text-muted text-uppercase fs-13">Discount</span> <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                </Accordion.Header>
                <Accordion.Body className="text-body pt-1">
                    <div className="d-flex flex-column gap-2 filter-check" id="discount-filter">
                        <div className="form-check">
                            <Form.Check type="checkbox" value="50" id="productdiscountRadio6" />
                            <Form.Label htmlFor="productdiscountRadio6">50% or more</Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="40" id="productdiscountRadio5" />
                            <Form.Label htmlFor="productdiscountRadio5">40% or more</Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="30" id="productdiscountRadio4" />
                            <Form.Label htmlFor="productdiscountRadio4">30% or more</Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="20" id="productdiscountRadio3" />
                            <Form.Label htmlFor="productdiscountRadio3">20% or more</Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="10" id="productdiscountRadio2" />
                            <Form.Label htmlFor="productdiscountRadio2">10% or more</Form.Label>
                        </div>
                        <div className="form-check">
                            <Form.Check type="checkbox" value="0" id="productdiscountRadio1" />
                            <Form.Label htmlFor="productdiscountRadio1">Less than 10%</Form.Label>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </React.Fragment>
  )
}

export default ProductDiscount
