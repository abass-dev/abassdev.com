import React from 'react'
import { useTranslation } from 'react-i18next'
import 'font-awesome/css/font-awesome.min.css'
import './Skill.css'
import Item from "./Item"

export default function Skill() {
    const {t} = useTranslation();
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 id='competence' className='text-start large-title mt-4 fw-bold'>{t("skill.title")}</h1>
                    <p className="after-title"></p>
                    </div>
                
                <div className='col-12 mb-4 text-white'>
                    
                  <div className='row'>
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title text-secondary'>{t("skill.frontend")}</h4>
                    <div className='card border-gray bg-light'>
                    <div className='card-body md-title'>
                    <div className='row card-text'>
                    
                    <Item  
                      title="HTML" 
                      target="html"
                      icon="devicon-html5-plain"
                      desk="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
                      link="https://en.m.wikipedia.org/wiki/HTML"/>
                    
                    <Item  
                      title="Sass" 
                      target="sass"
                      icon="devicon-sass-original"
                      desk="Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml."
                      link="https://en.m.wikipedia.org/wiki/Sass_(stylesheet_language)"/>
                  
                    <Item  
                      title="Bootstrap" 
                      target="bootstrap"
                      icon="devicon-bootstrap-plain"
                      desk="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
                      link="https://en.m.wikipedia.org/wiki/Bootstrap_(front-end_framework)"/>
                  
                    <Item  
                      title="JavaScript" 
                      target="javascript"
                      icon="devicon-javascript-plain"
                      desk="JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries."
                      link="https://en.m.wikipedia.org/wiki/JavaScript"/>
                  
                    <Item  
                      title="React" 
                      target="react"
                      icon="devicon-react-plain"
                      desk="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
                      link="https://en.m.wikipedia.org/wiki/React_(JavaScript_library)"/>
                  
                    </div>
                  </div>
                </div>
              </div>
              
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>{t("skill.backend")}</h4>
                <div className='card bg-light border-gray'>
                  <div className='card-body md-title'>
                    <div className='row card-text'>
                    
                    <Item  
                      title="PHP" 
                      target="php"
                      icon="devicon-php-plain"
                      desk="PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group."
                      link="https://en.m.wikipedia.org/wiki/PHP"/>
                    
                    <Item  
                      title="NodeJs" 
                      target="nodejs"
                      icon="devicon-nodejs-plain"
                      desk="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
                      link="https://en.m.wikipedia.org/wiki/Node.js"/>
                    
                    <Item  
                      title="ExpressJs" 
                      target="expressjs"
                      icon="devicon-express-original"
                      desk="Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
                      link="https://en.m.wikipedia.org/wiki/Express.js"/>
                    
                    <Item  
                      title="Symfony" 
                      target="symfony"
                      icon="devicon-symfony-original"
                      desk="Symfony is a PHP web application framework and a set of reusable PHP components/libraries. It was published as free software on October 18, 2005, and released under the MIT license."
                      link="https://en.m.wikipedia.org/wiki/Symfony"/>
                    
                </div>
             </div>
          </div>

                    </div>
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title text-secondary'>{t("skill.database")}</h4>
                    <div className='card bg-light border-gray'>
                    <div className='card-body md-title'>
                        <div className='row card-text'>
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
                    <h4 className='md-title text-secondary'>{t("skill.tools")}</h4>
                    <div className='card bg-light border-gray'>
                    <div className='card-body md-title'>
                        <div className='row card-text'>
                        <div className='col-12 skill-card-text card-text'>
                        <i class="devicon-git-plain colored"></i>
                        <span> Git</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-heroku-plain colored"></i>
                        <span> Heroku</span>
                    </div>
                    <div className='col-12 skill-card-text'>
                        <i class="devicon-github-original colored"></i>
                        <span> Github</span>
                    </div>
                       </div>
                    </div>
                    </div>
                    </div>
                    
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title text-secondary'>{t("skill.mobiles")}</h4>
                    <div className='card border-gray bg-light'>
                    <div className='card-body md-title'>
                        <div className='row card-text'>
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
                    <h4 className='md-title text-secondary'>{t("skill.software")}</h4>
                    <div className='card bg-light border-gray'>
                    <div className='card-body md-title'>
                        <div className='row card-text'>
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
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title text-secondary'>{t("skill.editor")}</h4>
                    <div className='card bg-light border-gray'>
                    <div className='card-body md-title'>
                        <div className='row card-text'>
                        <div className='col-12 skill-card-text'>
                        <i class="devicon-vscode-plain colored"></i>
                        <span> VsCode</span>
                    </div>
                        <div className='col-12 skill-card-text'>
                        <i class="devicon-androidstudio-plain colored"></i>
                        <span> Android Studio</span>
                    </div>
                
                       </div>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                    <h4 className='md-title text-secondary'>Spoken languages</h4>
                    <div className='card bg-light border-gray'>
                    <div className='card-body md-title'>
                        <div className='row card-text'>
                          
                          <div className='col-12 skill-card-text'>
                            <div className="progress w-100">
                              <span className="bg-secondary text-white"> French </span> 
                            <div class="progress-bar french" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                             </div>
                          </div>
                
                          <div className='col-12 skill-card-text'>
                            <div className="progress w-100">
                              <span className="bg-secondary text-white"> Haussa </span> 
                            <div class="progress-bar haussa" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                             </div>
                          </div>
                          <div className='col-12 skill-card-text'>
                            <div className="progress w-100">
                              <span className="bg-secondary text-white"> English </span> 
                            <div class="progress-bar english" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                             </div>
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