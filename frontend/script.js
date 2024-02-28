
        let isTokenPresent = localStorage.getItem("chattoken");
        const sidebarEl = document.querySelector('.sidebar');
        const navbarbrand = document.querySelector('.navbar-brand');
        let recipient = "";
        if (!isTokenPresent) {
            window.location.href = "./Html/Login.html";
        }
let baseurl="https://livechat-wzco.onrender.com/"
// let baseurl="http://localhost:1211/"
        const socket = io(baseurl, {
            transports: ["websocket"],
            query: {
                token: isTokenPresent
            }
        });

        socket.on("message", (msg) => {
            console.log(msg);
        });

 



        socket.on("newuser", (msg) => {
            const count_tag = document.getElementById("usercount");
            count_tag.innerText = msg;
        })

        function handlesidebar() {
            if (sidebarEl.classList.contains("sidebarClosed")) {
                sidebarEl.classList.remove("sidebarClosed");
                for (let child of sidebarEl.children) {
                    child.style.display = 'block';
                }
            } else {
                sidebarEl.classList.add("sidebarClosed");
                for (let child of sidebarEl.children) {
                    child.style.display = 'none';
                }
            }
        }
    const allbuttonElement = document.querySelectorAll('.email');
    console.log(allbuttonElement)

        function selectRecipient(recp, name) {
            recipient = recp;
            console.log(recipient)
            const allbuttonElements = document.querySelectorAll('.users');
            console.log(allbuttonElements)
            allbuttonElements.forEach((button) => {
                console.log(button)
                button.classList.remove('btn-danger');
            });

            navbarbrand.textContent = name;

            // Add btn-primary class to the clicked li element
            const clickedLiElement = document.querySelector(`.users[data-id="${recp}"]`);
            clickedLiElement.classList.remove('btn-light');
            clickedLiElement.classList.add('btn-danger');
            handlesidebar()
            msgBox.innerHTML = '';
        }

        const form = document.querySelector('form');
        const inputmsg = document.getElementById('inputmsg');
        const msgBox = document.getElementById('msgBox');
        const enterroom = document.getElementById("enterroom");

        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const message = inputmsg.value;
            if (message !== "" && recipient !== '') {
                var div = document.createElement('div');
                div.textContent = message;
                div.classList.add('sentmsg');
                msgBox.append(div);

                const payload = {
                    sender: socket.id,
                    recipient: recipient,
                    message: message
                };
                // console.log(payload)
                socket.emit('message', payload);

                inputmsg.value = '';
            } else {
                return;
            }

        });

 
        socket.on('message', (payload) => {
            let { message } = payload;
            var div = document.createElement('div');
            div.textContent = message;
            div.classList.add('receivedmsg');
            document.getElementById('msgBox').append(div);
        });






document.getElementById('showUserListBtn').addEventListener('click', () => {
    socket.emit('getUserList'); 
});



const userListPopup = document.getElementById('userListPopup');
const showUserListBtn = document.getElementById('showUserListBtn');
const closeBtn = document.querySelector('.close-btn');
const userListElement = document.getElementById('userListdata');


function showUserList(users) {
    userListElement.innerHTML = '';
    const loggedInUserEmail = localStorage.getItem('email');

    users.forEach(user => {
        const li = document.createElement('li');
              
        li.innerHTML = `
            <span class="label">Name:</span> ${user.name}<br>
            <span class="label">Email:</span> <a href="#" class="email-link">${user.email}</a><br>
            <span class="label">ID:</span> ${user.id}
        `;
           li.classList.add('user-details'); 
        userListElement.appendChild(li);

    
        const emailLink = li.querySelector('.email-link');
        emailLink.addEventListener('click', async (event) => {
            event.preventDefault();
            if (!emailLink.dataset.detailsShown) {
                const userDetails = await getUserDetailsByEmail(user.email); 
                if (userDetails) {
                    const detailsLi = document.createElement('li');
                    detailsLi.innerHTML = `
                        <span class="label">Mobile Number:</span> ${userDetails.mobileNo}<br>
                        <span class="label">Address:</span> ${userDetails.address.street}, ${userDetails.address.city}, ${userDetails.address.state}, ${userDetails.address.country}<br>
                    `;
                    li.appendChild(detailsLi);
                    emailLink.dataset.detailsShown = true;
            } else {
                alert('User details not found');
            }
        }
        });
    });

    userListPopup.style.display = 'block';
}

async function getUserDetailsByEmail(email) {
  
    try {
        const response = await fetch(`https://livechat-wzco.onrender.com/user/${email}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch user details');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}



showUserListBtn.addEventListener('click', () => {
    userListPopup.style.display = 'block'; 
    socket.emit('getUserList'); 
});

socket.on('userList', (users) => {
    showUserList(users);
});

closeBtn.addEventListener('click', () => userListPopup.style.display = 'none');


showUserListBtn.addEventListener('click', () => userListPopup.style.display = 'block');


socket.on("userList", (list) => {
    // console.log(list)
    let htmlStr = list.map((ele) => {
        // console.log(ele.id);
        if (ele.id !== socket.id) {
            return `<button class="btn btn-light my-1 users" data-id="${ele.id}" onclick="selectRecipient('${ele.id}','${ele.name}','${ele.email}')">
                <i class='bx bxs-user-circle'></i>
                <span>${ele.name}</span>
            </button>`;
        } else {

            showusername.innerText = ele.name;

           

            return '';
        }
    }).join("");

    userlistcontainer.innerHTML = htmlStr;
});

 
















