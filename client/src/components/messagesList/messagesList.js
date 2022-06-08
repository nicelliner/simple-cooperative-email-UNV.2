createMessagesMainList(messagesList)

for (const markButton of document.body.getElementsByClassName("mark-message")) {
    markButton.addEventListener("click", () => {
        const messageID = markButton.parentElement.parentElement.id
        markButton.parentElement.parentElement.style.backgroundColor = "#bdbebd"
        markButton.remove()
        request("POST", "/mark", messageID, (response) => {})
    })
}

for (const repButton of document.body.getElementsByClassName("reply-message")) {
    repButton.addEventListener("click", () => {
        document.title = "Create Message"
        const repRecipient = repButton.parentElement.parentElement.getElementsByTagName("h3")[0].textContent 
        addScript("./src/components/createMessage/createMessage.js", "script-createMessage")
        recipient_input.value = repRecipient.slice(repRecipient.indexOf(":", 0) + 2, repRecipient.length)
        messages_main.remove()
    })
}

for (let delButton of document.body.getElementsByClassName("delete-message")) {
    delButton.addEventListener("click", () => {
        const messageID = delButton.parentElement.parentElement.id
        delButton.parentNode.parentNode.remove()
        request("POST", "/delete", messageID, (response) => {
            alert('Message deleted')
        })
    })
}
