import React from 'react'
import Profile from '../Profile/Profile'
import Skill from '../Skill/Skill'
import Project from '../Project/Project'

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='profile-container'>
                    <Profile />
                    <Skill />
                    <Project />
                </div>
            </div>
        </div>
    );
}