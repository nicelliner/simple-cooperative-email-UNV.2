removeElementsByClassName("script-messagesList")
empty_messages.remove()

create_message.appendChild(recipient_label)
create_message.appendChild(recipient_input)
create_message.appendChild(title_label)
create_message.appendChild(title_input)
create_message.appendChild(content_label)
create_message.appendChild(content_area)
create_message.appendChild(send_button_for_create)

document.body.append(create_message)

recipient_label.textContent = "Recipient"
title_label.textContent = "Title"
content_label.textContent = "Content"
send_button_for_create.textContent = "Send a message"

send_button_for_create.id = "sendMessage-Button"
create_message.classList.add("create-message")

document.getElementById("sendMessage-Button").addEventListener("click", () => {
    if (recipient_input.value === "") return alert("Enter recipient")
    if (title_input.value === "") return alert("Enter title")
    if (content_area.value === "") return alert("Enter content")

    const date = new Date()
    const newMessage = {
        sender: localStorage.getItem("userLogin"),
        recipient: recipient_input.value,
        title: title_input.value,
        content: content_area.value,
        read: false,
        date: 'Time: ' + date.getHours() + ':' + date.getMinutes() + ':'  + date.getSeconds() + '  Day: ' 
                 + date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay(),
    }

    request("POST", "/sendMessage", newMessage, (response) => {
        alert('Message sent')
        recipient_input.value === ""
        title_input.value === ""
        content_area.value === ""
    })
})