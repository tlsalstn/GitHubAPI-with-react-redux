import * as express from 'express'
import axios from 'axios'

export class GithubTokenController {
    public async getToken(req: express.Request, res: express.Response) {
        const { code, state } = req.body
        console.log("Code: " + code)
        console.log("State: " + state)

        if(!(code && state)) {
            const result = {
                message: "Enter all information"
            }

            res.status(400).json(result)
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

            console.log(response.data)
            if(response.data.error_description) {
                res.status(401).json(response.data)
                return
            }

            res.status(200).json(response.data)
            return
        } catch (error) {
            console.log(error)
            const result = {
                message: "Server error"
            }

            res.status(500).json(result)
            return
        }
    }
}