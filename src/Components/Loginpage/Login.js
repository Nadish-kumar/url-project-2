import React from 'react'
import './Login.css'
import leftimg from "../../assets/img/image2.png"
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Main = () => {
 const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        email: '',
        password : ''
    },
    onSubmit: async (values) => {
    try {
      let logindata = await axios.post("https://url-project-backend.herokuapp.com/login",values)
       window.localStorage.setItem('mytoken',logindata.data.token)
     
       navigate("/main")
    } catch (error) {
      console.log(error);
    }
    },
  });

    return (
        <div className='container'>
          <div className='row'>
           
            <form class="form-signin" onSubmit={formik.handleSubmit}>
          <div class="text-center mb-4">
            <img class="mb-4" src={leftimg} alt="" width="72" height="72"/>
            <h1 class="h3 mb-3 font-weight-normal">Login Profile</h1>
            <p>Build user URL with ours <code>:URL-shown</code> Link-element.Works in latest Chrome, Safari, and Firefox.</p>
          </div>
    
          <div class="form-label-group mb-3">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""    name="email"
             onChange={formik.handleChange}
             value={formik.values.email} />
            {/* <label for="inputEmail">Email address</label> */}
          </div>
    
          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""    name="password"
             onChange={formik.handleChange}
             value={formik.values.password} />
            {/* <label for="inputPassword">Password</label> */}
          </div>
    
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div class="checkbox mb-3">
            <label>
            <Link to="/passwordupdate">Forgot password</Link> 
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
        </form>
      
    
        </div>
        </div>
   
    )
}

export default Main
