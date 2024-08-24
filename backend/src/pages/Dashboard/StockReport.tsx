import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { stockReport } from "../../Common/data";

const Status = ({ status }: any) => {
    switch (status) {
        case "In Stock":
            return (<span className="badge badge-soft-success"> {status}</span>)
        case "Low Stock":
            return (<span className="badge badge-soft-warning"> {status}</span>)
        default:
            return (<span className="badge badge-soft-danger"> {status}</span>)
    }
}

const StockReport = () => {
    return (
        <React.Fragment>
             <Col xxl={9}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Stock Report</h4>
                        <div className="flex-shrink-0">
                            <Link to="/statistics" className="btn btn-soft-info btn-sm">
                                <i className="ri-file-list-3-line align-middle"></i> Generate Report
                            </Link>
                        </div>
                    </Card.Header>
            
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead className="text-muted table-light">
                                    <tr>
                                        <th scope="col">Product ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Updated Date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Stock Status</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(stockReport || []).map((item, key) => (
                                    <tr key={key}>
                                        <td>
                                            <Link to="/product-overview" className="fw-medium link-primary">{item.productID}</Link>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <img src={item.productImage} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1"><Link to="/product-overview" className="text-reset">{item.productName}</Link></div>
                                            </div>
                                        </td>
                                        <td>{item.updatedDate}</td>
                                        <td>
                                            <span className="text-secondary">{item.amount}</span>
                                        </td>
                                        <td>
                                            <Status status = {item.stockStatus} />
                                        </td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card> 
            </Col>
        </React.Fragment>
    );
};

export default StockReport;