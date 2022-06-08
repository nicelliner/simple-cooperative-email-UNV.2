removeElementsByClassName("script-login")
removeElementsByClassName("script-signup")
 
signUp_section.appendChild(name_surname_inputs)
signUp_section.appendChild(login_password_inputs)
signUp_section.appendChild(signUp_buttons)
name_surname_inputs.appendChild(name_input)
name_surname_inputs.appendChild(surname_input)
name_input.appendChild(nameLab)
name_input.appendChild(nameInp)
surname_input.appendChild(surnameLab)
surname_input.appendChild(surnameInp)
login_password_inputs.appendChild(loginReg_input)
login_password_inputs.appendChild(passwordReg_input)
loginReg_input.appendChild(loginLab)
loginReg_input.appendChild(loginInp)
passwordReg_input.appendChild(passwordLab)
passwordReg_input.appendChild(passwordInp)
signUp_buttons.appendChild(logInReg_Button)
signUp_buttons.appendChild(signUpReg_Button)

document.body.append(signUp_section)

nameLab.textContent = "Name"
surnameLab.textContent = "Surname"
loginLab.textContent = "Login"
passwordLab.textContent = "Password"
logInReg_Button.textContent = "Log In"
signUpReg_Button.textContent = "Sign In"

logInReg_Button.id = "logInReg"
signUpReg_Button.id = "signUpReg"

passwordInp.type = "password"

signUp_section.classList.add("signUp-section")
name_surname_inputs.classList.add("name-surname-inputs")
login_password_inputs.classList.add("login-password-inputs")
name_input.classList.add("name-input")
surname_input.classList.add("surname-input")
loginReg_input.classList.add("login-input")
passwordReg_input.classList.add("password-input")
signUp_buttons.classList.add("signUp-buttons")

document.getElementById("logInReg").addEventListener("click", () => {
    signUp_section.remove();
    document.title = "Log In"
    addScript("./src/components/logIn/logIn.js", "script-login")
})

document.getElementById("signUpReg").addEventListener("click", () => {
    const regName = document.getElementsByClassName("name-input")[0].getElementsByTagName("input")[0]
    const regSurname = document.getElementsByClassName("surname-input")[0].getElementsByTagName("input")[0]
    const regLogin = document.getElementsByClassName("login-input")[0].getElementsByTagName("input")[0]
    const regPassword = document.getElementsByClassName("password-input")[0].getElementsByTagName("input")[0]

    if (regName.value === "") return alert("Enter your name")
    if (regSurname.value === "") return alert("Enter your surname")
    if (regLogin.value === "") return alert("Enter your login")
    if (regPassword.value === "") return alert("Enter your password")

    const newUser = {
        name: regName.value,
        surname: regSurname.value,
        login: regLogin.value,
        password: regPassword.value
    }

    request("POST", "/signup", newUser, (response) => {
        if (response === false) {
            return alert("This user is already registered") 
        } else {
            signUp_section.remove();
            document.title = "Log In"
            addScript("./src/components/logIn/logIn.js", "script-login")
        }
    })
})