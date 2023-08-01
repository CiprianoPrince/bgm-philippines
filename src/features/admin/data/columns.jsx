import RowActionsButton from "../components/RowActionsButton";

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
    selector: (row) => <RowActionsButton user={row} />,
    center: true,
  },
]

export default columns
