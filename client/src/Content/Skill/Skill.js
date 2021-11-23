import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Skill.css'
import skillDetailes from '../../assets/images/abass-bencheik.jpg'


export default function Skill() {
    return (
    <div className='container'>
    <div className='row'>
                <div className='col-12 my-4'>
             <h1 className='text-start  mb-4 fw-bold text-white'>COMPÉTENCE & OUTILES</h1>
                <img alt="compétence détails" width='100%' height='auto' className="img img-thumbnail" src={skillDetailes} />
                </div>
                
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>PHP </span> <div style={{width: '75%'}} className="progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
        </div>
                
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>JAVA </span> <div style={{width: '45%'}} className="progress-bar progress-bar-striped bg-info" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
        </div>
                
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>JS </span> <div style={{width: '65%'}} className="progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
        </div>
                
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>HTML </span> <div style={{width: '80%'}} className="progress-bar progress-bar-striped bg-danger" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
        </div>
                
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>PYTHON </span> <div style={{width: '45%'}} className="progress-bar progress-bar-striped bg-dark" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
        </div>
        
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>MYSQL </span> <div style={{width: '55%'}} className="progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
        </div>
        
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>CSS </span> <div style={{width: '70%'}} className="progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
        </div>
        
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>MONGODB </span> <div style={{width: '30%'}} className="progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
            </div>
        </div>
                
        <div className='col-md-6 mb-4'>
            <div className="progress">
            <span className='bg-transparent mx-1 text-dark skill-progress-title'>POSTGRESQL </span> <div style={{width: '35%'}} className="progress-bar progress-bar-striped bg-info" role="progressbar"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
        </div>
        
    </div>
    </div>
);
}