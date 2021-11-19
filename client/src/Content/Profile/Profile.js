import React from "react"
import "./Profile.css"
import Typical from "react-typical"
import 'font-awesome/css/font-awesome.min.css'
import profileImage from '../../assets/images/abass-profile.jpg'

export default function Profile() {
    return (
        <div className='row profile-container'>
        <div className='container'>
        <div className='row'>
            <div className='col-12 text-center mt-4 mb-4 profile-header'>
                <div className='profile-socieal-links'>
                     <a href='#'>
                        <i className="fa fa-facebook"></i>
                     </a>
                     <a href='#'>
                        <i className="fa fa-twitter"></i>
                     </a>
                     <a href='#'>
                        <i className="fa fa-github"></i>
                     </a>
        </div>
                <h1 className='text-white'><span className='text-primary'>HI,</span> I'M ABASS DEV</h1>
                 <h2>
                 <Typical
                steps={[
                    'Full stack developer 💻',
                    2000,
                    'Open-source lover 💗',
                    2000,
                    '6+ years of experience 📆',
                    2000
                ]}
                loop={Infinity}
                />
                 </h2>
            <div className='row align-items-center'>
            
                <div className='col-12 profile-separator'></div>
               
                <div className='col-12 col-md-6'>
                    <p className='text-primary h5'>intellegat fringilla tamquam option definiebas appetere aliquam deseruisse delenit has nobis quot option suspendisse. </p>
                </div>
                
                <div className='d-none d-md-block col-md-6'>
                    <div className='profile-picture'></div>
                </div>
                
            </div>
        </div>
        
        </div>
        </div>
        </div>
    )
}