
// let baseurl ="http://localhost:1211"
 let baseurl = 'https://livechat-wzco.onrender.com';
const formEl = document.querySelector("form");
const myalert = document.getElementsByClassName("alert")[0];
const signupBtnText = document.getElementById("signupBtn");



formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    var name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const lastName = document.getElementById('lastName').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
     


    fetch(`${baseurl}/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password,
                lastName,
            mobileNo,
            email,
            address: {
                street,
                city,
                state,
                country
            },
         
            password
        })
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
       
          alert("Registration successful!");
         
                window.location.href = "../Html/Login.html";
       
        }).catch((err) => {
            console.log(err)
           
            alert("Registration failed!");
        })
})