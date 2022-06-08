const request = (type, path, data, fun) => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = "json"

    xhr.open(type, `http://localhost:5000${path}`)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xhr.onload = () => {
        if (xhr.status !== 200) {
            return
        }
        const response = xhr.response
        fun(response)
    }

    xhr.onerror = () => {
        alert(`Ошибка соединения`)
    }
    
    if (type === "POST") 
        xhr.send(JSON.stringify(data))     
}