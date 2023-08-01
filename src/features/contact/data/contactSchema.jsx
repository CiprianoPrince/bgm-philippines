import { z } from "zod"
const contactSchema = z.object({
  name: z.string().trim().min(3, { message: "Name should have length 3" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(10, { message: "Phone number should be at least 10" })
    .regex(/^\d+$/, { message: "Please enter a valid number" })
    .transform(Number),
  message: z.string().trim().min(1, { message: "Message cannot be empty" }),
})

export default contactSchema
