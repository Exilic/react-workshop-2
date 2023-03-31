import React from 'react';

const TableHeader = (props) => {
    return (
        <thead>
        <tr>
        {props.heads.map(head => (
            <th>{head}</th>
        ))}
        </tr>
        </thead>
    );
};

export default TableHeader;