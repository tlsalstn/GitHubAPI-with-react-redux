import * as express from 'express'
import { GithubTokenController } from '../controller/GithubTokenController'

const router = express.Router()

router.post('/getToken', GithubTokenController.prototype.getToken)

export default router