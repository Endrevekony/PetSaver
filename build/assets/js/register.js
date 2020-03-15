const registerForm = document.querySelector('#loginForm');
registerForm.addEventListener('submit',(e) => {
    e.preventDefault();
})

var isRegister = false;

async function showLoginForm(){
    registerForm.style.display = "block";
    switchForm();
    registerForm.scrollIntoView();
}

async function showRegisterForm(){
    isRegister = true;
    registerForm.style.display = "block";
    switchForm();
    registerForm.scrollIntoView();
}

async function register(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("errorMessage");
    console.log("register");
        firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
            window.location.href = "app.html";
        }) 
        .catch(function(error) {
        errorMsg.textContent = error;
        loginForm.scrollIntoView();
         
  });
}

async function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("errorMessage");

        firebase.auth().signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
            window.location.href = "app.html";
        }) 
        .catch(function() {
         errorMsg.textContent = "Incorrect e-mail or password";
        registerForm.scrollIntoView();        
  });
}

async function switchForm(){
    const name = document.getElementById("name");
    const loginHead = document.getElementById("loginHead");
    const loginLink =  document.getElementById("loginLink");
    const loginText = document.getElementById("loginText");
    const loginButton = document.getElementById("loginButton");

    if(!isRegister){
        name.style.display = "none";
        loginHead.textContent = "Log in";
        loginLink.textContent = "Sign Up!";
        loginText.textContent = "Don't have an account?";
        loginButton.textContent = "Log In";
        loginButton.onclick = login;
        isRegister = true;
    }
    else{
        name.style.display = "block";
        loginHead.textContent = "Register";
        loginLink.textContent = "Log In!";
        loginText.textContent = "Already have an account?";
        loginButton.textContent = "Sign Up";
        loginButton.onclick = register;
        isRegister = false;
    }
}


