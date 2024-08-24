import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { currencyRate } from "Common/data";
import { Link } from 'react-router-dom';

const CurrencyTable = () => {

    const columns = useMemo(
        () => [
            {
                Header: "Currency Name",
                accessor: "currencyName",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "USD",
                accessor: "usd",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Type",
                accessor: "type",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Exchange Rate (USD)",
                accessor: "exchangeRate",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <ul className="list-unstyled hstack gap-2 mb-0">
                            <li>
                                <Link className="btn btn-sm btn-icon btn-soft-secondary edit-item-btn" to="#"><i className="ph-pencil"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="btn btn-sm btn-icon btn-soft-danger remove-item-btn"><i className="ph-trash"></i></Link>
                            </li>
                        </ul>
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
                data={(currencyRate || [])}
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
}

export default CurrencyTable;