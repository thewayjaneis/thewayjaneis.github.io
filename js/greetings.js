const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";

function loginSubmit (event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    loginGreetings(username);
}

function loginGreetings(username){
    greeting.classList.remove( HIDDEN_CLASSNAME);
    greeting.innerText =  username + "'s Lists :)";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
 if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", loginSubmit);
 } else{
    loginGreetings(savedUsername);
 }
 

 