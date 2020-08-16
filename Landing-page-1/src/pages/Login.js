import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import {Link} from "gatsby"



const login=()=>(
    
        <div id='login_page' class='d-flex justify-content-center align-items-center '>

            <form  id='gen_form'>

                <h2 id='welcome_text' class='text-secondary text-center'>Welcome Back</h2>

                <div id='form' class='form-group'>
                    <label class='label text-secondary' for='email'>Email or Class Code</label>
                    <input type='text' name='email' id='email' class='form-control' placeholder='Enter Email or Student Code'/>
                </div>

                <div id='form' class='form-group'>
                    <label class='label text-secondary' for='password'>Password</label>
                    <input type='password' name='password' id='password' class='form-control' placeholder='Enter Password'/>
                </div>

                <div class='form-group'>
                    <p id='remember_password'>Can't remember your password ? <span><Link id='link' to="/Reset">RESET IT</Link></span></p>
                    <button id='submit' type='submit' class='btn btn-primary'>LOG IN</button>
                    <p id='sign_up' class='text-center'>New to Gradely? <span><Link id='link' to="/SignUp">Sign Up now</Link></span> </p>
                </div>
            </form>
           
        </div>
    
)

export default login