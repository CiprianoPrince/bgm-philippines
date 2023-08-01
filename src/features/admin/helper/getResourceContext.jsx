import { useEmployeesContext } from "../../../context/EmployeesContext"

const getResourceContext = {
  employees: useEmployeesContext,
}

export default getResourceContext
