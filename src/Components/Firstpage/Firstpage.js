import axios, { Axios } from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Firstpage = () => {

    const [visible, setvisible] = useState([])
    var userid = localStorage.getItem("mytoken")
    useEffect(async () => {
    try {
        let userdata = await axios.get(`https://url-project-backend.herokuapp.com/url/${userid}`);
         setvisible(userdata.data)
    } catch (error) {
        console.log(error);
    }
    }, [])



    return (
        <>
        <div className='container'>
            <div className='row'>
        <div>
            <h1>Your shortener Url</h1>
        </div>
        </div>
        
            <div className='row'>
                <div className='col-lg-12'>
            <div class="my-3 p-3 bg-body rounded shadow-sm">
            <h6 class="border-bottom pb-2 mb-0">Recent updates</h6>

            {
                            visible.map((object) => {
                              return  <div class="d-flex text-muted pt-3">
                              <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                              <p class="pb-3 mb-0 small lh-sm border-bottom">
                                <strong class="d-block text-gray-dark">{object.url}</strong>
                           </p>
                           </div> 
                            })
             }
                       

       
                
                               
                
                             </div>
                </div>
                </div> 

        </div>
        </>
    )
}

export default Firstpage





                              
                      
                        
          
     