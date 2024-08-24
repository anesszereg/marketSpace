import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

import offerbanner from "assets/images/ecommerce/offer-banner.jpg";
import img16 from 'assets/images/products/img-16.png';
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Adevertise = () => {
    return (
        <React.Fragment>
            <div className="offer-bar flex-shrink-0">
                <div className="d-flex gap-3 flex-column">
                    <Card className="fs-13 border border-primary border-opacity-25">
                        <Card.Header className="text-center bg-primary-subtle border-0">
                            <h6 className="card-title text-uppercase fs-13 mb-0 text-primary">Deals of the week</h6>
                        </Card.Header>
                        <Card.Body>
                            <div className="px-5">
                                <Image src={img16} alt="" className="img-fluid d-block mx-auto" />
                            </div>
                            <div className="mt-4 text-center">
                                <h4 className="text-dark mb-3">$63.00 <span className="text-muted fs-12"><del>$123.99</del></span></h4>
                                <Link to="#" className="stretched-link"><h5 className="mb-4">Ninja Pro Max Smartwatch</h5></Link>
                            </div>
                            <ProgressBar variant="primary" now={60} className=' progress animated-progress custom-progress' />
                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <div className="flex-grow-1 fw-medium fs-12">
                                    <span className="text-muted">Sold</span>: 451 Items
                                </div>
                                <div className="fw-medium fs-12">
                                    <span className="text-muted">Available</span>: 90 Items
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="offer-banner rounded-3" style={{ backgroundImage: `url(${offerbanner})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Adevertise;