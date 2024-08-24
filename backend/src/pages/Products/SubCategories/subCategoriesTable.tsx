import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { subCategoryListData } from 'Common/data';
import TableContainer from 'Common/TableContainer';

const SubCategoriesTable = () => {
  const columns = useMemo(() => [
    {
      Header: "Id",
      Filter: true,
      Cell: (cellProps: any) => {
        return (
          <span>
            <div className="fw-medium">{cellProps.row.original.subCategoryId}</div>
          </span>
        );
      },
    },
    {
      Header: "Subcategory",
      accessor: "subcategory",
      Filter: true,
    },
    {
      Header: "Category",
      accessor: "category",
      Filter: true,
    },
    {
      Header: "Craetedby",
      accessor: "craetedby",
      Filter: true
    },
    {
      Header: "Action",
      Filter: false,
      Cell: (cellProps: any) => {
        return (
          <span>
            <ul className="hstack gap-2 list-unstyled mb-0">
              <li>
                <Link to="#" className="badge badge-soft-success">Edit</Link>
              </li>
              <li>
                <Link to="#" className="badge badge-soft-danger">Delete</Link>
              </li>
            </ul>
          </span>
        );
      },
    }
  ],
    []
  );
  return (
    <React.Fragment>
      <div>
        <TableContainer
          columns={columns}
          data={(subCategoryListData || [])}
          // isGlobalFilter={true}
          customPageSize={10}
          // divClassName="table-responsive mb-1"
          tableClassName="gridjs-table"
          theadClassName="gridjs-thead"
          SearchPlaceholder='Search Products...'
        />
      </div>
    </React.Fragment>
  );
};

export default SubCategoriesTable;
