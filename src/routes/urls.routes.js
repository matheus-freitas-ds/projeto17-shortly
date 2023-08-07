import { Router } from "express"
import { shortenUrl, getUrl, openUrl, deleteUrl } from "../controllers/urls.controller.js"
import { authValidation } from "../middlewares/auth.middleware.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { urlSchema } from "../schemas/urlsSchema.js"

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", validateSchema(urlSchema), authValidation, shortenUrl)
urlsRouter.get("/urls/:id", getUrl)
urlsRouter.get("/urls/open/:shortUrl", openUrl)
urlsRouter.delete("/urls/:id", authValidation, deleteUrl)

export default urlsRouter