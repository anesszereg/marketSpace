import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomerSatisfaction from './CustomerSatisfaction';
import NewCustomers from './NewCustomers';
import ProductDelivery from './ProductDelivery';
import Revenue from './Revenue';
import StockReport from './StockReport';
import TopCategories from './TopCategories';
import TopProducts from './TopProducts';
import TopSalesLocation from './TopSalesLocation';
import Widgets from './Widgets';
import RecentOrders from './RecentOrders';

const Dashboard = () => {

    document.title = "Dashboard | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xxl={12} lg={6} className="order-first">
                            <Row className="row-cols-xxl-4 row-cols-1">
                                <Widgets />
                            </Row>
                        </Col>
                        <Revenue />
                        <TopSalesLocation />
                    </Row>
                    <Row>
                        <RecentOrders />
                    </Row>
                    <Row className='widget-responsive-fullscreen'>
                        <CustomerSatisfaction />
                        <StockReport />
                        <ProductDelivery />
                        <TopCategories />
                        <NewCustomers />
                        <TopProducts />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;