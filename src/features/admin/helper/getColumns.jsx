import RowActionsButton from "../components/RowActionsButton"

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
  benefits: [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => <RowActionsButton resource='benefits' data={row} />,
      center: true,
    },
  ],
  services: [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => <RowActionsButton resource='services' data={row} />,
      center: true,
    },
  ],
  technologies: [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => (
        <RowActionsButton resource='technologies' data={row} />
      ),
      center: true,
    },
  ],
  jobs: [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => <RowActionsButton resource='jobs' data={row} />,
      center: true,
    },
  ],
  workArrangements: [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => (
        <RowActionsButton resource='workArrangements' data={row} />
      ),
      center: true,
    },
  ],
  messages: [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => <RowActionsButton resource='messages' data={row} />,
      center: true,
    },
  ],
}

export default getColumns
