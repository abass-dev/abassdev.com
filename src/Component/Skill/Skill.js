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
                    <div className='card border-primary bg-transparent'>
                    <div className='card-body md-title'>
                    <div className='row'>
                     <div className='col-12 skill-card-text card-text'>
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
                    <div className='card bg-transparent border-primary'>
                    <div className='card-body md-title'>
                    <div className='row'>
                    <div className='col-12 skill-card-text card-text'>
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
                    <div className='card bg-transparent border-primary'>
                    <div className='card-body md-title'>
                        <div className='row'>
                        <div className='col-12 skill-card-text card-text'>
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
                    <div className='card bg-transparent border-primary'>
                    <div className='card-body md-title'>
                        <div className='row'>
                        <div className='col-12 skill-card-text card-text'>
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
                    <div className='card border-primary bg-transparent'>
                    <div className='card-body md-title'>
                        <div className='row'>
                        <div className='col-12 skill-card-text card-text'>
                        <i class="devicon-java-plain colored"></i>
                        <span> Java</span>
                        </div>
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
                    <div className='card bg-transparent border-primary'>
                    <div className='card-body md-title'>
                        <div className='row'>
                        <div className='col-12 card-text'>
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
                
               
            </div>
        </div>
    );
}