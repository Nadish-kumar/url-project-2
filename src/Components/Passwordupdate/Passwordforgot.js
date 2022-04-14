import React from 'react'
import { useFormik } from 'formik';
import leftimg from "../../assets/img/image2.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Passwordforgot = () => {
   
    const navigate = useNavigate();
        const formik = useFormik({
          initialValues: {
              email :"",
         password : "",
         conform :"",
          },
          onSubmit: async (values) => {
          try {
            await axios.put("https://url-project-backend.herokuapp.com/register",values)
            navigate ('/login')
          } catch (error) {
              console.log(error)
          }
          },
        });

    return (
     <div className='container'>
         <div className='row'>
          
         <form class="form-signin" onSubmit={formik.handleSubmit}>
          <div class="text-center mb-4">
            <img class="mb-4" src={leftimg} alt="" width="72" height="72"/>
            <h1 class="h3 mb-3 font-weight-normal">Forgot Password</h1>
            <p>Build user URL with ours <code>:URL-shown</code> Link-element.Works in latest Chrome, Safari, and Firefox.</p>
          </div>

          <div class="form-label-group mb-3">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""    name="email"
             onChange={formik.handleChange}
             value={formik.values.email} />
            {/* <label for="inputEmail">Email address</label> */}
          </div>
    
          <div class="form-label-group mb-3">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" autofocus=""    name="password"
             onChange={formik.handleChange}
             value={formik.values.password} />
            {/* <label for="inputEmail">Email address</label> */}
          </div>
    
          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Re-Enter Password" required=""    name="conform"
             onChange={formik.handleChange}
             value={formik.values.conform} />
            {/* <label for="inputPassword">Password</label> */}
          </div>
    
          
          <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted text-center">© 2022-2023</p>
        </form>
      
      
             
         </div>
         </div>
    )
}

export default Passwordforgot
