import RowActionsButton from "../components/RowActionsButton";

const getColumns = {
  employees: [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => <RowActionsButton resource='employees' data={row} />,
      center: true,
    },
  ],
}

export default getColumns
