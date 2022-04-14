import React from 'react'
import './Home.css'
import leftimg from "../../assets/img/image2.png"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-lg-12'>
                    <h1>Fox URL Shortener Application</h1>
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-8 image'>
                    <img src={leftimg} alt=''></img>
                </div>
                <div className='col-lg-4 login'>
                    <h4>Welcome to the Fox URL Shortener</h4>
                    <div className='col-lg-4 ' >
                        <div className='buttongroup'></div>
                       <Link to='/login'><button className='button__login'>Login</button></Link> 
                       <Link to='/register'><button className='button__login'> Sign up</button></Link> 
                      
                    </div>
                  
                </div>


            </div>









        </div>
    )
}

export default Home
