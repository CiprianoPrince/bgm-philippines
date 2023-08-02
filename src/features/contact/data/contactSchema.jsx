import { z } from "zod"
import {
  emailSchema,
  messageSchema,
  nameSchema,
  phoneSchema,
} from "../../../data/schema"

const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: messageSchema,
})

export default contactSchema
