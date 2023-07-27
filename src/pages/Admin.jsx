import React, { useState } from "react"
import { Button, Col, Container, Nav, Row } from "reactstrap"

import DataTable, { defaultThemes } from "react-data-table-component"
import BGMStack from "../components/ui/BGMStack"
import styled from "styled-components"
import BGMSideNavLink from "../components/ui/BGMSideNavLink"

import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

import { faker } from "@faker-js/faker"

import BGMHeader from "../layouts/BGMHeader"

const customStyles = {
  header: {
    style: {
      minHeight: "56px",
    },
  },
  headRow: {
    style: {
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      borderTopColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
  cells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
}

// const createUser = () => ({
//   id: faker.string.uuid(),
//   name: faker.internet.userName(),
//   email: faker.internet.email(),
//   address: faker.location.country(),
// })

// const createUsers = (numUsers = 5) => {
//   return new Array(numUsers).fill(undefined).map(createUser)
// }

// const fakeUsers = createUsers(2000)

const fakeUsers = JSON.parse(localStorage.getItem("faker"))

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: true,
  },
]

const Admin = () => {
  document.title = "BGM Phillipines Inc. | Admin panel"

  const [showNav, setShowNav] = useState(false)

  const [filterText, setFilterText] = React.useState("")
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false)

  const filteredItems = fakeUsers.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  )

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText("")
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <>
      {/* <BGMHeader /> */}
      <Container fluid tag='main' className='position-relative p-0'>
        <Row className='overflow vh-100 align-items-center'>
          <Col xs={12} lg={3} className="p-0">
            <AdminSideNavStyled showNav={showNav} className='z-1 '>
              <AdminSideNavButtonStyled
                color='dark'
                onClick={() => setShowNav(!showNav)}
              >
                {showNav ? (
                  <BiChevronRightStyled className='text-primary' />
                ) : (
                  <BiChevronLeftStyled className='text-primary' />
                )}
              </AdminSideNavButtonStyled>

              <NavStyled
                className='bg-primary text-center gap-2'
                vertical
              >
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
                <BGMSideNavLink to='/'>Home</BGMSideNavLink>
              </NavStyled>
            </AdminSideNavStyled>
          </Col>

          <Col xs={12} lg={9} className="p-0">
            <DataTableStyled className='p-3 m-3'>
              <DataTable
                title='Movie List'
                data={filteredItems}
                columns={columns}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
              />
            </DataTableStyled>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Admin

const DataTableStyled = styled.div`
  border: 1px solid black;
  width: min(50rem, 100%);
  background-color: red;
`

const AdminSideNavStyled = styled.div`
  position: fixed;
  left: 0;
  width: min(20rem, 80vw);
  transform: translateX(
    ${({ showNav }) => (showNav === false ? "3%" : "-100%")}
  );
  transition: all 0.5s ease-in-out;

  @media only screen and (min-width: 992px) {
    position: static;
    transform: translateX(3%);
  }
`

const NavStyled = styled(Nav)`
  height: 80vh !important;
`

const AdminSideNavButtonStyled = styled(Button)`
  display: block;
  position: absolute;
  right: -58px;
  top: 50%;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`

const BiChevronLeftStyled = styled(BiChevronLeft)`
  font-size: 32px;
  animation: clickme 1.2s linear infinite;
  transform: translateX(-3px);

  @keyframes clickme {
    0% {
      transform: translateX(3px);
    }

    50% {
      transform: translateX(-3px);
    }

    100% {
      transform: translateX(3px);
    }
  }
`

const BiChevronRightStyled = styled(BiChevronRight)`
  font-size: 32px;
  animation: clickme 1.2s linear infinite;
  transform: translateX(-3px);

  @keyframes clickme {
    0% {
      transform: translateX(3px);
    }

    50% {
      transform: translateX(-3px);
    }

    100% {
      transform: translateX(3px);
    }
  }
`

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id='search'
      type='text'
      placeholder='Filter By Name'
      aria-label='Search Input'
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type='button' onClick={onClear}>
      &times;
    </ClearButton>
  </>
)

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
