import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { Table, Row, Col, Button } from "react-bootstrap";
import { Filter, DefaultColumnFilter } from "./Filter";

interface GlobalFilterProps {
  preGlobalFilteredRows?: any;
  globalFilter?: any;
  setGlobalFilter?: any;
  SearchPlaceholder?: string;
  isProductsFilter?: boolean;
}

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  SearchPlaceholder,
  isProductsFilter
}: GlobalFilterProps) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = (value: any) => {
    setGlobalFilter(value || undefined);
  };

  return (
    <React.Fragment>
      <Col className="col-sm">
        {/* <div className="search-box me-xxl-2 my-3 my-xxl-0 d-inline-block"> */}
        <div className="d-flex justify-content-sm-end">
          <label htmlFor="search-bar-0" className="search-label">
            {/* <span id="search-bar-0-label" className="sr-only">
                Search this table
              </span> */}
            <input
              onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              id="search-bar-0"
              type="text"
              className="form-control"
              placeholder={SearchPlaceholder}
              value={value || ""}
            />
          </label>
        </div>
        {/* </div> */}
      </Col>

    </React.Fragment>
  );
}

interface TableContainerProps {
  columns?: any;
  data?: any;
  isGlobalFilter?: any;
  isPagination?: any;
  isAddOptions?: any;
  divClassName?: any;
  tableClassName?: any;
  theadClassName?: any,
  tableClass?: any;
  theadClass?: any;
  isBordered?: boolean;
  isAddUserList?: any;
  handleOrderClicks?: any;
  handleUserClick?: any;
  handleCustomerClick?: any;
  isAddCustList?: any;
  customPageSize?: any;
  className?: any;
  customPageSizeOptions?: any;
  iscustomPageSize?: boolean;
  SearchPlaceholder: string;
  isProductsFilter?: boolean;
}

const TableContainer = ({
  columns,
  data,
  tableClass,
  theadClass,
  isBordered,
  isGlobalFilter,
  isPagination,
  isProductsFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  iscustomPageSize,
  customPageSizeOptions,
  SearchPlaceholder
}: TableContainerProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const generateSortingIndicator = (column: any) => {
    return column.isSorted ? (column.isSortedDesc ? <span>&#9650;</span> : <span>&#9660;</span>) : "";
  };

  const onChangeInSelect = (event: any) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <Fragment>
      <Row className="mb-2">
        {iscustomPageSize && (
          <Col md={customPageSizeOptions ? 2 : 1}>
            <select
              className="form-select"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        )}
        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            SearchPlaceholder={SearchPlaceholder}
            isProductsFilter={isProductsFilter}
          />
        )}
        {isAddOptions && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                variant="success"
                className="btn-rounded  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                variant="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                variant="success"
                className="btn-rounded mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <div className="table-responsive react-table">
        <Table hover {...getTableProps()} className={tableClass} bordered={isBordered}>
          <thead className={theadClass}>
            {headerGroups.map((headerGroup: any) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns: any) => (
                  <th key={columns.id}>
                    <div className="mb-2" {...columns.getSortByToggleProps()}>
                      {columns.render("Header")}
                      {generateSortingIndicator(columns)}
                    </div>
                    <Filter column={columns} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell: any) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
      {isPagination && <Row className="align-items-center mt-2 py-2 px-2 gy-2 text-center text-sm-start">
        <div className="col-sm">
          <div className="text-muted">Showing <span className="fw-semibold">{pageIndex + 1}</span> of <span className="fw-semibold">{pageOptions.length}</span> Results</div>
        </div>
        <div className="col-sm-auto">
          <ul className="pagination pagination-separated mb-0 justify-content-center justify-content-sm-start">
            <li className={!canPreviousPage ? "page-item disabled" : "page-item"} onClick={previousPage}>
              <Button variant="link" className="page-link">Previous</Button>
            </li>
            {pageOptions.map((item: any, key: number) => (
              <React.Fragment key={key}>
                <li className="page-item">
                  <Button variant="link" className={pageIndex === item ? "page-link active" : "page-link"} onClick={() => gotoPage(item)}>{item + 1}</Button>
                </li>
              </React.Fragment>
            ))}
            <li className={!canNextPage ? "page-item disabled" : "page-item"} onClick={nextPage}>
              <Button variant="link" className="page-link">Next</Button>
            </li>
          </ul>
        </div>
      </Row>}
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;
