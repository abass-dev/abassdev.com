import React from "react"
import "./Profile.css"
import Typical from "react-typical"
import 'font-awesome/css/font-awesome.min.css'
import profileImage from '../../assets/images/abass-profile.jpg'

export default function Profile() {
    return (
        <div className='row profile-container'>
            <div className='col-12 text-center mt-2 profile-header'>
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
                <h1 className='text-white'>HI, I'M ABASS DEV</h1>
                 <h2>
                 <Typical
                steps={[
                    'Full stack developer 💻',
                    2000,
                    'Open-source lover 💗',
                    2000
                ]}
                loop={Infinity}
                />
                 </h2>
        </div>
        </div>
    )
}