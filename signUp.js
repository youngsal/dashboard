const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput(){
    // user section
    if (username.value.trim() === ''){
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    // Email section
    if (email.value.trim() === ''){
        setErrorFor(email, "Email cannot be blank");
    } else {
        setSuccessFor(email);
    }

    // Password section
    if (password.value === ''){
        setErrorFor(password, "Password cannot be blank")
    }
    else if (password.value.length <= 5){
        setErrorFor(password, "password must be more than 5")
    }
    else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, errorMessage){
    let parent = input.parentElement;
    let small = parent.querySelector("small");

    small.innerText = errorMessage;
    parent.classList = ("input_div error");
}

function setSuccessFor(input, errorMessage){
    let parent = input.parentElement;
    parent.classList = ("input_div success");
}



// ====================Active on the sidebar buttons
const buttons = querySelectorAll('.tab_link');
buttons.forEach(l => {
    l.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        l.classList.toggle('active');
    });
});


// // ====================For sidebar and content
// function showSection(sectionId) {
//     // getting all element with class="tabContent" and hide them
//     var sections = document.querySelectorAll(".tabContent");
//     sections.forEach(function(tabContent) {
//         tabContent.classList.remove('open');
//     });

//     // // removing active
//     // var buttons = querySelector('.tab_link').classList.remove('active');
//     // buttons.addEventListener('click', () => {
//     //     buttons.classList.add('active');
//     // });

//     //  // Add active class to the selected link
//     //  var activeLink = document.getElementById('link-' + sectionId);
//     //  activeLink.classList.add('active');

//     // Show the selected section
//     var activeSection = document.getElementById(sectionId);
//         activeSection.classList.add('open');
//     // Show the dashboard section as default
//     document.addEventListener('DOMContentLoaded', function(){
//         showSection('dashboard');
//     });
// }

// function showSection(sectionId) {
//     // Getting all elements with class="tabContent" and hide them
//     var sections = document.querySelectorAll(".tabContent");
//     sections.forEach(function(tabContent) {
//         tabContent.classList.remove('open');
//     });

//     // Show the selected section
//     var activeSection = document.getElementById(sectionId);
//     activeSection.classList.add('open');

//     // Make the corresponding button active
//     var buttons = document.querySelectorAll('.tab_link');
//     buttons.forEach(function(button) {
//         button.classList.remove('active');
//     });

//     var activeButton = document.querySelector(⁠`[onclick="showSection('${sectionId}')"]` ⁠);
//     activeButton.classList.add('active');
// }

// // Show the dashboard section as default
// document.addEventListener('DOMContentLoaded', function(){
//     showSection('dashboard');
// });






function showSection(sectionId) {
    // Getting all elements with class="tabContent" and hide them
    var sections = document.querySelectorAll(".tabContent");
    sections.forEach(function(tabContent) {
        tabContent.classList.remove('open');
    });

    // Show the selected section
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('open');

    // Make the corresponding button active
    var buttons = document.querySelectorAll('.tab_link');
buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var activeButton = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    activeButton.classList.add('active');
}

// Show the dashboard section as default
document.addEventListener('DOMContentLoaded', function(){
    showSection('dashboard');
});