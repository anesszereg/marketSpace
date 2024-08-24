import React from 'react';
import { Row , Col , Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { form } from 'Common/data';

const Form = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5 className="card-title text-uppercase mb-0">Forms</h5>
                </Card.Header>
                <Card.Body>
                    <Row className="gy-4">
                        {(form || []).map((item:any, key:number) => (
                            <Col xxl={3} lg={4} md={6} key={key}>
                                <Card className="mb-0">
                                    <Card.Body>
                                        <h6 className="fs-15">{item.title}</h6>
                                        <p className="text-muted mb-3 text-truncate-two-lines">{item.description}</p>
                                        <Link to={item.link}>Read More <i className="bi bi-arrow-right align-middle"></i></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Form;