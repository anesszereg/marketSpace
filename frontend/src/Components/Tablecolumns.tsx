import React, { useMemo } from "react";
import { Dropdown, Image } from "react-bootstrap";
import ReactTable from "./Reacttable";

const TableColumns = ({ data }: any) => {

    const columns: any = useMemo(() =>
        [
            {
                Header: 'Product Name',
                accessor: (Product: any) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-2 avatar-sm">
                                <div className="avatar-title bg-light rounded">
                                    <Image src={Product.productImg} alt="" className="avatar-xs" />
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="fs-14">{Product.productTitle}</h6>
                                <p className="mb-0 fs-13 text-muted">{Product.category}</p>
                            </div>
                        </div>
                    </>
                ),
                filterable: true,
            },
            {
                Header: 'Rate',
                accessor: (row: any) => (
                    <>
                        <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1"></i>{row.rating}</span>
                    </>
                ),
                filterable: true,
            },
            {
                Header: 'Price',
                accessor: (row: any) => (
                    <>
                        <span ><div style={{ width: "80px" }}>${row.price} <span className="text-muted fs-12"><del>{row.deletprice || ''}</del></span></div></span>
                    </>
                ),
                filterable: true,
            },
            {
                Header: 'Status',
                accessor: (row: any) => (
                    <>
                        <span className={`badge badge-soft-${row.bg} align-middle ms-1`}>{row.stock}</span>
                    </>
                ),
                filterable: true,
            },
            {
                Header: 'Action',
                accessor: (row: any) => (
                    <>
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="arrow-none">
                                <i className='mdi mdi-dots-horizontal '></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as="ul">
                                <Dropdown.Item as="li" href="#/action-1"><i className="ri-eye-line me-2 align-bottom text-muted"></i>View</Dropdown.Item>
                                <Dropdown.Item as="li" href="#/action-2"><i className="ri-shopping-cart-line me-2 align-bottom text-muted"></i>cart</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </>
                ),
                sortable: true,
            },
        ]
        , []);
    return (
        <React.Fragment>
            <ReactTable columns={columns} data={data} />
        </React.Fragment>
    );
}

export default TableColumns;