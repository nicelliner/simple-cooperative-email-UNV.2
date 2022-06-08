const addScript = (src, className="") => {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.className = className
    document.head.appendChild(script)
}

const removeElementsByClassName = (className) => {
    if (document.getElementsByClassName(className)) {
        for ( let element of document.getElementsByClassName(className))
            element.remove()
    }
}

addScript("./src/request/request.js", "script-request")
addScript("./src/components/components.js", "script-elements")
addScript("./src/components/logIn/logIn.js", "script-login")