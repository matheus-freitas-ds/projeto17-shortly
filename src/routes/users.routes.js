import { Router } from "express"
import { getUser } from "../controllers/users.controller.js"
import { authValidation } from "../middlewares/auth.middleware.js"

const userRouter = Router()

userRouter.get("/users/me", authValidation, getUser)

export default userRouter