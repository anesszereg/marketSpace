import React from 'react';
import { Card, Form, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductTable from './ProductTable';
import RecentOrdersTable from './RecentOrdersTable';
import TransactionsTable from './TransactionsTable';

const MyAccount = () => {
    return (
        <React.Fragment>
            <Tab.Container defaultActiveKey="RecentOrders">
            <div className="d-flex align-items-center gap-3 mb-4">
                <Nav as="ul" className="nav nav-pills flex-grow-1 mb-0">
                    <Nav.Item as="li">
                        <Nav.Link eventKey="RecentOrders">
                            Recent Orders
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="Products">
                            Products
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="Transactions">
                            Transactions
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="flex-shrink-0">
                    <Link to="/settings" className="btn btn-success">Profile Settings</Link>
                </div>
            </div>

                <Tab.Content className="text-muted">
                    <Tab.Pane eventKey="RecentOrders">
                        <Card>
                            <Card.Header className="d-sm-flex align-items-center gap-3">
                                <h5 className="card-title mb-0 flex-grow-1">Recent Orders</h5>
                                <div className="search-box mt-3 mt-sm-0">
                                    <Form.Control type="text" className="search w-md" placeholder="Search for order ID, customer, order status or something..." />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Card.Header>
                            <RecentOrdersTable />
                        </Card>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Products">
                        <Card>
                            <Card.Header className="d-sm-flex align-items-center gap-3">
                                <h5 className="card-title mb-0 flex-grow-1">Products</h5>
                                <div className="search-box mt-3 mt-sm-0">
                                    <Form.Control type="text" className="search w-md" placeholder="Search for product ID, product, order or something..." />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Card.Header>
                            <ProductTable />
                        </Card>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Transactions">
                        <Card>
                            <Card.Header className="d-sm-flex align-items-center gap-3">
                                <h5 className="card-title mb-0 flex-grow-1">Transactions</h5>
                                <div className="search-box mt-3 mt-sm-0">
                                    <Form.Control type="text" className="search w-md" placeholder="Search for transactions or something..." />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Card.Header>
                            <TransactionsTable />
                        </Card>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </React.Fragment>
    );
};

export default MyAccount;