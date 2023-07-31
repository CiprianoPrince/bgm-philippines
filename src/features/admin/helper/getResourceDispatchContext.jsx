import { useEmployeesDispatchContext } from "../../../context/EmployeesContext"

const getResourceDispatchContext = {
  employees: useEmployeesDispatchContext,
}

export default getResourceDispatchContext
