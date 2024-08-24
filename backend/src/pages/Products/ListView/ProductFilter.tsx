import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCategoryFilter from './ProductCategoryFilter';
import ProductTable from './ProductTable';

const ProductFilter = () => {
  return (
    <React.Fragment>
      <Col xl={3} lg={4}>
        <Card className="overflow-hidden">
          <Card.Header>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-0">Filters</h5>
              </div>
              <div className="flex-shrink-0">
                <Link to="#" className="text-decoration-underline" id="clearall">Clear All</Link>
              </div>
            </div>
          </Card.Header>

          {/* Product Category Filter */}
          <ProductCategoryFilter />

        </Card>
      </Col>

      <Col xl={9} lg={8}>
        <ProductTable />
      </Col>
    </React.Fragment>
  );
};

export default ProductFilter;
