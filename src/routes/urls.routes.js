import { Router } from "express"
import { shortenUrl, getUrl, openUrl, deleteUrl } from "../controllers/urls.controller.js"

const urlsRouter = Router()

urlsRouter.post("/signup", shortenUrl)
urlsRouter.get("/signin", getUrl)
urlsRouter.get("/users/me", openUrl)
urlsRouter.delete("/urls/:id", deleteUrl)

export default urlsRouter