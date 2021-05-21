import React from 'react'
import { Table, Container, Row, Col,Form,Button,FormControl } from 'react-bootstrap';
const Stocks = () => {
    return (
        <div>
            <Container>
            <Form inline>
                        <FormControl type="text" placeholder="Tìm Kiếm Mã Cổ Phiếu" className="mr-sm-2" />
                        <Button variant="outline-success">Tìm Kiếm</Button>
                    </Form>
            <Table responsive="sm">
                            <thead>
                                <tr>

                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Ngày mai</th>
                                    <th>7 ngày</th>
                                    <th>1 tháng</th>
                                    <th>1 năm</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>

                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>

                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>

                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>

                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                            </tbody>
                        </Table>
            </Container>
        </div>
    )
}

export default Stocks
