import React from 'react';
import { Card, Row, Image } from 'react-bootstrap';

// import Images
import img4 from "assets/images/small/img-4.jpg"
import img5 from "assets/images/small/img-5.jpg"
import img6 from "assets/images/small/img-6.jpg"



const CardGroups = () => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12">
                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                        <h5 className="mb-0 pb-1 text-decoration-underline">Card Groups</h5>
                    </div>
                    <div className="card-group">
                        <Card className="mb-4">
                            <Image className="card-img-top img-fluid" src={img4} alt="Card image cap" />
                            <Card.Body>
                                <h4 className="card-title">A day in the of a professional fashion designer</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </Card.Body>
                            <div className="card-footer">
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </Card>
                        <Card className="mb-4">
                            <Image className="card-img-top img-fluid" src={img5} alt="Card image cap" />
                            <Card.Body>
                                <h4 className="card-title">Manage white space in responsive layouts ?</h4>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </Card.Body>
                            <div className="card-footer">
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </Card>
                        <Card className="mb-4">
                            <Image className="card-img-top img-fluid" src={img6} alt="Card image cap" />
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
                    </div>
                </div>
            </Row>
        </React.Fragment>
    )
}

export default CardGroups;