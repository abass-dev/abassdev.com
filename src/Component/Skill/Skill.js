import Item from './Item'
import { useRef } from 'react'
import { AnimInfinity } from '../Util/Util'
import './Skill.css'

export default function Skill() {
  const skillRef = useRef(null)
  AnimInfinity(skillRef, '.skillRefID')

  return (
    <div id='skills-tools' className='container-lg'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center primary-font primary-text mb-4'>Skills, Tools and Tech</h1>
        </div>

        <div className='col-12 mb-4'>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Front-end knowledge</h4>
              <div className='card border-gray'>
                <div className='card-body pb-0 md-title'>
                  <div className='row'>
                    <Item
                      title='HTML'
                      target='html'
                      icon='devicon-html5-plain'
                      desk='The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
                      link='https://en.m.wikipedia.org/wiki/HTML'
                    />

                    <Item
                      title='CSS'
                      target='css'
                      icon='devicon-css-original'
                      link='https://en.m.wikipedia.org/wiki/css_(stylesheet_language)'
                    />

                    <Item
                      title='Sass'
                      target='sass'
                      icon='devicon-sass-original'
                      desk="Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml."
                      link='https://en.m.wikipedia.org/wiki/Sass_(stylesheet_language)'
                    />

                    <Item
                      title='Bootstrap'
                      target='bootstrap'
                      icon='devicon-bootstrap-plain'
                      desk='Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.'
                      link='https://en.m.wikipedia.org/wiki/Bootstrap_(front-end_framework)'
                    />

                    <Item
                      title='JavaScript'
                      target='javascript'
                      icon='devicon-javascript-plain'
                      desk='JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.'
                      link='https://en.m.wikipedia.org/wiki/JavaScript'
                    />

                    <Item
                      title='React'
                      target='react'
                      icon='devicon-react-plain'
                      desk='React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.'
                      link='https://en.m.wikipedia.org/wiki/React_(JavaScript_library)'
                      lastChild={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Back-end knowledge</h4>
              <div className='card border-gray'>
                <div className='card-body pb-0  md-title'>
                  <div className='row card-text'>
                    <Item
                      title='PHP'
                      target='php'
                      icon='devicon-php-plain'
                      desk='PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.'
                      link='https://en.m.wikipedia.org/wiki/PHP'
                    />

                    <Item
                      title='NodeJs'
                      target='nodejs'
                      icon='devicon-nodejs-plain'
                      desk='Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
                      link='https://en.m.wikipedia.org/wiki/Node.js'
                    />

                    <Item
                      title='ExpressJs'
                      target='expressjs'
                      icon='devicon-express-original'
                      desk='Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.'
                      link='https://en.m.wikipedia.org/wiki/Express.js'
                    />

                    <Item
                      title='Symfony'
                      target='symfony'
                      icon='devicon-symfony-original'
                      desk='Symfony is a PHP web application framework and a set of reusable PHP components/libraries. It was published as free software on October 18, 2005, and released under the MIT license.'
                      link='https://en.m.wikipedia.org/wiki/Symfony'
                      lastChild={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Databases</h4>
              <div className='card border-gray'>
                <div className='card-body pb-0  md-title'>
                  <div className='row card-text'>
                    <Item title='MySQL' target='mysql' icon='devicon-mysql-plain' desk='' link='' />

                    <Item title='MangoDb' target='mangodb' icon='devicon-mongodb-plain' desk='' link='' />

                    <Item
                      title='PostgreSQL'
                      target='postgresql'
                      icon='devicon-postgresql-plain'
                      desk=''
                      link=''
                      lastChild={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Tools</h4>
              <div className='card border-gray'>
                <div className='card-body pb-0  md-title'>
                  <div className='row card-text'>
                    <Item
                      title='Git'
                      target='git'
                      icon='devicon-git-plain'
                      desk='Git is a distributed version control system that is widely used in software development to manage and track changes to source code. It was created by Linus Torvalds in 2005 and is now maintained by the open-source community.'
                      link='https://git-scm.com/'
                    />

                    <Item
                      title='Docker'
                      target='docker'
                      icon='devicon-docker-plain'
                      desk='Docker is a software platform that allows developers to easily package and deploy applications as self-contained containers. It was first released in 2013 and has since become a popular tool for building, shipping, and running software applications.'
                      link='https://www.docker.com/'
                    />

                    <Item
                      title='Heroku'
                      target='heroku'
                      icon='devicon-heroku-plain'
                      desk='Heroku is a cloud-based platform as a service (PaaS) that allows developers to easily build, deploy, and manage web applications. It was founded in 2007 and acquired by Salesforce in 2010.'
                      link='https://www.heroku.com/'
                    />

                    <Item title='Firefox' target='firefox' icon='devicon-firefox-plain' desk='' link='' />

                    <Item
                      title='Github'
                      target='github'
                      icon='devicon-github-original'
                      desk='GitHub is a web-based platform for version control and collaborative software development. It was founded in 2008 and is now owned by Microsoft.'
                      link='https://github.com/'
                      lastChild={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Application Android & IOS</h4>
              <div className='card border-gray'>
                <div className='card-body pb-0  md-title'>
                  <div className='row card-text'>
                    <Item title='Java' target='java' icon='devicon-java-plain' desk='' link='' />

                    <Item
                      title='React Native'
                      target='reactnative'
                      icon='devicon-react-plain'
                      desk=''
                      link=''
                      lastChild={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Software development</h4>
              <div className='card border-gray'>
                <div className='card-body pb-0  md-title'>
                  <div className='row card-text'>
                    <Item title='Python' target='python' icon='devicon-python-plain' desk='' link='' />

                    <Item title='Java' target='java-soft' icon='devicon-java-plain' desk='' link='' lastChild={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Editors</h4>
              <div className='card border-gray'>
                <div className='card-body pb-0  md-title'>
                  <div className='row card-text'>
                    <Item title='VsCode' target='vscode' icon='devicon-vscode-plain' desk='' link='' />

                    <Item
                      title='Android Studio'
                      target='androidstudio'
                      icon='devicon-androidstudio-plain'
                      desk=''
                      link=''
                      lastChild={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div ref={skillRef} className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Spoken languages</h4>
              <div className='card skillRefID slide-first border-gray'>
                <div className='card-body pb-0  md-title'>
                  <div className='row card-text'>
                    <div className='col-12 mb-2'>
                      <div className='progress w-100'>
                        <span className='bg-secondary text-white'> French </span>
                        <div
                          className='progress-bar bg-secondary french'
                          role='progressbar'
                          aria-valuenow='95'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                          95%
                        </div>
                      </div>
                    </div>

                    <div className='col-12 mb-2'>
                      <div className='progress w-100'>
                        <span className='bg-secondary text-white'> Haussa </span>
                        <div
                          className='progress-bar bg-secondary haussa'
                          role='progressbar'
                          aria-valuenow='50'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                          50%
                        </div>
                      </div>
                    </div>
                    <div className='col-12 mb-2'>
                      <div className='progress w-100'>
                        <span className='bg-secondary text-white'> English </span>
                        <div
                          className='progress-bar bg-secondary english'
                          role='progressbar'
                          aria-valuenow='38'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                          38%
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
    </div>
  )
}
