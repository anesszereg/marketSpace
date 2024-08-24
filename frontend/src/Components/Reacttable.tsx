import React from "react";
import { Table } from "react-bootstrap";
import { useTable } from "react-table";

const ReactTable = ({ columns, data }: any) => {
    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow, } = useTable({ columns, data });

    return (
        <React.Fragment>
            <Table {...getTableProps()}>
                <thead>
                    {
                        headerGroups?.map((headerGroup: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup?.headers?.map((columnss: any) => (
                                        <th {...columnss.getHeaderProps()}>{columnss.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows?.map((row: any) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells?.map((cell: any) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default ReactTable;