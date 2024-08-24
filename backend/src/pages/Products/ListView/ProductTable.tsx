import React, { useMemo } from 'react';
import { productList } from 'Common/data';
import TableContainer from 'Common/TableContainer';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProductTable = () => {

  const handleValidDate = (date: any) => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  const handleValidTime = (time: any) => {
    const time1 = new Date(time);
    const getHour = time1.getUTCHours();
    const getMin = time1.getUTCMinutes();
    const getTime = `${getHour}:${getMin}`;
    var meridiem = "";
    if (getHour >= 12) {
      meridiem = "PM";
    } else {
      meridiem = "AM";
    }
    const updateTime = moment(getTime, 'hh:mm').format('hh:mm') + " " + meridiem;
    return updateTime;
  };

  const columns = useMemo(() => [
    {
      Header: "#",
      Cell: (cell: any) => {
        return <input type="checkbox" className="productCheckBox form-check-input" value={cell.row.original._id} />;
      },
    },
    {
      Header: "Product name",
      Cell: (product: any) => (
        <>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 me-3">
              <div className="avatar-sm bg-light rounded p-1">
                <img
                  src={product.row.original.productImg}
                  alt=""
                  className="img-fluid d-block"
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
                  {product.row.original.productTitle}
                </Link>
              </h5>
              <p className="text-muted mb-0">
                Category :{" "}
                <span className="fw-medium">
                  {" "}
                  {product.row.original.category}
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
      Filter: false,
    },
    {
      Header: "Rate",
      Filter: false,
      accessor: (cellProps: any) => {
        return (
          <span>
            <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1"></i>{cellProps.rating}</span>
          </span>
        )
      }
    },
    {
      Header: "Price",
      accessor: "price",
      Filter: false
    },
    {
      Header: "Orders",
      accessor: "orders",
      Filter: false,
    },
    {
      Header: "Publish",
      Filter: false,
      accessor: (cellProps: any) => {
        return (<span>{handleValidDate(cellProps.publish)}<small className="text-muted ms-1">{handleValidTime(cellProps.publish)}</small></span>)
      }
    },
    {
      Header: "Action",
      Cell: (cellProps: any) => {
        return (
          <React.Fragment>
            <Dropdown className="text-center">
              <Dropdown.Toggle href="#" className="btn btn-ghost-primary btn-icon btn-sm arrow-none">
                <i className="mdi mdi-dots-horizontal" />
              </Dropdown.Toggle>
              <Dropdown.Menu as="ul" className="dropdown-menu-end">
                <li>
                  <Dropdown.Item href="/product-create">
                    <i className="ri-pencil-fill align-bottom me-2 text-muted" /> Edit
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
        );
      },
    },
  ],
    []
  );
  return (
    <React.Fragment>
      <Row className="g-4 mb-4">
          <Col className="col-sm-auto">
              <div>
                <Link to="/product-create" className="btn btn-success" id="addproduct-btn"><i className="ri-add-line align-bottom me-1"></i> Add Product</Link>
              </div>
          </Col>
          <Col className="col-sm">
              <div className="d-flex justify-content-sm-end">
                  <div className="search-box ms-2">
                    <Form.Control type="text" autoComplete="off" id="searchProductList" placeholder="Search Products..." />
                    <i className="ri-search-line search-icon"></i>
                  </div>
              </div>
          </Col>
      </Row>
      <div>
        <TableContainer
          columns={columns}
          data={(productList || [])}
          // isGlobalFilter={true}
          isAddUserList={false}
          customPageSize={10}
          // divClassName="table-responsive mb-1"
          tableClassName="gridjs-table"
          theadClassName="gridjs-thead"
          isProductsFilter={true}
          SearchPlaceholder='Search Products...'
        />
      </div>
    </React.Fragment>
  );
};

export default ProductTable;
