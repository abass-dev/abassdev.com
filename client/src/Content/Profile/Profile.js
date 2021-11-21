import React from "react"
import "./Profile.css"
import Typical from "react-typical"
import 'font-awesome/css/font-awesome.min.css'

export default function Profile() {
    return (
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
                <h1 className='text-white fw-bold'><span className='text-primary'>HELLO,</span> JE SUIS ABASS DEV</h1>
                 <h2 className='text-primary'>
                 <Typical
                steps={[
                    'Full stack developer 💻',
                    2000,
                    '6+ ans d\'expérience 📆',
                    2000,
                    'Open-source lover 💗',
                    2000,
                ]}
                loop={Infinity}
                />
                 </h2>
            <div className='row align-items-center'>
            
                <div className='col-12 profile-separator'></div>
               
                <div className='d-none d-md-block col-md-6'>
                    <div className='profile-picture'></div>
                </div>
                
                <div className='col-md-6'>
                    <p className='lead text-white text-start'>
                    Je suis développeur Full Stack. Passionné de l'internet et de la programmation depuis plus 6 ans.
                    
                    </p>
                </div>
                
            </div>
        </div>
        </div>
        </div>
    )
}