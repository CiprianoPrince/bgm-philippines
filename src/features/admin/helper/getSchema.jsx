import { z } from "zod"

const getSchema = {
  employees: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    role: z.string(),
  }),
}

export default getSchema
