// removeElementsByClassName("script-signup")
// removeElementsByClassName("script-login")

// const createNavPanel = () => {
//     const nav_panel = document.createElement("nav")
//     const send_message = document.createElement("button")
//     const received_messages = document.createElement("button")
//     const sent_messages = document.createElement("button")
//     const read_messages = document.createElement("button")
//     const logOut = document.createElement("button")
    
//     nav_panel.appendChild(send_message)
//     nav_panel.appendChild(received_messages)
//     nav_panel.appendChild(sent_messages)
//     nav_panel.appendChild(read_messages)
//     nav_panel.appendChild(logOut)
    
//     send_message.textContent = "Send a message"
//     received_messages.textContent = "Received"
//     sent_messages.textContent = "Sent"
//     read_messages.textContent = "Read"
//     logOut.textContent = "Log Out"
    
//     send_message.id = "sendMessage"
//     received_messages.id = "receivedMessages"
//     sent_messages.id = "sentMessages"
//     read_messages.id = "readMessages"
//     logOut.id = "LogOut"

//     return document.body.append(nav_panel)
// }

removeElementsByClassName("script-signup")
removeElementsByClassName("script-login")

nav_panel.appendChild(send_message)
nav_panel.appendChild(received_messages)
nav_panel.appendChild(sent_messages)
nav_panel.appendChild(read_messages)
nav_panel.appendChild(logOut)

document.body.append(nav_panel)

send_message.textContent = "Send a message"
received_messages.textContent = "Received"
sent_messages.textContent = "Sent"
read_messages.textContent = "Read"
logOut.textContent = "Log Out"

send_message.id = "sendMessage"
received_messages.id = "receivedMessages"
sent_messages.id = "sentMessages"
read_messages.id = "readMessages"
logOut.id = "LogOut"
    
// createNavPanel()

document.getElementById("sendMessage").addEventListener("click", () => {
    messages_main.remove()
    document.title = "Create Message"
    addScript("./src/components/createMessage/createMessage.js", "script-createMessage")
})

document.getElementById("receivedMessages").addEventListener("click", () => {
    create_message.remove()
    document.title = "Received messages"
    request("POST", "/received", userLoginInLocalStorage, (response) => {
        messagesList = response
        addScript("./src/components/messagesList/messagesList.js", "script-messagesList")
    })
})

document.getElementById("sentMessages").addEventListener("click", () => {
    create_message.remove()
    document.title = "Sent Messages"
    request("POST", "/sent", userLoginInLocalStorage, (response) => {
        messagesList = response
        addScript("./src/components/messagesList/messagesList.js", "script-messagesList")
    })
})

document.getElementById("readMessages").addEventListener("click", () => {
    create_message.remove()
    document.title = "Read Messages"
    request("POST", "/read", userLoginInLocalStorage, (response) => {
        messagesList = response
        addScript("./src/components/messagesList/messagesList.js", "script-messagesList")
    })
})

document.getElementById("LogOut").addEventListener("click", () => {
    nav_panel.remove()
    create_message.remove()
    messages_main.remove()
    document.title = "Log In"
    addScript("./src/components/logIn/logIn.js", "script-login")
})
