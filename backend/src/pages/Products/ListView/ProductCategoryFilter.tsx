import React, { useEffect, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Nouislider
import Nouislider from "nouislider-react";
import "../../../../node_modules/nouislider/distribute/nouislider.css";
import ProductSelectColor from './ProductSelectColor';
import ProductSize from './ProductSize';
import ProductDiscount from './ProductDiscount';
import ProductRating from './ProductRating';

const ProductCategoryFilter = () => {
    const [mincost, setMincost] = useState<number>(0);
    const [maxcost, setMaxcost] = useState<number>(2000);

    //Product Filter
    const onUpdate = (value: any) => {
        setMincost(value[0]);
        setMaxcost(value[1]);
    }
    useEffect(() => {
        onUpdate([0, 2000]);
    }, []);
    return (
        <React.Fragment>
            <Accordion flush defaultActiveKey="0" className="filter-accordion">
                <Card.Body className="border-bottom">
                    <div>
                        <p className="text-muted text-uppercase fs-13 mb-3">Products</p>
                        <ul className="list-unstyled mb-0 filter-list">
                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Grocery</h6>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Fashion</h6>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge bg-light text-muted">5</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Watches</h6>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Electronics</h6>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge bg-light text-muted">5</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Furniture</h6>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge bg-light text-muted">6</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Automotive Accessories</h6>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Appliances</h6>
                                    </div>
                                    <div className="flex-shrink-0 ms-2">
                                        <span className="badge bg-light text-muted">7</span>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className="d-flex py-1 align-items-center">
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 listname">Kids</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Card.Body>

                <Card.Body className="border-bottom">
                    <p className="text-muted text-uppercase fs-12 fw-medium mb-4">
                        Price
                    </p>

                    <Nouislider
                        range={{ min: 0, max: 2000 }}
                        start={[mincost, maxcost]}
                        connect
                        onSlide={onUpdate}
                        data-slider-color="info"
                        id="product-price-range"
                    />
                    <div className="formCost d-flex gap-2 align-items-center mt-3">
                        <input type="text" className="form-control form-control-sm" id="MinCost" value={mincost} onChange={(e: any) => setMincost(e.target.value)} />
                        <span className="fw-semibold text-muted">to</span>
                        <input className="form-control form-control-sm" type="text" id="maxCost" value={maxcost} onChange={(e: any) => setMaxcost(e.target.value)} />
                    </div>
                </Card.Body>

                {/* ProductSelectColor */}
                <Accordion.Item eventKey="0">
                    <ProductSelectColor />
                </Accordion.Item>

                {/* ProductSize */}
                <ProductSize />

                {/* ProductDiscount */}
                <ProductDiscount />

                {/* ProductRating */}
                <ProductRating />
            </Accordion>
        </React.Fragment>
    )
}

export default ProductCategoryFilter
