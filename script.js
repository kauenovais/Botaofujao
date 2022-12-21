let submitBtn = document.getElementById("submitBtn");
let email = document.getElementById("email");
let password = document.getElementById("password");
let helpText = document.getElementById("texto-ajuda");

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

submitBtn.onmouseover = () => {
    if (validateEmail(email.value) && password.value.length > 8) {
        helpText.innerText = "Você pode enviar agora !!"
    } else {
        if (submitBtn.style.alignSelf === "flex-end") {
            submitBtn.style.alignSelf = "flex-start"
        }
        else {
            submitBtn.style.alignSelf = "flex-end"
        }
        helpText.innerText = "Você não pode enviar até que seu e-mail seja validado e a senha tenha mais de 8 caracteres"
    }
}
