import React from 'react'
import './Main.css'
import leftimg from '../../assets/img/image2.png'
import { useFormik } from 'formik';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';


const Main = () => {
  const navigate = useNavigate ();
  var userid  = localStorage.getItem("mytoken")
    console.log(userid)
 const formik = useFormik({

    initialValues: {
      url: '',
      username: userid,
    },
    onSubmit:async (values)  => {
    console.log(values)
    var response  =  await axios.post("https://url-project-backend.herokuapp.com/url",values).then((res) => { return res.data})
    console.log(response)
    navigate("/firstpage")
    },
  });


  return (
    <div className='container'>
      <div className='row'>

        <div class="nav-scroller bg-body shadow-sm mt-5">
          <nav class="nav nav-underline" aria-label="Secondary navigation">
            <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
            
          </nav>
        </div>

        <main class="container">
          <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
            <img class="me-3" src={leftimg} alt="" width="48" height="38" />

            <div class="lh-1">
              <h1 class="h6 mb-0 text-white lh-1">Bootstrap</h1>
              <small>Since 2011</small>
            </div>
          </div>
          {/* input link field */}
          <form  onSubmit={formik.handleSubmit}>
          <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Enter your URL"   name="url"
                     onChange={formik.handleChange}
                     value={formik.values.url} />
         <input class="btn btn-success" type="submit" id="button-addon2" />
         </div>
          </form>





        </main>
      </div>
    </div>
  )
}

export default Main
