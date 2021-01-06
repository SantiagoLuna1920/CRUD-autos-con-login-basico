let userss = JSON.parse(localStorage.getItem("loginUsers"));
let getUsers = JSON.parse(localStorage.getItem("loginEnter"));

if (getUsers==null) {
    window.location.href="./login.html";
} 

function closeLogin () {
    localStorage.removeItem("loginEnter");
    window.location.href="./login.html"

}


