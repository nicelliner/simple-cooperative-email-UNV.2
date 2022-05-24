import express, { response } from 'express'
import fs from 'fs'
import cors from 'cors'

import { USERS_BASE, MESSAGES_BASE } from './functions/const.js'
import { addMessage, receivedMessages, sentMassages, ObjectId,
        addUser, regCheckUser, logCheckUser } from './functions/db.js'

const app = express();

app.use(cors())

const port = 5000

app.use("", (req, res) => { console.log("Server get request") })

app.post("", (request, response) => {
        request.on('data', requestBody => {
                response.end(answer)
        })
})

app.listen(port, () => { console.log(`Server running at http://localhost:${port}/`) })
