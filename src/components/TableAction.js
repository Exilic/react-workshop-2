import React from 'react';

const TableAction = () => {
    return (
        <td>
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-warning">Edit</button>
        </td>
    );
};

export default TableAction;