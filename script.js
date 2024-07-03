// const form = document.getElementById("form")
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const errorDiv = document.getElementById("error_div");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validInput();
// });

// function validInput(){
//     if (username.value.trim() === ""){
//         setErrorFor(username, "Username cannot be blank!");
//     } else {
//         setSuccessFor(username);
//     }
// }

// function setErrorFor(element, errorMessage){
//     let parent = element.parentElement;
//     parent.classList.add("error") // adding error if the input is blank

//     parent.classList.remove("success") // removing success if the input is blank
// }

// function setSuccessFor(element){
//     let parent = element.parentElement;
//     parent.classList.add("success");

//     parent.classList.remove("error");
// }












































const form = document.getElementById("form")
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
    checkEmail();
    checkPassword();
});

function checkInput(){
    if (username.value.trim() === ""){
        setErrorFor(username, "Username cannot be blank")
    } else {
        setSuccessFor(username);
    }
}

function checkEmail(){
    if (email.value.trim() === ""){
        setErrorFor(email, "Please put a valid email")
    } else {
        setSuccessFor(email);
    }
}

function checkPassword(){
    if (password.value === ""){
        setErrorFor(password, "Password cannot be blank")
    } 
    
    else if (password.value >= 5) {
        setErrorFor(password, "Password must be at list 6 characters")
    }

    else {
        setSuccessFor(password);
    }
}

function setErrorFor(element, errorMessage){
    let parent = element.parentElement;
    let errors = parent.querySelector("#error_div");

    errors.innerHTML = errorMessage;
    parent.classList.add("error");

    parent.classList.remove("success");
}

function setSuccessFor(element){
    let parent = element.parentElement;
    parent.classList.add("success");

    parent.classList.remove("error");
}