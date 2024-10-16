import React from 'react'
import "./Content.css"

export default function Content() {
  return (
    <div class="Content-main-container">

        <div>
              <img className = "profile" src="https://res.cloudinary.com/dhoajm4w5/image/upload/v1729002405/Karthik_Passport_Photo_With_White_Bg_rjextj.jpg" alt="profile" />
              <h2 className='role'>Full Stack Developer</h2>
        </div>

        <div>
        <h2 className='skills'>Education</h2>
        <ul 
        className='skill-list'>
        <p className='s1'> Full Stack Developer Traineer at NxtWave Academy</p>
        <p className='s1'> Bachelor Of Technology (ECE) </p>
        </ul>

        <h2 className='skills'>Skills</h2>
        <ul className='skill-list'>
          <li className='s1'>HTML</li>
          <li className='s1'>CSS</li>
          <li className='s1'>JavaScript</li>
          <li className='s1'>React.js</li>
          <li className='s1'>Python</li>
          <li className='s1'>SQLite</li>
          <li className='s1'>Node.js</li>
          <li className='s1'>AWS</li>
          <li className='s1'>Power BI</li>
        </ul>

        <h2 className='skills'>Projects</h2>
        <ul className='skill-list'>
          <li> <a className='s1' href="http://emojigame165.ccbp.tech/">Emoji Game</a></li>
          <li> <a className='s1' href="http://ipldashboard165.ccbp.tech/"> IPL Dashboard</a></li>
          <li> <a className='s1' href="http://bloglist165.ccbp.tech/"> Blog List</a></li>
          <li><a className='s1' href='https://swaping.ccbp.tech/'>Pic Transition</a></li>
          <li><a className='s1' href='https://gradientgen165.ccbp.tech/'>Gradident Generator</a></li>
          <li><a className='s1' href='https://moneymanager165.ccbp.tech/'>Money Manager</a></li>
        </ul>

          <h2 className='resume'>My Resume</h2>
          <button className='resumebutton'><a href='http://localhost:3000/karthik_resume_(MernStack).pdf'>Download</a></button>
      

        </div>

 
    </div>
  )
}
