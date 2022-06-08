import { Router } from 'express'

import { addMessage, receivedMessages, sentMassages, ObjectId,
        addUser, logCheckUser, readMessages, deleteMessage, readMessage } from '../functions/db.js'

const router = Router()

router.post('/login', (req, res) => {
        req.on('data', requestBody => {
                const logUser = JSON.parse(requestBody)
                res.send(logCheckUser(logUser))
        })
})

router.post('/signup', (req, res) => {
        req.on('data', requestBody => {
                const regUser = JSON.parse(requestBody)
                res.send(addUser(regUser))
        })
})

router.post('/received', (req, res) => {
        req.on('data', requestBody => {
                const user = JSON.parse(requestBody)
                res.send(receivedMessages(user))
        })
})

router.post('/sent', (req, res) => {
        req.on('data', requestBody => {
                const user = JSON.parse(requestBody)
                res.send(sentMassages(user))
        })
})

router.post('/read', (req, res) => {
        req.on('data', requestBody => {
                const user = JSON.parse(requestBody)
                res.send(readMessages(user))
        })
})


router.post('/sendMessage', (req, res) => {
        req.on('data', requestBody => {
                const newMessage = JSON.parse(requestBody)
                Object.assign(newMessage, {_id: ObjectId(),})
                res.send(addMessage(newMessage))
        })
})

router.post('/delete', (req, res) => {
        req.on('data', requestBody => {
                const messageID = JSON.parse(requestBody)
                res.send(deleteMessage(messageID))
        })
})

router.post('/mark', (req, res) => {
        req.on('data', requestBody => {
                const messageID = JSON.parse(requestBody)
                // console.log(messageID)
                res.send(readMessage(messageID))
        })
})

export default router