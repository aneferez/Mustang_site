const container = document.getElementById('lcontainer');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    console.log("regigerBtn");
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    console.log("loginBtn");
    container.classList.remove("active");
});