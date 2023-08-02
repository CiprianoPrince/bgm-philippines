import { useBenefitsContext } from "../../../context/BenefitsContext"
import { useEmployeesContext } from "../../../context/EmployeesContext"
import { useMessagesContext } from "../../../context/MessagesContext"
import { useJobsContext } from "../../../context/JobsContext"
import { useServicesContext } from "../../../context/ServicesContext"
import { useTechnologiesContext } from "../../../context/TechnologiesContext"
import { useWorkArrangementsContext } from "../../../context/WorkArrangementsContext"

const getResourceContext = {
  employees: useEmployeesContext,
  benefits: useBenefitsContext,
  jobs: useJobsContext,
  services: useServicesContext,
  technologies: useTechnologiesContext,
  workArrangements: useWorkArrangementsContext,
  messages: useMessagesContext,
}

export default getResourceContext
