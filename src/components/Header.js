import React from 'react'
import { Dropdown, Alert,NavDropdown,Form,FormControl,Button,Navbar,Nav } from 'react-bootstrap';
const Header = () => {
    return (
        <>




            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Investment Forecasting</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Cổ Phiếu</Nav.Link>
                        <Nav.Link href="#link">Tiển Ảo</Nav.Link>
                        <Nav.Link href="#link">Ngoại Hối</Nav.Link>
                        <NavDropdown title="Top Cổ Phiếu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Việt Nam</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mỹ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Trung Quốc</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Nhật</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Cổ Phiểu Của Tuần</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="outline-primary">Mua VIP</Button>
                    </Nav>
                    
                    <Button variant="outline-success">Đăng Nhập</Button>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>


            <Alert variant='success'><p style={{ textAlign: 'center', fontSize: '20px' }}>Mua Vip Chỉ Với 50k</p></Alert>
        </>

    )
}

export default Header
