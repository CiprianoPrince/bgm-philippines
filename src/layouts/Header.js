import React, { useEffect, useState } from "react"
import {
  Collapse,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap"
// hsl(167, 75%, 15%)
// hsl(106, 65%, 90%)
function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => {
    setDropdownOpen(true)
  }

  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <>
      <Container
        fluid
        tag='header'
        className='sticky-top top-0'
        style={{ backgroundColor: "hsl(106, 65%, 90%)" }}
      >
        <Navbar container='md' fixed='top' expand='md' color='success' dark>
          <NavbarBrand href='/' className='me-auto'>
            reactstrap
          </NavbarBrand>

          <NavbarToggler onClick={toggleNavbar} className='me-2' />

          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='/components/'>Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {/* <Nav>
          <NavItem>
            <NavLink active href='#'>
              Link
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href='#'>Another Link</NavLink>
          </NavItem>

          <NavItem>
            <NavLink disabled href='#'>
              Disabled Link
            </NavLink>
          </NavItem>

          <Dropdown
            nav
            disabled
            isOpen={dropdownOpen}
            onMouseOver={() => {
              if (dropdownOpen) return
              setDropdownOpen(true)
            }}
            onMouseLeave={() => {
              setDropdownOpen(false)
            }}
          >
            <DropdownToggle nav>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav> */}
      </Container>
    </>
  )
}

export default Header
