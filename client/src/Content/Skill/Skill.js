import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Skill.css'

export default function Skill() {
    return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12 mb-4 mt-4'>
            <h1 className='text-start  mb-4 fw-bold text-white'>COMPÉTENCE & OUTILES</h1>
            <div className='row text-center'>
                <a className='col-2' href="https://www.php.net" target="_blank"> <img src="https://icongr.am/devicon/php-original.svg?size=125&color=141414" alt="php" width="40" height="40"/> </a>
                <a className='col-2' href="https://www.w3.org/html/" target="_blank"> <img src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt="html5" width="40" height="40"/> </a>
                <a className='col-2' href="https://www.python.org" target="_blank"> <img src="https://icongr.am/devicon/python-original.svg?size=125&color=141414" alt="python" width="40" height="40"/> </a>
                <a className='col-2' href="https://www.java.com" target="_blank"> <img src="https://icongr.am/devicon/java-original-wordmark.svg?size=148&color=currentColor" alt="java" width="40" height="40"/> </a>
                <a className='col-2' href="https://www.linux.org/" target="_blank"> <img src="https://icongr.am/devicon/linux-original.svg?size=125&color=141414" alt="linux" width="40" height="40"/> </a> 
                <a className='col-2' href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
                <a className='col-3' href="https://www.postgresql.org/" target="_blank"> <img src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor" alt="html5" width="40" height="40"/> </a>
                <a className='col-3' href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank"> <img src="https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor" alt="html5" width="40" height="40"/> </a>
                <a className='col-3' href="https://www.adobe.com/fr/products/photoshop.html" target="_blank"> <img src="https://icongr.am/devicon/photoshop-line.svg?size=128&color=ffffff" alt="html5" width="40" height="40"/> </a>
                <a className='col-3' href="https://www.mongodb.com/fr-fr" target="_blank"> <img src="https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor" alt="html5" width="40" height="40"/> </a>
                <a className='col-4' href="https://www.heroku.com/" target="_blank"> <img src="https://icongr.am/devicon/heroku-original.svg?size=128&color=currentColor" alt="html5" width="40" height="40"/> </a>
                <a className='col-4'  href="https://www.w3.org/html/" target="_blank"> <img src="https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor" alt="html5" width="40" height="40"/> </a>
                <a className='col-4'  href="https://reactjs.org/" target="_blank"> <img src="https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=ffffff" alt="html5" width="40" height="40"/> </a>
                <a className='col-6' href="https://symfony.com/" target="_blank"> <img src="https://icongr.am/devicon/symfony-original.svg?size=124&color=f4cfff" alt="git" width="40" height="40"/> </a>
                <a className='col-6' href="https://www.mysql.com/fr/" target="_blank"> <img src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=128&color=currentColor" alt="git" width="40" height="40"/> </a>
                <a className='col-12' href="https://www.docker.com/" target="_blank"> <img src="https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor" alt="git" width="40" height="40"/> </a>
            </div>
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