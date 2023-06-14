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
              <div className='card border-0 shadow-sm'>
                <div className='card-body p-0 md-title'>
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
                    desk='CSS, which stands for Cascading Style Sheets, is a powerful language used for describing the presentation and visual appearance of a web page or document written in HTML or XML. It provides a set of rules and instructions that define how elements should be displayed on a screen, printed, or in other media.'
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

            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Back-end knowledge</h4>
              <div className='card border-0 shadow-sm'>
                <div className='card-body p-0  md-title'>
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
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Databases</h4>
              <div className='card border-0 shadow-sm'>
                <div className='card-body p-0  md-title'>
                  <Item
                    title='MySQL'
                    target='mysql'
                    icon='devicon-mysql-plain'
                    desk='MySQL is an open-source relational database management system (RDBMS) that has gained widespread popularity for its robustness, scalability, and ease of use. It is widely used in web development and other applications that require efficient storage and retrieval of large amounts of data. MySQL allows users to create and manage databases, define data structures, perform complex queries, and ensure data integrity through transactions and relational constraints.'
                    link='https://en.m.wikipedia.org/wiki/MySQL'
                  />

                  <Item
                    title='MangoDb'
                    target='mangodb'
                    icon='devicon-mongodb-plain'
                    desk='MongoDB is a popular and widely used NoSQL (non-relational) database management system. It is designed to handle large volumes of data and provide high scalability, flexibility, and performance. MongoDB uses a document-oriented model, where data is stored in flexible, JSON-like documents, making it easy to represent and store complex data structures.'
                    link='https://en.m.wikipedia.org/wiki/MongoDB'
                  />

                  <Item
                    title='PostgreSQL'
                    target='postgresql'
                    icon='devicon-postgresql-plain'
                    desk='PostgreSQL is a powerful open-source relational database management system (RDBMS) known for its robustness, scalability, and extensibility. It provides an efficient and reliable solution for managing large volumes of data and is widely used in various industries and applications.'
                    link='https://en.m.wikipedia.org/wiki/PostgreSQL'
                    lastChild={true}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Tools</h4>
              <div className='card border-0 shadow-sm'>
                <div className='card-body p-0  md-title'>
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

                  <Item
                    title='Firefox'
                    target='firefox'
                    icon='devicon-firefox-plain'
                    desk='Firefox is a popular web browser that provides users with a fast, secure, and customizable online experience. Developed by Mozilla, Firefox has been a key player in the browser market for many years. It is known for its commitment to privacy and open-source principles.'
                    link='https://en.m.wikipedia.org/wiki/Firefox'
                  />

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

            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Android & IOS</h4>
              <div className='card border-0 shadow-sm'>
                <div className='card-body p-0  md-title'>
                  <Item
                    title='Java'
                    target='java'
                    icon='devicon-java-plain'
                    desk='Java is a high-level, object-oriented programming language that was first released in 1995 by Sun Microsystems, which is now owned by Oracle Corporation. It was designed to be platform-independent, allowing developers to write code once and run it on any operating system or device that has a Java Virtual Machine (JVM) installed.'
                    link='https://en.m.wikipedia.org/wiki/Java_(programming_language)'
                  />

                  <Item
                    title='React Native'
                    target='reactnative'
                    icon='devicon-react-plain'
                    desk='React Native is a popular open-source framework used for developing mobile applications. It allows developers to create native mobile apps using JavaScript and the React.js library, which is widely used for building user interfaces. React Native enables the development of cross-platform applications, meaning a single codebase can be used to create apps for both iOS and Android platforms, saving time and effort for developers.'
                    link='https://en.m.wikipedia.org/wiki/React_Native'
                    lastChild={true}
                  />
                </div>
              </div>
            </div>

            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Software</h4>
              <div className='card border-0 shadow-sm'>
                <div className='card-body p-0  md-title'>
                  <Item
                    title='Python'
                    target='python'
                    icon='devicon-python-plain'
                    desk='Python is a versatile and powerful programming language known for its simplicity and readability. Created by Guido van Rossum in the late 1980s, Python has since gained immense popularity and has become one of the most widely used programming languages in the world. Its design philosophy emphasizes code readability and a clean syntax, making it an excellent choice for beginners and experienced developers alike.'
                    link='https://en.m.wikipedia.org/wiki/Python_(programming_language)'
                  />

                  <Item
                    title='Java'
                    target='java-soft'
                    icon='devicon-java-plain'
                    desk='Java is a high-level, object-oriented programming language that was first released in 1995 by Sun Microsystems, which is now owned by Oracle Corporation. It was designed to be platform-independent, allowing developers to write code once and run it on any operating system or device that has a Java Virtual Machine (JVM) installed.'
                    link='https://en.m.wikipedia.org/wiki/Java_(programming_language)'
                    lastChild={true}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>Editors</h4>
              <div className='card border-0 shadow-sm '>
                <div className='card-body p-0  md-title'>
                  <Item
                    title='VsCode'
                    target='vscode'
                    icon='devicon-vscode-plain'
                    desk='VSCode, short for Visual Studio Code, is a highly popular and versatile source code editor developed by Microsoft. Designed to be lightweight yet powerful, VSCode offers a wide range of features and functionalities to enhance the coding experience for developers of various programming languages.'
                    link='https://en.m.wikipedia.org/wiki/Visual_Studio_Code'
                  />
                  <Item
                    title='Sublime Text'
                    target='sublimetext'
                    desk='Sublime Text is a popular and highly versatile code editor loved by developers worldwide. It offers a sleek and minimalist interface coupled with powerful features that enhance coding productivity.'
                    link='https://en.m.wikipedia.org/wiki/Sublime_Text'
                  />

                  <Item
                    title='Android Studio'
                    target='androidstudio'
                    icon='devicon-androidstudio-plain'
                    desk='Android Studio is an integrated development environment (IDE) specifically designed for creating and developing Android applications. It provides developers with a comprehensive set of tools and resources to streamline the entire app development process. Android Studio offers a rich and user-friendly interface, making it easier for both beginners and experienced developers to build high-quality and feature-rich Android apps.'
                    link='https://en.m.wikipedia.org/wiki/Android_Studio'
                    lastChild={true}
                  />
                </div>
              </div>
            </div>
            <div ref={skillRef} className='col-md-6 mb-4'>
              <h4 className='md-title text-secondary'>International</h4>
              <div className='card skillRefID slide-first border-0 shadow-sm'>
                <div className='card-body pb-2  md-title'>
                  <div className='row card-text'>
                    <div className='col-12 mb-2'>
                      <div className='progress w-100'>
                        <span className='bg-success px-1 text-white'> French </span>
                        <div
                          className='progress-bar bg-secondary french'
                          role='progressbar'
                          aria-valuenow='88'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                          88%
                        </div>
                      </div>
                    </div>
                    
                    
                    <div className='col-12 mb-2'>
                      <div className='progress w-100'>
                        <span className='bg-success px-1 text-white'> English </span>
                        <div
                          className='progress-bar bg-secondary english'
                          role='progressbar'
                          aria-valuenow='47'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                          47%
                        </div>
                      </div>
                    </div> 
                    
                    <div className='col-12 mb-2'>
                      <div className='progress w-100'>
                        <span className='bg-success px-1 text-white'> Hausa </span>
                        <div
                          className='progress-bar bg-secondary haussa'
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
