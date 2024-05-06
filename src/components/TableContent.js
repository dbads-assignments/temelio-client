import React from 'react';
import '../css/Table.css'

const TableComponent = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Email Content</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nonProfitName}</td>
                        <td>{item.nonprofitEmail}</td>
                        <td>{item.emailContent}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
