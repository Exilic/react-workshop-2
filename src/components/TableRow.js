import React from 'react';
import TableAction from "./TableAction";

const TableRow = (props) => {
    return (
        <tr>
            {props.heads.map(cell => (
                cell === 'action' ? <TableAction /> :
                props.data[cell] !== 'null' ? <td>{props.data[cell]}</td> : <td></td>
                ))
            }
        </tr>
    );
};

export default TableRow;