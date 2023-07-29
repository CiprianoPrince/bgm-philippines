import ActionsButton from "../components/ActionButtons"

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
  {
    name: "Actions",
    selector: (row) => <ActionsButton id={row.id} />,
  },
]

export default columns
