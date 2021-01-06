const users = [];

function signUsers() {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let user = {
        name,
        email,
        password,
        confirmPassword
    }
    users.push(user);
    if (password===confirmPassword) {
        localStorage.setItem("loginUsers", JSON.stringify(users));
    console.log (users);
    window.location.href="./login.html";
    } else {
        
        let codeNew = document.getElementById("codeNew");
        codeNew.classList.replace("insertOb","insert");
        codeNew.textContent="Las contraseñas no coinciden";

    }
}

function loginUsers () {
    let users = JSON.parse(localStorage.getItem("loginUsers"));
    for (const user of users) {
        if (user.email===document.getElementById("emailL").value && user.password===document.getElementById("passwordL").value) {
            window.location.href="./crud.html";
        } else {
            let passError = document.getElementById("passwordLogin");
            passError.classList.replace("insertOb","insert");
            passError.textContent="Contraseña incorrecta";
        }
    }
}

