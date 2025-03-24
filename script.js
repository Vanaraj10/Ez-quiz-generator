const container=document.querySelector('.container');
const registerBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');

registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
});
loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".register form").addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.querySelector(".register input[placeholder='UserName']").value;
        let email = document.querySelector(".register input[placeholder='Email']").value;
        let password = document.querySelector(".register input[placeholder='Password']").value;

        if (username && email && password) {
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Registration successful! You can now log in.");
            window.location.reload(); 
        } else {
            alert("Please fill all fields.");
        }
    });

    // Login Form Submission
    document.querySelector(".login form").addEventListener("submit", function (event) {
        event.preventDefault();

        let enteredUsername = document.querySelector(".login input[placeholder='UserName']").value;
        let enteredPassword = document.querySelector(".login input[placeholder='Password']").value;

        let storedUsername = localStorage.getItem("username");
        let storedPassword = localStorage.getItem("password");

        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {            
            window.location.href = "input.html";
        } else {
            alert("Incorrect username or password!");
        }
    });

    document.querySelector(".register-btn").addEventListener("click", function () {
        document.querySelector(".container").classList.add("active");
    });

    document.querySelector(".login-btn").addEventListener("click", function () {
        document.querySelector(".container").classList.remove("active");
    });
});

