import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import { product } from "Common/data";
import { ProductSide } from "Components/ProductSilde";

const TopProducts = () => {

    const [select, setSelect] = useState<any>(product);
    const setCategories = (categories: any) => {
        setSelect(product?.filter((filters: any) => categories === filters.category || categories === "All"))
    }
    return (
        <React.Fragment>
            <section className="section pt-0">
                <Container >
                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className="text-center">
                                <ul className="list-inline categories-filter animation-nav" id="filter">
                                    <li className="list-inline-item" onClick={() => setCategories("All")}><Link to="#" className="categories active"  >All Arrival</Link></li>
                                    <li className="list-inline-item" onClick={() => setCategories("seller hot")}><Link to="#" className="categories" >Best Seller</Link></li>
                                    <li className="list-inline-item" onClick={() => setCategories("hot arrival")}><Link to="#" className="categories" >Hot Collection</Link></li>
                                    <li className="list-inline-item" onClick={() => setCategories("trendy")}><Link to="#" className="categories" >Trendy</Link></li>
                                    <li className="list-inline-item" onClick={() => setCategories("arrival")}><Link to="#" className="categories" >New Arrival</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <ProductSide
                            isnone
                            fileter={select}
                            cid='gallery-wrapper mt-4 pt-2'
                            cxxl="3"
                            show="show"
                        />
                        <div className="mt-4 text-center">
                            <Link to='/product-list/defualt' className="btn btn-soft-primary btn-hover">View All Products <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                        </div>
                    </Row>
                </Container>
            </section >
        </React.Fragment >
    )
}

export default TopProducts;