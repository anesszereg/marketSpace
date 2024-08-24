import React from 'react';
import SimpleBar from 'simplebar-react';
import { newcustomers } from "Common/data";
import { Link } from 'react-router-dom';

const NewCustomers = () => {
    return (
        <React.Fragment>
            <div className="col-xxl-3 col-lg-6">
                <div className="card card-height-100">
                    <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">New Customers</h4>
                        <Link to="/users-list" className="flex-shrink-0">View All <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                    </div>
            
                    <SimpleBar style={{maxHeight: "445px"}}>
                        {(newcustomers || []).map((item, key) => (
                        <div className="p-3 border-bottom border-bottom-dashed" key={key}>
                            <div className="d-flex align-items-center gap-2">
                                <div className="flex-shrink-0">
                                    <img src={item.productImage} alt="" className="rounded dash-avatar" />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">{item.productName}</h6>
                                    <p className="fs-13 text-muted mb-0">{item.date}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link to="mailto:careytommy@toner.com" className="btn btn-icon btn-sm btn-soft-danger"><i className="ph-envelope"></i></Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </SimpleBar>
                </div> 
            </div>
        </React.Fragment>
    );
}

export default NewCustomers;