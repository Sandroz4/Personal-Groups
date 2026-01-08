
let chat= document.getElementById("chat")
let input= document.getElementById("input")
let button= document.getElementById("submit")

button.addEventListener("click", () =>  {
    const respons = document.createElement('p')
    const result = document.createElement('p')

    respons.classList.add('respons')
    result.classList.add('result')

    if (input.value === "hello"){
        result.textContent = "hello"
        chat.appendChild(result)

        respons.textContent = "hello how are you"
        chat.appendChild(respons)
    }
    else if (input.value === "what is your name? "){
        result.textContent = "what is your name?"
        chat.appendChild(result)

        respons.textContent = "my name is chatbot nice to met you, whats your name?"
        chat.appendChild(respons)
    }
    else if (input.value === "how are you?"){
        result.textContent = "how are you?"
        chat.appendChild(result)

        respons.textContent = "i am good how about you?"
        chat.appendChild(respons)
    }
    else { 
        respons.textContent ="unknown command"
        chat.appendChild(respons)
    }
    } )
