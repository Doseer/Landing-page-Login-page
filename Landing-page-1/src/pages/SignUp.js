import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "gatsby"


const signUp=()=>(
    
    <div id='login_page' class='container d-flex justify-content-center align-items-center '>

        <form  id='gen_form'>

            <h2 id='welcome_text' class='text-secondary text-center'>Welcome !</h2>

            <div id='form' class='form-group'>
                <label class='label text-secondary' for='first_name'>First Name</label>
                <input type='text' name='first_name' id='first_name' class='form-control' placeholder='First Name'/>
            </div>

            <div id='form' class='form-group'>
                <label class='label text-secondary' for='last_name'>Last Name</label>
                <input type='text' name='last_name' id='last_name' class='form-control' placeholder='Last Name'/>
            </div>

            <div id='form' class='form-group'>
                <label class='label text-secondary' for='email'>Email</label>
                <input type='text' name='email' id='email' class='form-control' placeholder='Enter Email'/>
            </div>

            <div id='form' class='form-group'>
                <label class='label text-secondary' for='password'>Password</label>
                <input type='password' name='password' id='password' class='form-control' placeholder='Enter Password'/>
            </div>

            <div id='form' class='form-group'>
                <label class='label text-secondary' for='confirm_password'>Password</label>
                <input type='password' name='password' id='confirm_password' class='form-control' placeholder='Confirm Password'/>
            </div>

            <div class='form-group'>
                <button id='submit' type='submit' class='btn btn-primary'>Sign Up</button>
                <p id='sign_up' class='text-center'>Already have an account ? <span><Link id='link' to="/Login">Login now</Link></span> </p>
            </div>
        </form>
    </div>

)

export default signUp