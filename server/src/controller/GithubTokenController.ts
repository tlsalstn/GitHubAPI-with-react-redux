import * as express from 'express'
import axios from 'axios'

export class GithubTokenController {
    public async getToken(req: express.Request, res: express.Response) {
        const { code, state } = req.body

        if(!(code && state)) {
            const result = {
                status: 400,
                message: "Enter all information"
            }

            res.json(result)
            return
        }

        try {
            const response = await axios({
                method: 'POST',
                url: 'https://github.com/login/oauth/access_token',
                headers: {
                    Accept: "application/json"
                },
                params: {
                    client_id: process.env.CLIENT_ID,
                    client_secret: process.env.CLIENT_SECRET,
                    code,
                    state
                }
            })

            const result = {
                status: 200,
                data: response.data
            }

            res.json(result)
            return
        } catch (error) {
            console.log(error)

            res.status(500)
            return
        }
    }
}