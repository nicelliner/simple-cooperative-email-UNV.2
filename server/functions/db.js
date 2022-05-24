import fs from 'fs'

export const addMessage = (newMessage, MESSAGES_BASE) => {
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE)).push(newMessage)
    return fs.writeFileSync(MESSAGES_BASE, JSON.stringify(messages))
}

export const receivedMessages = (recipient, MESSAGES_BASE, resultMessages = []) => {  
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE)) 
    for (let message of messages) 
        if ( message.recipient === recipient ) 
            resultMessages.push(message)  
    return resultMessages
}

export const sentMassages = (sender, MESSAGES_BASE, resultMessages = []) => {  
    const messages = JSON.parse(fs.readFileSync(MESSAGES_BASE)) 
    for (let message of messages) 
        if (message.sender === sender ) 
            resultMessages.push(message)  
    return resultMessages
}

export const ObjectId = () => {
    let timestamp = (new Date().getTime() / 1000 | 0).toString(16)
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
        return (Math.random() * 16 | 0).toString(16)
    }).toLowerCase()
}

export const addUser = (newUser, USERS_BASE) => {
    const users = JSON.parse(fs.readFileSync(USERS_BASE)).push(newUser)
    return fs.writeFileSync(USERS_BASE, JSON.stringify(users))
}

export const regCheckUser = (newUser, USERS_BASE) => {
    const users = JSON.parse(fs.readFileSync(USERS_BASE))
    for (let user of users) 
        if (user.login === newUser.login ) 
            return false
    return true
}

export const logCheckUser = (User, USERS_BASE) => {
    const users = JSON.parse(fs.readFileSync(USERS_BASE))
    for (let user of users) 
        if (user.login === User.login ) 
            return true 
    return false
}

const testUser = {
    "name": "Vova",
    "surname": "Herobrin",
    "login": "dropit@you.ru",
    "password": "qwerty"
}


const testMessage = {
    sender: 'dram@flop.ru',
    recipient: 'feral@drop.ru',
    title: 'ferfecto',
    content: 'fdspjgpsjgp for Trello',
    read: false,
    time: '12 May Monday 12:22:54',
    _id: "'9058430gjfd'dfng'n"
}

// console.log(ObjectId())
// regUser(testUser, USERS_BASE)
// console.log(JSON.parse(fs.readFileSync(USERS_BASE)))
// console.log(receivedMessages('dram@flop.ru', MESSAGES_BASE))
// console.log(sentMassages('dram@flop.ru', MESSAGES_BASE))