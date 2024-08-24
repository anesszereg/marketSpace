import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import Select from 'react-select'

const colourOptions : any = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate' },
    { value: 'silver', label: 'Silver' },
];

const FormTomSelect = () => {
    document.title=" React Select | Toner eCommerce + React Admin Template";

    const [isLoading, setIsLoading] = useState(false);

    return (
        <React.Fragment>
            <div className="page">
                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="React Select" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-lg-0">Single Select</h4>
                                </Card.Header>
                                <Card.Body>
                                    {/* <p className="text-muted">An example showing how you might go about creating contact selector like those used in Email apps.</p> */}
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        name="cars"
                                        options={colourOptions}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-lg-0">Single Select With Loading</h4>
                                </Card.Header>
                                <Card.Body>
                                    {/* <p className="text-muted">An example showing how you might go about creating contact selector like those used in Email apps.</p> */}
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        isLoading={isLoading}
                                        onChange={() => setIsLoading((state) => !state)}
                                        name="cars"
                                        options={colourOptions}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-lg-0">Multi Select</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Select
                                        isMulti
                                        placeholder="Pick some links..."
                                        options={colourOptions}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-lg-0">Default Select Options</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Select
                                        value={[colourOptions[1], colourOptions[2], colourOptions[3]]}
                                        isMulti
                                        options={colourOptions}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

            </div>
        </React.Fragment>
    );
};

export default FormTomSelect;