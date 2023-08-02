import { useBenefitsDispatchContext } from "../../../context/BenefitsContext"
import { useEmployeesDispatchContext } from "../../../context/EmployeesContext"
import { useMessagesDispatchContext } from "../../../context/MessagesContext"
import { useJobsDispatchContext } from "../../../context/JobsContext"
import { useServicesDispatchContext } from "../../../context/ServicesContext"
import { useTechnologiesDispatchContext } from "../../../context/TechnologiesContext"
import { useWorkArrangementsDispatchContext } from "../../../context/WorkArrangementsContext"

const getResourceDispatchContext = {
  employees: useEmployeesDispatchContext,
  benefits: useBenefitsDispatchContext,
  jobs: useJobsDispatchContext,
  services: useServicesDispatchContext,
  technologies: useTechnologiesDispatchContext,
  workArrangements: useWorkArrangementsDispatchContext,
  messages: useMessagesDispatchContext,
}

export default getResourceDispatchContext
