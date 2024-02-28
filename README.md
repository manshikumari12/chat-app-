<h1>Chat-App</h1>

<p>This is a simple chat application built using Socket.IO for real-time messaging. It allows users to register, login, and communicate with each other in real-time.</p>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: HTML, CSS, JavaScript</li>
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
  <!-- Add other endpoints similarly -->
</ol>

<h2>Note</h2>
<p>This is a basic implementation and may require further enhancements for production use. Ensure to configure the application with your MongoDB database URI and AWS credentials for hosting and file storage.</p>

<h2>Authors</h2>
<p>Manshi (<a href="https://github.com/manshi27">github.com/manshi27</a>)</p>

<h2>Acknowledgements</h2>
<p>This project was developed as part of a learning exercise in web development.</p>
