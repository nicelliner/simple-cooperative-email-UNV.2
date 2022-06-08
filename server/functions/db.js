import fs from 'fs'

import { USERS_BASE, MESSAGES_BASE } from './const.js'

export const addMessage = (newMessage) => {
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE))
    messages.push(newMessage)
    return fs.writeFileSync(MESSAGES_BASE, JSON.stringify(messages))
}

export const receivedMessages = (recipient, resultMessages = []) => {  
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE)) 
    for (let message of messages) 
        if ( message.recipient === recipient.login ) 
            resultMessages.push(message)  
    return resultMessages
}

export const sentMassages = (sender, resultMessages = []) => {  
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE)) 
    for (let message of messages) 
        if (message.sender === sender.login ) 
            resultMessages.push(message)  
    return resultMessages
}

export const readMessages = (user, resultMessages = []) => {
    const messages = receivedMessages(user)
    for (let message of messages) 
        if ( message.read === true ) 
            resultMessages.push(message)  
    return resultMessages
}

export const deleteMessage = (messageID) => {
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE)) 
    for (let i = 0; i < messages.length; i++) {
        if (messages[i]._id === messageID ) 
            messages.splice(i, 1)
    }
    return fs.writeFileSync(MESSAGES_BASE, JSON.stringify(messages))
}

export const readMessage = (messageID) => {
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE)) 
    for (let i = 0; i < messages.length; i++) {
        if (messages[i]._id === messageID ) 
            messages[i].read = true
    }
    return fs.writeFileSync(MESSAGES_BASE, JSON.stringify(messages))
}

export const ObjectId = () => {
    let timestamp = (new Date().getTime() / 1000 | 0).toString(16)
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
        return (Math.random() * 16 | 0).toString(16)
    }).toLowerCase()
}

export const addUser = (newUser) => {
    if (regCheckUser(newUser, USERS_BASE) === false) return false
    const users = JSON.parse(fs.readFileSync(USERS_BASE))
    users.push(newUser)
    return fs.writeFileSync(USERS_BASE, JSON.stringify(users))
}

export const regCheckUser = (newUser) => {
    const users = JSON.parse(fs.readFileSync(USERS_BASE))
    for (let user of users) 
        if (user.login === newUser.login ) 
            return false
    return true
}

export const logCheckUser = (logUser) => {
    const users = JSON.parse(fs.readFileSync(USERS_BASE))
    for (let user of users) 
        if (user.login === logUser.login ) 
            return user.password === logUser.password ? 
            receivedMessages(logUser) : false
    return false
}