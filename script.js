const users = [];
const usersLogin = [];

let getin = JSON.parse(localStorage.getItem("loginEnter"));
 if (getin) {
    window.location.href="./crud.html";
}  

function signUsers() {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let boolean = false;

    let user = {
        name,
        email,
        password,
        confirmPassword,
        boolean
    }
    users.push(user);
    if (password===confirmPassword) {
        localStorage.setItem("loginUsers", JSON.stringify(users));
    window.location.href="./login.html";
    } else {
        
        let codeNew = document.getElementById("codeNew");
        codeNew.classList.replace("insertOb","insert");
        codeNew.textContent="Las contraseñas no coinciden";
        
    }
}

function loginUsers () {
    let users = JSON.parse(localStorage.getItem("loginUsers"));
    if (users==null) {
        let passError = document.getElementById("passwordLogin");
            passError.classList.replace("insertOb","insert");
            passError.textContent="Contraseña y/o cuenta incorrecta";
    } else {
    for (const user of users) {
        if (user.email===document.getElementById("emailL").value && user.password===document.getElementById("passwordL").value && user.confirmPassword===document.getElementById("passwordL").value) {
            localStorage.setItem("loginEnter", JSON.stringify(users));
            window.location.href="./crud.html";
        } else {
            let passError = document.getElementById("passwordLogin");
            passError.classList.replace("insertOb","insert");
            passError.textContent="Contraseña y/o cuenta incorrecta";
        }
    }
    }
}

