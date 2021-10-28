import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const createMessageController = new CreateMessageController()

router.post("/authenticate", authenticateUserController.handle)

router.post(
    "/messages",
    ensureAuthenticated,
    createMessageController.handle
)

export { router }