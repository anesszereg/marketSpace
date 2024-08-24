import React from 'react';
import { Accordion, Form } from 'react-bootstrap';

const ProductSize = () => {
    return (
        <React.Fragment>
            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        <span className="text-muted text-uppercase fs-13">Sizes</span>
                    </Accordion.Header>

                    <Accordion.Body className="text-body pt-1">
                        <ul className="clothe-size list-unstyled hstack gap-3 mb-0 flex-wrap" id="size-filter">
                            <li>
                                <Form.Check type="radio" name="sizes" value="xs" id="sizeXs" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXs">XS</Form.Label>
                            </li>
                            <li>
                                <Form.Check type="radio" name="sizes" value="s" id="sizeS" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeS">S</Form.Label>
                            </li>
                            <li>
                                <Form.Check type="radio" name="sizes" value="m" id="sizeM" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeM">M</Form.Label>
                            </li>
                            <li>
                                <Form.Check type="radio" name="sizes" value="l" id="sizeL" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeL">L</Form.Label>
                            </li>
                            <li>
                                <Form.Check type="radio" name="sizes" value="xl" id="sizeXl" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXl">XL</Form.Label>
                            </li>
                            <li>
                                <Form.Check type="radio" name="sizes" value="2xl" id="size2xl" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size2xl">2XL</Form.Label>
                            </li>
                            <li>
                                <Form.Check type="radio" name="sizes" value="3xl" id="size3xl" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size3xl">3XL</Form.Label>
                            </li>
                            <li>
                                <Form.Check type="radio" name="sizes" value="4xl" id="size4xl" />
                                <Form.Label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size4xl">4XL</Form.Label>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </React.Fragment>
    );
};

export default ProductSize
