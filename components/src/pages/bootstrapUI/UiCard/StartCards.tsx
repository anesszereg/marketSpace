import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';


// import Images
import Ima1 from "assets/images/small/img-1.jpg"
import Ima2 from "assets/images/small/img-2.jpg"
import Ima3 from "assets/images/small/img-3.jpg"
import Ima4 from "assets/images/small/img-4.jpg"

const StartCards = () => {
    document.title=" Cards | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                    <Breadcrumb breadcrumb="Base Ui" breadcrumbItem="Cards" />
                    <Row>
                        <Col sm={6} xl={3}>
                            <Card>
                                <img className="card-img-top img-fluid" src={Ima1} alt="Card cap" />
                                <Card.Body>
                                    <h4 className="card-title mb-2">Web Developer</h4>
                                    <p className="card-text">At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                    <div className="text-end">
                                    <Button href="#" variant="primary">Submit</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <div className="col-sm-6 col-xl-3">
                            <Card>
                                <img className="card-img-top img-fluid" src={Ima2} alt="Card cap" />
                                <Card.Body>
                                    <h4 className="card-title mb-2">How apps is changing the IT world</h4>
                                    <p className="card-text mb-0">Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <Link to="#" className="card-link link-secondary">Read More <i className="ri-arrow-right-s-line ms-1 align-middle lh-1"></i></Link>
                                    <Link to="#" className="card-link link-success">Bookmark <i className="ri-bookmark-line align-middle ms-1 lh-1"></i></Link>
                                </div>
                            </Card>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <Card>
                                <img className="card-img-top img-fluid" src={Ima3} alt="Card cap" />
                                <Card.Body>
                                    <p className="card-text">We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all making mistakes.</p>
                                </Card.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </Card>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <Card>
                                <Card.Body>
                                    <h4 className="card-title mb-2">What planning process needs ?</h4>
                                    <h6 className="card-subtitle font-14 text-muted">Development</h6>
                                </Card.Body>
                                <img className="img-fluid" src={Ima4} alt="Card cap" />
                                <Card.Body>
                                    <p className="card-text">Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <Link to="#" className="card-link link-secondary">Read More <i className="ri-arrow-right-s-line ms-1 align-middle lh-1"></i></Link>
                                    <Link to="#" className="card-link link-success">Bookmark <i className="ri-bookmark-line align-middle ms-1 lh-1"></i></Link>
                                </div>
                            </Card>
                        </div>
                    </Row>
            </div>
        </React.Fragment>
    )
}

export default StartCards;