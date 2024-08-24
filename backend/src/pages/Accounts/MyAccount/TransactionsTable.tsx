import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { accountTransaction } from "Common/data";

const TransactionsTable = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Transaction ID",
                accessor: "TransactionID",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "From",
                accessor: "From",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "To",
                accessor: "To",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Timestamp",
                accessor: "Timestamp",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Payment Method",
                accessor: "PaymentMethod",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Amount",
                accessor: "Amount",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.Status) {
                        case "Success":
                            return (<span className="badge badge-soft-success text-uppercase"> {cellProps.Status}</span>)
                        case "Pending":
                            return (<span className="badge badge-soft-warning text-uppercase"> {cellProps.Status}</span>)
                        case "Failed":
                            return (<span className="badge badge-soft-danger text-uppercase"> {cellProps.Status}</span>)
                        default:
                            return (<span className="badge badge-soft-success text-uppercase"> {cellProps.Status}</span>)
                    }
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            <TableContainer
                columns={(columns || [])}
                data={(accountTransaction || [])}
                isGlobalFilter={false}
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

export default TransactionsTable;