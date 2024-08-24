import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TagButtonsExample } from './UiButtonCode';

const ButtonsTag = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg = {12}>
                    <Card>
                        <Card.Header className="align-items-center">
                            <h4 className="card-title mb-0">Buttons Tag</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn</code> className with different HTML elements. (though some browsers may apply a slightly different rendering)</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Link className="btn btn-primary" to="#" role="button">Link</Link>
                                <Button className="btn btn-success" type="submit">Button</Button>
                                <Button className="btn btn-info" type="button" value="Input" >Input</Button>
                                <Button className="btn btn-danger" type="submit" value="Submit" >Submit</Button>
                                <Button className="btn btn-warning" type="reset" value="Reset" >Reset</Button>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <TagButtonsExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    )
}

export default ButtonsTag;