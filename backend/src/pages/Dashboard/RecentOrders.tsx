import React, { useMemo } from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';

//TableContainer
import TableContainer from "../../Common/TableContainer";
import { recentOrders } from "../../Common/data";
import { Link } from 'react-router-dom';
import CustomDropdownToggle from 'Common/CustomDropdownToggle';

const RecentOrders = () => {

  const columns = useMemo(
    () => [
      {
        Header: "Order ID",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return <Link to="#" className="fw-medium link-primary">{cellProps.purchaseID}</Link>;
        },
      },
      {
        Header: "Product Name",
        accessor: "customerName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Customer Name",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <React.Fragment>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                  <img src={cellProps.productImage} width="32" height={32} alt="" className="avatar-xs rounded-circle" />
                </div>
                <div className="flex-grow-1">{cellProps.productName}</div>
              </div>
            </React.Fragment>
          );
        },
      },
      {
        Header: "Amount",
        accessor: "amount",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Order Date",
        accessor: "orderDate",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Delivery Date",
        accessor: "deliveryDate",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Vendor",
        accessor: "vendor",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Rating",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (<React.Fragment>
            {cellProps.rating} <i className="bi bi-star-half ms-1 text-warning fs-12"></i>
          </React.Fragment>)
        }
      },
      {
        Header: "Status",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          switch (cellProps.status) {
            case "Paid":
              return (<span className="badge badge-soft-success"> {cellProps.status}</span>)
            case "Unpaid":
              return (<span className="badge badge-soft-danger"> {cellProps.status}</span>)
            case "Pending":
              return (<span className="badge badge-soft-warning"> {cellProps.status}</span>)
            default:
              return (<span className="badge badge-soft-success"> {cellProps.status}</span>)
          }
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Col xl={12}>
        <Card>
          <Card.Header className="align-items-center d-flex mb-n2">
            <h4 className="card-title mb-0 flex-grow-1">Recent Orders</h4>
            <div className="flex-shrink-0">
              <Dropdown className="card-header-dropdown">
                <Dropdown.Toggle as={CustomDropdownToggle} className="text-reset dropdown-btn">
                  <span className="fw-semibold text-uppercase fs-12">Sort by:
                  </span><span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="start" className="dropdown-menu-end">
                  <Dropdown.Item href="#">Today</Dropdown.Item>
                  <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                  <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                  <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                  <Dropdown.Item href="#">This Month</Dropdown.Item>
                  <Dropdown.Item href="#">Last Month</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Header>

          {/* <Card.Body> */}
          <TableContainer
            columns={(columns || [])}
            data={(recentOrders || [])}
            isGlobalFilter={false}
            iscustomPageSize={false}
            isBordered={false}
            customPageSize={6}
            className="custom-header-css"
            tableClass="table-centered align-middle table-nowrap mb-0"
            theadClass="text-muted table-light"
            SearchPlaceholder='Search Products...'
          />
          {/* </Card.Body> */}
        </Card>
      </Col>

    </React.Fragment>
  );
};

export default RecentOrders;