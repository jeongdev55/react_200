import React, { Component } from 'react';
import { Table } from 'reactstrap';

class R054_ReactstrapTable extends Component{
    render(){
        return(
            <Table striped borderless hover  size="sm">
            {/* <Table dark bordered>
                <Table striped hover>
                <Table borderless size="sm"} */}
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>react 200</td>
                        <td>$1000</td>
                    </tr>
                    <tr>
                        <td scope="row">1</td>
                        <td>react 200</td>
                        <td>$1000</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}
export default R054_ReactstrapTable;