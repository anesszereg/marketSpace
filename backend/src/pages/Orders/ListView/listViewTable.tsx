import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";

import { ordersList } from "Common/data";
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const ListViewTable = () => {

    const columns = useMemo(
        () => [
            {
                Header: (<div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                </div>),
                Cell: (cellProps: any) => {
                    return (<div className="form-check">
                        <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                    </div>);
                },
                id: '#',
            },
            {
                Header: "Order ID",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return <Link to="#" className="fw-medium link-primary">{cellProps.orderId}</Link>;
                },
            },
            {
                Header: "Customer",
                accessor: "customer_name",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Product Name",
                accessor: "product_name",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Amount",
                accessor: "amount",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Order Date",
                accessor: "order_date",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Delivery Date",
                accessor: "delivery_date",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Payment Method",
                accessor: "payment_method",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Delivered":
                            return (<span className="badge badge-soft-success text-uppercase"> {cellProps.status}</span>)
                        case "Cancelled":
                            return (<span className="badge badge-soft-danger text-uppercase"> {cellProps.status}</span>)
                        case "Pending":
                            return (<span className="badge badge-soft-warning text-uppercase"> {cellProps.status}</span>)
                        case "Inprogress":
                            return (<span className="badge badge-soft-secondary text-uppercase"> {cellProps.status}</span>)
                        case "Returns":
                            return (<span className="badge badge-soft-primary text-uppercase"> {cellProps.status}</span>)
                        default:
                            return (<span className="badge badge-soft-success text-uppercase"> {cellProps.status}</span>)
                    }
                },
            },
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <React.Fragment>
                            <Dropdown className="text-center">
                                <Dropdown.Toggle href="#!" className="btn btn-soft-secondary btn-sm btn-icon dropdown arrow-none">
                                    <i className="mdi mdi-dots-horizontal" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                    <li>
                                        <Dropdown.Item href="/orders-overview">
                                            <i className="ri-eye-fill align-bottom me-2 text-muted" /> View
                                        </Dropdown.Item>
                                    </li>
                                    <li>
                                        <Dropdown.Item href="#" className="remove-list">
                                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />Delete
                                        </Dropdown.Item>
                                    </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </React.Fragment>
                    )
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            <TableContainer
                columns={(columns || [])}
                data={(ordersList || [])}
                // isGlobalFilter={false}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={10}
                className="custom-header-css"
                tableClassName="table-centered align-middle table-nowrap mb-0"
                theadClassName="text-muted table-light"
                SearchPlaceholder='Search Products...'
            />
        </React.Fragment>
    );
}

export default ListViewTable;