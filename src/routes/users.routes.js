import { Router } from "express"
import { getUser } from "../controllers/users.controller.js"

const userRouter = Router()

userRouter.get("/users/me", getUser)

export default userRouter