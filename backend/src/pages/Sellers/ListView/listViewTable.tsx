import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { sellerList } from "Common/data";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ListViewTable = () => {

    const columns = useMemo(
        () => [
            {
                Header: (<div className="form-check"> <input className="form-check-input" type="checkbox" id="checkAll" value="option" /> </div>),
                Cell: (cellProps: any) => {
                    return (<div className="form-check"> <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" /> </div>);
                },
                id: '#',
            },
            {
                Header: "Seller Name",
                accessor: "sellerName",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Item Stock",
                accessor: "itemStock",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Balance",
                accessor: "balance",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Email",
                accessor: "email",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Phone",
                accessor: "phone",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Create Date",
                accessor: "createDate",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Account Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Active":
                            return (<span className="badge badge-soft-success text-uppercase"> {cellProps.status}</span>)
                        case "Inactive":
                            return (<span className="badge badge-soft-danger text-uppercase"> {cellProps.status}</span>)
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
                        <div className="d-flex gap-2">
                            <div>
                                <Link to="/seller-overview" className="btn btn-sm btn-soft-secondary">View</Link>
                            </div>
                            <div className="edit">
                                <Link className="btn btn-sm btn-soft-info edit-item-btn" to="#showModal" data-bs-toggle="modal">Edit</Link>
                            </div>
                            <div className="remove">
                                <Button variant='soft-danger' size="sm" className="remove-item-btn" data-bs-toggle="modal" data-bs-target="#deleteRecordModal">Remove</Button>
                            </div>
                        </div>
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
                data={(sellerList || [])}
                // isGlobalFilter={false}
                iscustomPageSize={false}
                isBordered={false}
                customPageSize={10}
                className="custom-header-css table align-middle table-nowrap"
                tableClassName="table-centered align-middle table-nowrap mb-0"
                theadClassName="text-muted table-light"
                SearchPlaceholder='Search Products...'
            />
        </React.Fragment>
    );
};

export default ListViewTable;