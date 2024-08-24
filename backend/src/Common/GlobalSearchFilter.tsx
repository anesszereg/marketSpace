import React from 'react';
import { Link } from "react-router-dom";

const ProductsGlobalFilter = () => {
    return (
        <React.Fragment>
            <div className="col-sm-auto">
                <div>
                    <Link to="/apps-ecommerce-add-product" className="btn btn-success">
                        <i className="ri-add-line align-bottom me-1"></i> Add Product
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export {
    ProductsGlobalFilter
};