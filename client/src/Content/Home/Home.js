import React from 'react'
import Profile from '../Profile/Profile'
import Project from '../Project/Project'

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='profile-container'>
                    <Profile />
                    <Project />
                </div>
            </div>
        </div>
    );
}