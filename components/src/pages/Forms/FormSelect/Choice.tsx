import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';

const Choice = () => {

    const options = [
        { value: "Choice 1", label: "Choice 1" },
        { value: "Choice 2", label: "Choice 2" },
        { value: "Choice 3", label: "Choice 3" },
        { value: "Choice 4", label: "Choice 4" },
    ]

    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Choices</h4>
                        </Card.Header>

                        <Card.Body>
                            <div>
                                <div>
                                    <h5 className="fs-14 mb-3">Single select input Example</h5>
                                    <Row>
                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-single-default" className="form-label text-muted">Default</Form.Label>
                                                <p className="text-muted">Set <code>data-choices multiple</code> attribute to set a default single select.</p>
                                                <Form.Select className="mb-3" aria-label="Default select example">
                                                <option defaultValue="Select your Status">Select your Status </option>
                                                <option value="1">Declined Payment</option>
                                                <option value="2">Delivery Error</option>
                                                <option value="3">Wrong Amount</option>
                                            </Form.Select>
                                                
                                            </div>
                                        </Col>

                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-single-groups" className="text-muted">Option Groups</Form.Label>
                                                <p className="text-muted">Set <code>data-choices data-choices-groups</code> attribute to set option group</p>
                                                <Form.Select id="choices-single-groups" data-choices data-choices-groups data-placeholder="Select City" name="choices-single-groups">
                                                    <option defaultValue="">Choose a city</option>
                                                    <optgroup label="UK">
                                                        <option value="London">London</option>
                                                        <option value="Manchester">Manchester</option>
                                                        <option value="Liverpool">Liverpool</option>
                                                    </optgroup>
                                                    <optgroup label="FR">
                                                        <option value="Paris">Paris</option>
                                                        <option value="Lyon">Lyon</option>
                                                        <option value="Marseille">Marseille</option>
                                                    </optgroup>
                                                    <optgroup label="DE" disabled>
                                                        <option value="Hamburg">Hamburg</option>
                                                        <option value="Munich">Munich</option>
                                                        <option value="Berlin">Berlin</option>
                                                    </optgroup>
                                                    <optgroup label="US">
                                                        <option value="New York">New York</option>
                                                        <option value="Washington" disabled>Washington</option>
                                                        <option value="Michigan">Michigan</option>
                                                    </optgroup>
                                                    <optgroup label="SP">
                                                        <option value="Madrid">Madrid</option>
                                                        <option value="Barcelona">Barcelona</option>
                                                        <option value="Malaga">Malaga</option>
                                                    </optgroup>
                                                    <optgroup label="CA">
                                                        <option value="Montreal">Montreal</option>
                                                        <option value="Toronto">Toronto</option>
                                                        <option value="Vancouver">Vancouver</option>
                                                    </optgroup>
                                                </Form.Select>
                                            </div>
                                        </Col>

                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-single-no-search" className="text-muted">Options added via config with no search</Form.Label>
                                                <p className="text-muted">Set <code>data-choices data-choices-search-false </code></p>
                                                <Form.Select id="choices-single-no-search" name="choices-single-no-search" data-choices data-choices-search-false >
                                                    <option value="Zero">Zero</option>
                                                    <option value="One">One</option>
                                                    <option value="Two">Two</option>
                                                    <option value="Three">Three</option>
                                                    <option value="Four">Four</option>
                                                    <option value="Five">Five</option>
                                                    <option value="Six">Six</option>
                                                </Form.Select>
                                            </div>
                                        </Col>

                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-single-no-sorting" className="text-muted">Options added via config with no sorting</Form.Label>
                                                <p className="text-muted">Set <code>data-choices data-choices-sorting-false</code> attribute.</p>
                                                <Form.Select id="choices-single-no-sorting" name="choices-single-no-sorting" data-choices data-choices-sorting-false>
                                                    <option value="Madrid">Madrid</option>
                                                    <option value="Toronto">Toronto</option>
                                                    <option value="Vancouver">Vancouver</option>
                                                    <option value="London">London</option>
                                                    <option value="Manchester">Manchester</option>
                                                    <option value="Liverpool">Liverpool</option>
                                                    <option value="Paris">Paris</option>
                                                    <option value="Malaga">Malaga</option>
                                                    <option value="Washington" disabled>Washington</option>
                                                    <option value="Lyon">Lyon</option>
                                                    <option value="Marseille">Marseille</option>
                                                    <option value="Hamburg">Hamburg</option>
                                                    <option value="Munich">Munich</option>
                                                    <option value="Barcelona">Barcelona</option>
                                                    <option value="Berlin">Berlin</option>
                                                    <option value="Montreal">Montreal</option>
                                                    <option value="New York">New York</option>
                                                    <option value="Michigan">Michigan</option>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="mt-4">
                                    <h5 className="fs-14 mb-3">Multiple select input</h5>
                                    <Row>
                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-multiple-default" className="form-label text-muted">Default</Form.Label>
                                                <p className="text-muted">Set <code>data-choices multiple</code> attribute.</p>
                                                {/* <Form.Select id="choices-multiple-default" data-choices name="choices-multiple-default" multiple>
                                                    <option value="Choice 1">Choice 1</option>
                                                    <option value="Choice 2">Choice 2</option>
                                                    <option value="Choice 3">Choice 3</option>
                                                    <option value="Choice 4" disabled>Choice 4</option>
                                                </Form.Select> */}
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={[options[1]]}
                                                    isMulti
                                                    options={options}
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-multiple-remove-button" className="text-muted">With remove button</Form.Label>
                                                <p className="text-muted">Set <code> multiple</code> attribute.</p>
                                                <Select
                                                    closeMenuOnSelect={false}
                                                    defaultValue={[options[1]]}
                                                    isMulti
                                                    options={options}
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-multiple-groups" className="text-muted">Option groups</Form.Label>
                                                <p className="text-muted">Set <code>data-choices data-choices-multiple-groups="true" multiple</code> attribute. </p>
                                                <Form.Select id="choices-single-groups" data-choices data-choices-groups data-placeholder="Select City" name="choices-single-groups">
                                                    <option defaultValue="">Choose a city</option>
                                                    <optgroup label="UK">
                                                        <option value="London">London</option>
                                                        <option value="Manchester">Manchester</option>
                                                        <option value="Liverpool">Liverpool</option>
                                                    </optgroup>
                                                    <optgroup label="FR">
                                                        <option value="Paris">Paris</option>
                                                        <option value="Lyon">Lyon</option>
                                                        <option value="Marseille">Marseille</option>
                                                    </optgroup>
                                                    <optgroup label="DE" disabled>
                                                        <option value="Hamburg">Hamburg</option>
                                                        <option value="Munich">Munich</option>
                                                        <option value="Berlin">Berlin</option>
                                                    </optgroup>
                                                    <optgroup label="US">
                                                        <option value="New York">New York</option>
                                                        <option value="Washington" disabled>Washington</option>
                                                        <option value="Michigan">Michigan</option>
                                                    </optgroup>
                                                    <optgroup label="SP">
                                                        <option value="Madrid">Madrid</option>
                                                        <option value="Barcelona">Barcelona</option>
                                                        <option value="Malaga">Malaga</option>
                                                    </optgroup>
                                                    <optgroup label="CA">
                                                        <option value="Montreal">Montreal</option>
                                                        <option value="Toronto">Toronto</option>
                                                        <option value="Vancouver">Vancouver</option>
                                                    </optgroup>
                                                </Form.Select>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="mt-4">
                                    <h5 className="fs-14 mb-3">Text inputs</h5>

                                    <Row>
                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-text-remove-button" className="form-label text-muted">Set limit values with remove button</Form.Label>
                                                <p className="text-muted">Set <code>data-choices data-choices-limit="Required Limit" </code> attribute.</p>
                                                <Form.Control className="form-control" id="choices-text-remove-button" data-choices data-choices-limit="3" type="text" defaultValue="Task-1" />
                                            </div>
                                        </Col>

                                        <Col lg={4} md={6}>
                                            <div className="mb-3">
                                                <Form.Label htmlFor="choices-text-unique-values" className="form-label text-muted">Unique values only, no pasting</Form.Label>
                                                <p className="text-muted">Set <code>data-choices data-choices-text-unique-true</code> attribute.</p>
                                                <Form.Control className="form-control" id="choices-text-unique-values" data-choices data-choices-text-unique-true type="text" defaultValue="Project-A, Project-B" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <div>
                                        <Form.Label htmlFor="choices-text-disabled" className="form-label text-muted">Disabled</Form.Label>
                                        <p className="text-muted">Set <code>data-choices data-choices-text-disabled-true</code> attribute.</p>
                                        <Form.Control className="form-control" id="choices-text-disabled" data-choices data-choices-text-disabled-true type="text" defaultValue="josh@joshuajohnson.co.uk, joe@bloggs.co.uk" ></Form.Control>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Choice;