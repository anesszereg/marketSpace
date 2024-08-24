import React from 'react';
import SimpleBar from 'simplebar-react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productDelivery } from "../../Common/data";

const ProductDelivery = () => {
    return (
        <React.Fragment>
             <Col xxl={3} lg={6}>
                <Card>
                    <Card.Header className="d-flex">
                        <h5 className="card-title flex-grow-1 mb-0">Product Delivery</h5>
                        <Link to="#" className="flex-shrink-0">View All <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                    </Card.Header>
                    <Card.Body className="px-0">
                        <SimpleBar style={{maxHeight: "415px"}}>
                            <div className="vstack gap-3 px-3">
                                {(productDelivery || []).map((item, key) => (
                                    <div className="p-3 border border-dashed rounded-3" key={key}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="avatar-sm bg-light rounded p-1 flex-shrink-0">
                                                <img src={item.productImage} alt="" className="img-fluid d-block" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <Link to="/product-overview">
                                                    <h6>{item.productName}</h6>
                                                </Link>
                                                <p className="mb-0">by: <span className="text-info">{item.productBy}</span></p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="badge badge-soft-warning">{item.productStatus}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SimpleBar>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default ProductDelivery;