// Login
const logIn_section = document.createElement("section")
const logIn_inputs = document.createElement("div")
const logIn_buttons = document.createElement("div")
const login_label = document.createElement("label")
const password_label = document.createElement("label")
const login_input = document.createElement("input")
const password_input = document.createElement("input")
const logIn_button = document.createElement("button")
const signUp_button = document.createElement("button")


// SignUp
const signUp_section = document.createElement("section")
const name_surname_inputs = document.createElement("div")
const name_input = document.createElement("div")
const nameLab = document.createElement("label")
const nameInp = document.createElement("input") 
const surname_input = document.createElement("div")
const surnameLab = document.createElement("label")
const surnameInp = document.createElement("input")
const login_password_inputs = document.createElement("div")
const loginReg_input = document.createElement("div")
const loginLab = document.createElement("label")
const loginInp = document.createElement("input")
const passwordReg_input = document.createElement("div")
const passwordLab = document.createElement("label")
const passwordInp = document.createElement("input")
const signUp_buttons = document.createElement("div")
const logInReg_Button = document.createElement("button") 
const signUpReg_Button = document.createElement("button")


// Nav
const userLoginInLocalStorage = {
    login: localStorage.getItem("userLogin"),
    password: localStorage.getItem("userPassword")
}

const nav_panel = document.createElement("nav")
const send_message = document.createElement("button")
const received_messages = document.createElement("button")
const sent_messages = document.createElement("button")
const read_messages = document.createElement("button")
const logOut = document.createElement("button")


// MessagesList
let messagesList = []
const messages_main = document.createElement("main")

const createMessagesList = (messages, i = 0) => {
    if (i === messages.length) return document.body.append(messages_main)

    const message = document.createElement("div")
    const message_buttons = document.createElement("div")
    const mark_button = document.createElement("button")
    const reply_button = document.createElement("button")
    const delete_button = document.createElement("button")
    const title = document.createElement("h2")
    const sender = document.createElement("h3")
    const content = document.createElement("p")
    const date = document.createElement("p")

    messages_main.appendChild(message)
    message.appendChild(message_buttons)
    if (document.title !== "Sent Messages" && messages[i].read === false) {
        message_buttons.appendChild(mark_button)
    }
    if (document.title !== "Sent Messages") {
        message_buttons.appendChild(reply_button)
    }
    message_buttons.appendChild(delete_button)
    message.appendChild(title)
    message.appendChild(sender)
    message.appendChild(content)
    message.appendChild(date)

    mark_button.textContent = "Mark as read"
    reply_button.textContent = "Reply"
    delete_button.textContent = "Delete"
    title.textContent = messages[i].title
    if (document.title === "Sent Messages") {
        sender.textContent = "Recipient: " + messages[i].recipient
    } else {
        sender.textContent = 'Sender: ' + messages[i].sender
    }
    content.textContent = messages[i].content
    date.textContent = messages[i].date

    message.id = messages[i]._id

    messages_main.classList.add("messages-main")
    message.classList.add("message")
    date.classList.add("message-date")
    message_buttons.classList.add("message-buttons")
    mark_button.classList.add("mark-message")
    reply_button.classList.add("reply-message")
    delete_button.classList.add("delete-message")

    if (document.title !== "Sent Messages" && messages[i].read === true) {
        message.style.backgroundColor = "#bdbebd"
    }
    return createMessagesList(messages, ++i)
}

const createMessagesMainList = (messages) => {
    messages_main.innerHTML = ""
    empty_messages.remove()
    removeElementsByClassName("script-createMessage")
    removeElementsByClassName("script-messagesList")
    removeElementsByClassName("script-nav")

    if (messagesList == "") {
        document.body.append(empty_messages)
        empty_messages.textContent = "You don't have any messages yet"
        empty_messages.classList.add("empty-Messages")
    } else {
        createMessagesList(messages)
    }
}

// CreateMessage
const create_message = document.createElement("section")
const recipient_label = document.createElement("label")
const recipient_input = document.createElement("input")
const title_label = document.createElement("label")
const title_input = document.createElement("input")
const content_label = document.createElement("label")
const content_area = document.createElement("textarea")
const send_button_for_create = document.createElement("button")

// EmptyMessages
const empty_messages = document.createElement("h1")
