
<h1>Chat-App</h1>

<p>This is a simple chat application built using Socket.IO for real-time messaging. It allows users to register, login, and communicate with each other in real-time.</p>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: HTML, CSS, JavaScript, React</li>
  <li><strong>Backend</strong>: Node.js, Express</li>
  <li><strong>Database</strong>: MongoDB</li>
  <li><strong>Real-time Communication</strong>: Socket.IO</li>
</ul>

<h2>Features</h2>
<ul>
  <li><strong>User Registration</strong>: Users can register by providing their name, email, password, mobile number, and address details.</li>
  <li><strong>User Login</strong>: Registered users can login using their email and password.</li>
  <li><strong>Real-time Messaging</strong>: Users can send and receive messages in real-time.</li>
  <li><strong>User List</strong>: Users can view a list of other users currently online and select a user to chat with.</li>
  <li><strong>User Details</strong>: Users can view details of other users, including their mobile number and address, by clicking on their email.</li>
</ul>

<h2>Getting Started</h2>
<ol>
  <li>Clone the repository.</li>
  <li>Install dependencies using <code>npm install</code>.</li>
  <li>Start the server using <code>npm start</code>.</li>
  <li>Access the application in your browser at <code>http://localhost:3000</code>.</li>
</ol>

<h2>Endpoints</h2>
<ol>
  <li>
    <strong>User Registration</strong>:
    <ul>
      <li><strong>Endpoint</strong>: POST /user/register</li>
      <li><strong>Description</strong>: Registers a new user with the provided details.</li>
      <li><strong>Example</strong>:<br>
        <pre>
          {
            "name": "John Doe",
            "email": "john@example.com",
            "password": "password123",
            "lastName": "Doe",
            "mobileNo": "1234567890",
            "address": {
              "street": "123 Main St",
              "city": "City",
              "state": "State",
              "country": "Country"
            }
          }
        </pre>
      </li>
    </ul>
  </li>
  <li>
    <strong>User Login</strong>:
    <ul>
      <li><strong>Endpoint</strong>: POST /user/login</li>
      <li><strong>Description</strong>: Logs in a user with the provided email and password.</li>
      <li><strong>Example</strong>:<br>
        <pre>
          {
            "email": "john@example.com",
            "password": "password123"
          }
        </pre>
      </li>
    </ul>
  </li>
  <li>
    <strong>Get User Details by Email</strong>:
    <ul>
      <li><strong>Endpoint</strong>: GET /user/:email</li>
      <li><strong>Description</strong>: Retrieves the details of a user by their email address.</li>
    </ul>
  </li>
</ol>
<h2>Image</h2>




![Screenshot 2024-02-28 222357](https://github.com/manshikumari12/chat-app-/assets/119393324/a89f2fa5-48a8-4d2d-a4be-85018f597f24)

![Screenshot 2024-02-28 222343](https://github.com/manshikumari12/chat-app-/assets/119393324/c2538c1e-4edd-4340-9247-6edb3c7f6699)
![Screenshot 2024-02-28 222143](https://github.com/manshikumari12/chat-app-/assets/119393324/09c6ff9a-2ad8-4746-b8d4-4e8c93762558)

![Screenshot 2024-02-28 222102](https://github.com/manshikumari12/chat-app-/assets/119393324/e5dd1bb6-1d93-4848-a877-b0bf248513f9)
![Screenshot 2024-02-28 222122](https://github.com/manshikumari12/chat-app-/assets/119393324/5a588b8b-fc0e-4c67-8a04-faabaa7289f1)
![Screenshot 2024-02-28 222309](https://github.com/manshikumari12/chat-app-/assets/119393324/1cd50b98-114d-4af8-a6c4-63cd83e29b7a)

![Screenshot 2024-02-28 222330](https://github.com/manshikumari12/chat-app-/assets/119393324/c3bddfc7-73a0-4533-b378-d1745d4d9375)


<h2>Note</h2>

<p>This is a basic implementation and may require further enhancements for production use. Ensure to configure the application with your MongoDB database URI .</p>

<h2>Authors</h2>
<p>Manshi (<a href="https://github.com/manshikumari12">github.com/manshikumari12)</a>)</p>

<h2>Acknowledgements</h2>
<p>This project was developed as part of a learning exercise in web development.</p>

