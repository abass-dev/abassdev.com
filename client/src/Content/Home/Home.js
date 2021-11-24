import React from 'react'
import Profile from '../Profile/Profile'
import Skill from '../Skill/Skill'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'
import './Home.css'

export default function Home() {
    return (
        <div className='container-fluid bg-dark'>
            <div className='row'>
                <div className='profile-container'>
                    <Profile />
                    <div className='home-container'>
                    <Skill />
                    <Project />
                </div>
                    <Footer />
            </div>
        </div>
        </div>
    );
}