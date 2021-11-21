import React from "react"
import "./Profile.css"
import Typical from "react-typical"
import 'font-awesome/css/font-awesome.min.css'

export default function Profile() {
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-12 mt-4 mb-4 profile-header'>
                <div className='text-center mb-4 profile-socieal-links'>
                     <a href='https://www.facebook.com/abasscheik.ben'>
                        <i className="fa fa-facebook"></i>
                     </a>
                     <a href='https://twitter.com/abasscheik1'>
                        <i className="fa fa-twitter"></i>
                     </a>
                     <a href='https://github.com/abass-dev'>
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
            
                <div className='col-12 mx-4'></div>
               
                <div className='mt-4 d-none d-md-block col-md-6'>
                    <div className='profile-picture'></div>
                </div>
                
                <div className='col-md-6 text-white'>
                    <h1 className='mt-4'>À-propos de moi</h1>
                    <p className='lead text-start'>
                        Je suis développeur Full Stack. Passionné de l'internet et de la programmation depuis plus 6 ans.
                        Pendant mon temps libre, j'écris des articles sur <a href='https://todaydevs.com'>todaydevs.com</a> et contribue à la communauté <a href='https://github.com/abass-dev?tab=repositories'>Open-Source</a>
                    </p>
                </div>
                
            </div>
        </div>
        </div>
        </div>
    )
}