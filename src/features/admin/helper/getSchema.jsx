import { z } from "zod"
import {
  descriptionSchema,
  emailSchema,
  nameSchema,
  phoneSchema,
  roleSchema,
} from "../../../data/schema"

const getSchema = {
  employees: z.object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    phone: phoneSchema,
    role: roleSchema,
  }),
  benefits: z.object({
    name: nameSchema,
    description: descriptionSchema,
  }),
  jobs: z.object({
    name: nameSchema,
    description: descriptionSchema,
  }),
  services: z.object({
    name: nameSchema,
    description: descriptionSchema,
  }),
  technologies: z.object({
    name: nameSchema,
    description: descriptionSchema,
  }),
  workArrangements: z.object({
    name: nameSchema,
    description: descriptionSchema,
  }),
}

export default getSchema
