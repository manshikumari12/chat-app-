
let baseurl = 'https://livechat-wzco.onrender.com';
// let baseurl ="http://localhost:1211"
const formEl = document.querySelector("form")

const loginBtnText = document.getElementById("loginBtnText");


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email == "" || password == "") {
       
        myalert("All the feilds are required!");
    }

   

    fetch(`${baseurl}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((res) => {
        return res.json();
    }).then((data) => {
        localStorage.setItem("chattoken", data.token);
        localStorage.setItem("name",data.name)
        localStorage.setItem("email",data.email)
        // localStorage.setItem("address",data.address)
        localStorage.setItem("address", JSON.stringify(data.address));
        localStorage.setItem("mobileNo",data.mobileNo)
        console.log(data.name)
        console.log(data.email)
        console.log(data.token)
        console.log(data.address)
        console.log(data.mobileNo)
      
    alert("Login successful!");
       
            window.location.href = "../index.html"
    
    }).catch((err) => {
       
        alert("Login failed!");
    })
})