import React from 'react'

function Login() {
  return (
    <div>
       <div class="backgroundimage3">
        <div class="login-container">
            <form class="login-form">
                <h2 >Login</h2>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required/>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>

                <button type="button" onclick="login()">Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
