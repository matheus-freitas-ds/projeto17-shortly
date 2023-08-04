import { Router } from "express"
import { signIn, signUp, getUser } from "../controllers/auth.controller.js"

const authRouter = Router()

authRouter.post("/signup", signUp)
authRouter.post("/signin", signIn)
authRouter.get("/users/me", getUser)

export default authRouter