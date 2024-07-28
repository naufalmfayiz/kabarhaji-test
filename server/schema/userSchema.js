const { z } = require("zod");

const userSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ message: "password is required" })
    .min(5, { message: "password must be at least 5 characters" }),
  name: z
    .string({ message: "name is required" })
    .min(3, { message: "name must be at least 3 characters" })
    .max(50, { message: "name must be at most 50 characters" }),
});

module.exports = userSchema;
