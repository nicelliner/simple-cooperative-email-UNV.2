removeElementsByClassName("script-login")
removeElementsByClassName("script-signup")

logIn_section.appendChild(logIn_inputs)
logIn_section.appendChild(logIn_buttons)
logIn_inputs.appendChild(login_label)
logIn_inputs.appendChild(login_input)
logIn_inputs.appendChild(password_label)
logIn_inputs.appendChild(password_input)
logIn_buttons.appendChild(logIn_button)
logIn_buttons.appendChild(signUp_button)

document.body.append(logIn_section)

login_label.textContent = "Login"
password_label.textContent = "Password"
logIn_button.textContent = "Log In"
signUp_button.textContent = "Sign Up"

logIn_button.id = "logIn"
signUp_button.id = "signUp"

password_input.type = "password"

logIn_section.classList.add("logIn-section")
logIn_inputs.classList.add("logIn-inputs")
logIn_buttons.classList.add("logIn-buttons")

login_input.value = localStorage.getItem("userLogin")
password_input.value = localStorage.getItem("userPassword")

document.getElementById("logIn").addEventListener("click", () => {
    if (logIn_inputs.getElementsByTagName("input")[0].value === "") return alert("Enter login")
    if (logIn_inputs.getElementsByTagName("input")[1].value === "") return alert("Enter password")
    
    const logUser = {
        login: logIn_inputs.getElementsByTagName("input")[0].value,
        password: logIn_inputs.getElementsByTagName("input")[1].value
    }

    request("POST", "/login", logUser, (response) => {
        if (response === false) {
            return alert("Wrong login or password") 
        } else {
            localStorage.setItem("userLogin", logUser.login)
            localStorage.setItem("userPassword", logUser.password)

            messagesList = response
            logIn_section.remove()
            document.title = "Received messages"
            addScript("./src/components/nav/nav.js", "script-nav")
            addScript("./src/components/messagesList/messagesList.js", "script-messagesList")
        }
    })
})

document.getElementById("signUp").addEventListener("click", () => {
    logIn_section.remove();
    document.title = "Sign Up"
    addScript("./src/components/signUp/signUp.js", "script-signup")
})
