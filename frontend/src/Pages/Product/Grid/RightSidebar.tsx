import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import EmailClothe from 'Pages/Catalog/EmailClothe';
import { CommonService } from 'Components/CommonService';
import { ProductGrid, ProductSide } from 'Components/ProductSilde';
import ProductFilter from './ProductFilter';
import { product } from 'Common/data';

const RightSidebar = () => {
    const [select, setSelect] = useState(product);
    const handleSelect = (event: any) => {
        setSelect(product?.filter((sort: any) => sort.sortBy === event.value || sort === "all"))
    }
    return (
        <React.Fragment>
            <ProductGrid title="Product Grid Right Sidebar" />
            <section className='position-relative section'>
                <Container>
                    <div className='ecommerce-product gap-4'>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <p className="text-muted flex-grow-1 mb-0">Showing 1-12 of 84 results</p>

                                <div className="flex-shrink-0">
                                    <Form.Select className="w-md" id="sort-elem" onClick={(e) => handleSelect(e.target)}>
                                        <option value="all">All</option>
                                        <option value="lowtohigh">Low to High</option>
                                        <option value="hightolow">High to Low</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <ProductSide cid="product-grid-right" fileter={select} />
                        </div>
                        < ProductFilter name="sidebar small-sidebar flex-shrink-0" setSelect={setSelect} />
                    </div>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment >
    )
}

export default RightSidebar;