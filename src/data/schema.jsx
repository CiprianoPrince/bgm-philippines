import { z } from "zod"

export const nameSchema = z
  .string()
  .min(3, { message: "Name should be atleast 3 characters" })
  .trim()
  .toLowerCase()

export const emailSchema = z
  .string()
  .email({ message: "Please enter a valid email" })
  .trim()
  .toLowerCase()

export const phoneSchema = z
  .string()
  .regex(/^\d+$/, { message: "Please enter a valid number" })
  .min(10, { message: "Phone number should be at least 10" })
  .max(10, { message: "Phone number should be at least 10" })
  .transform(Number)

export const messageSchema = z
  .string()
  .trim()
  .min(1, { message: "Message cannot be empty" })

export const roleSchema = z
  .string()
  .trim()
  .min(1, { message: "Role cannot be empty" })

export const descriptionSchema = z
  .string()
  .trim()
  .min(1, { message: "Description cannot be empty" })
