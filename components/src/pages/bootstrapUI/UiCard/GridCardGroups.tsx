import React from 'react';
import { Card, Row, Image, Col } from 'react-bootstrap';

// import Images

import img8 from "assets/images/small/img-8.jpg"
import img5 from "assets/images/small/img-5.jpg"
import img10 from "assets/images/small/img-10.jpg"

const GridCardGroups = () => {
    return (
        <React.Fragment>
            <Row className="g-3">
                <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                    <h5 className="mb-0 pb-1 text-decoration-underline">Grid Card Groups</h5>
                </div>
                <Col xxl md={4} className="col-xxl col-md-4">
                    <Card className="h-100">
                        <Card.Header>
                            <h4 className="card-title mb-0">A day in the of a professional fashion designer</h4>
                        </Card.Header>
                        <Image className="img-fluid" src={img8} alt="Card image cap" />
                        <Card.Body>
                            <p className="card-text">This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.</p>
                        </Card.Body>
                        <div className="card-footer">
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col xxl md={4}>
                    <Card className=" h-100">
                        <Image className="card-img-top img-fluid" src={img10} alt="Card image cap" />
                        <Card.Body>
                            <h4 className="card-title">Give your text a good structure?</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </Card.Body>
                        <div className="card-footer">
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col xxl md={4}>
                    <Card className="h-100">
                        <Image className="card-img-top img-fluid" src={img5} alt="Card image cap" />
                        <Card.Body>
                            <h4 className="card-title">Manage white space in responsive layouts ?</h4>
                            <p className="card-text">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. ommodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                        </Card.Body>
                        <div className="card-footer">
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GridCardGroups;