import React from 'react'
import { useTranslation } from 'react-i18next'
import 'font-awesome/css/font-awesome.min.css'
import './Skill.css'

export default function Skill() {
    const {t, i18n} = useTranslation();
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-4'>
                    <h1 id='competence' className='text-start large-title mt-4 fw-bold text-white'>{t("skill.title")}</h1>
                </div>
                
                <div className='col-12 mb-4 text-white'>
                  <div className='row'>
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title'>{t("skill.frontend")}</h4>
                    <div className='card bg-secondary'>
                    <div className='card-body md-title'>
                    <div className='row skill-card-bg'>
                     <div className='col-12 skill-card-text'>
                        <i class="devicon-sass-original colored"></i>
                        <span> Sass</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-bootstrap-plain colored"></i>
                        <span> Bootstrap</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-javascript-plain colored"></i>
                        <span> JavaScript</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-react-plain colored"></i>
                        <span> React</span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title'>{t("skill.backend")}</h4>
                    <div className='card bg-warning'>
                    <div className='card-body md-title'>
                    <div className='row skill-card-bg'>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-php-plain colored"></i>
                        <span> PHP</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-nodejs-plain colored"></i>
                        <span> NodeJS</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-express-original text-white colored"></i>
                        <span> Express JS</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-symfony-original text-white colored"></i>
                        <span> Symfony</span>
                    </div>
                    
                </div>
                </div>
                </div>

                    </div>
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title'>{t("skill.database")}</h4>
                    <div className='card bg-success'>
                    <div className='card-body md-title'>
                        <div className='row skill-card-bg'>
                        <div className='col-12 skill-card-text'>
                        <i class="devicon-mongodb-plain colored"></i>
                        <span> MongoDB</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-mysql-plain colored"></i>
                        <span> MySQL</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-postgresql-plain colored"></i>
                        <span> Postgresql</span>
                    </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title'>{t("skill.tools")}</h4>
                    <div className='card bg-info'>
                    <div className='card-body md-title'>
                        <div className='row skill-card-bg'>
                        <div className='col-12 skill-card-text'>
                        <i class="devicon-git-plain colored"></i>
                        <span> Git</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-heroku-plain colored"></i>
                        <span> Heroku</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-github-original text-white colored"></i>
                        <span> Github</span>
                    </div>
                       </div>
                    </div>
                    </div>
                    </div>
                    
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title'>{t("skill.mobiles")}</h4>
                    <div className='card bg-secondary'>
                    <div className='card-body md-title'>
                        <div className='row skill-card-bg'>
                        <div className='col-12 skill-card-text'>
                        <i class="devicon-react-plain colored"></i>
                        <span> React Native</span>
                    </div>
                       </div>
                    </div>
                    </div>
                    </div>
                    
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title'>{t("skill.software")}</h4>
                    <div className='card bg-danger'>
                    <div className='card-body md-title'>
                        <div className='row skill-card-bg'>
                        <div className='col-12 skill-card-text'>
                        <i class="devicon-python-plain colored"></i>
                        <span> Python</span>
                    </div>
                        <div className='col-12 skill-card-text'>
                        <i class="devicon-java-plain colored"></i>
                        <span> Java</span>
                    </div>
                
                       </div>
                    </div>
                    </div>
                    </div>
                    
                  </div>
                </div>
                
                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>PHP </span> <div style={{ width: '75%' }} className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>JAVA </span> <div style={{ width: '45%' }} className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>JS </span> <div style={{ width: '65%' }} className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>HTML </span> <div style={{ width: '80%' }} className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>PYTHON </span> <div style={{ width: '45%' }} className="progress-bar progress-bar-striped bg-dark" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>MYSQL </span> <div style={{ width: '55%' }} className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">65%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>CSS </span> <div style={{ width: '70%' }} className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>MONGODB </span> <div style={{ width: '30%' }} className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
                    </div>
                </div>

                <div className='col-md-6 mb-4'>
                    <div className="progress">
                        <span className='bg-transparent mx-1 text-dark skill-progress-title'>POSTGRESQL </span> <div style={{ width: '35%' }} className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                    </div>
                </div>

            </div>
        </div>
    );
}