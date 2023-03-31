import React from 'react';
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = (props) => {
    const heads = [...Object.keys(props.data[0]), 'action'];

    return (
        <table className="table">
            <TableHeader heads={heads} />
            <tbody>
            {props.data.map(rowData => <TableRow data={rowData} heads={heads}/> )}
            </tbody>
        </table>
    );
};

export default Table;