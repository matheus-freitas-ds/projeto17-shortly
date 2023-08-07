import { Router } from "express"
import { signIn, signUp } from "../controllers/auth.controller.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { loginSchema, signUpSchema } from "../schemas/authSchema.js"

const authRouter = Router()

authRouter.post("/signup", validateSchema(signUpSchema), signUp)
authRouter.post("/signin", validateSchema(loginSchema), signIn)

export default authRouter