import './FAQ.css'
import FAQItem from './FAQItem'

const FAQ = () => {
  return (
     <div id='faq' className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center primary-font primary-text mb-4'>FAQ (Frequently Asked Questions)</h1>
        </div>

        <div className='col-12 mb-4'>
          <div className='row'>
            <div className='col mb-4'>
              <h4 className='md-title text-secondary'>FAQs</h4>
              <div className='card border-0 shadow-sm'>
                <div className='card-body p-0 md-title'>
                  <FAQItem
                    title='What code editor do I mostly used?'
                    target='mostVsCode'
                    desk="Visual Studio Code (VS Code) is my most used code editor, and here's why: It's powerful, customizable, works on multiple platforms, has an integrated terminal, offers intelligent code assistance, and has a thriving community."
                  /> 
                  
                  <FAQItem
                    title='What programing language do I mostly used?'
                    target='mostlanguage'
                    desk="PHP used to be my most frequently used programming language, but now JavaScript has taken the lead."
                  /> 
                  <FAQItem
                    title='Which technology did you use for this portfolio?'
                    target='whichtech'
                    desk="I used reactJs and the code is open source on github"
                  /> 
                  
                  <FAQItem
                    title='Do I used to code on Mobile?'
                    target='codingonmobile'
                    moreDesk={[
                    "Of course, yes! When my laziness strikes, I use my smartphone to code while comfortably lounging on my bed. To accomplish this, I rely on two essential apps: Acode and Termux.",
                    "Termux provides me with a full Linux environment, allowing me to execute various commands such as Git, NPM, PHP, and more. Additionally, with Termux, I can even remotely access my computer.",
                    "Acode, on the other hand, enables me to access the Termux storage seamlessly, making it easy to work with files. For instance, if I clone a project from GitHub using 'git clone,' I can easily access the cloned directory through Acode. This allows me to make necessary changes and push them to GitHub using Termux.",
                    "Oh, and if I ever need browser dev tools, I simply include eruda.js in my index file. It's a game-changer for my coding convenience!",
                    ]}
                    lastChild
                  /> 
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
    )
}

export default FAQ