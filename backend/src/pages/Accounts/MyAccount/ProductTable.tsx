import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { profile } from "Common/data";
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductTable = () => {
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
                Header: "Order ID",
                accessor: (cellProps: any) => {
                    return (
                        <Link to="#" className="fw-medium">{cellProps.id}</Link>
                    )
                },
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Product Name",
                Cell: (product: any) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                            <div className="avatar-title bg-light rounded">
                                <img
                                    src={product.row.original.img}
                                    alt=""
                                    className="avatar-xs"
                                />
                            </div>
                            </div>
                            <div className="flex-grow-1">
                            <h5 className="fs-14 mb-1">
                                <Link
                                to="/apps-ecommerce-product-details"
                                className="d-block text-reset"
                                >
                                {" "}
                                {product.row.original.title}
                                </Link>
                            </h5>
                            <p className="text-muted mb-0">
                                Category :{" "}
                                <span className="fw-medium">
                                {" "}
                                {product.row.original.type}
                                </span>
                            </p>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                Header: "Stock",
                accessor: "stock",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Rate",
                accessor: "rating",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Price",
                accessor: "price",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Orders",
                accessor: "orders",
                disableFilters: true,
                filterable: true,
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
                data={(profile || [])}
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

export default ProductTable;