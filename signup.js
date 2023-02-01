const password = document.getElementById('password');
const hider = document.getElementById('hider');
function showhide(){
    if (password.type === 'password'){
        password.setAttribute('type','text');
        hider.classList.add('hide')
    }
    else{
        password.setAttribute('type','password');
        hider.classList.remove('hide')
    }
}

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let newAccount = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        type: "user"
    }
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    window.location.href = "./login.html";
    console.log("is it working?");
});