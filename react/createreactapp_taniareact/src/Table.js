import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td><button onClick={() => props.deleteRow(index)}>Delete</button></td>
        </tr>
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody characterData={this.props.characterData} deleteRow={this.props.deleteRow} />
            </table>
        );
    }
}

export default Table;
