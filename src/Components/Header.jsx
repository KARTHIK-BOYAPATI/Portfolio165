import { useState } from 'react'
import './Header.css'

function Header (){

    const [showPhoneNumber,setPhoneNumber] = useState(false)

    const handlePhoneNumber = () => {
        setPhoneNumber(true)
    }

    return(
    <div className='header'>
        <div>
        <img className="logo" src="https://res.cloudinary.com/dhoajm4w5/image/upload/v1664978940/Untitled_design_gyxl5g.png" alt="Logo"/>
        
        </div>

        <h1 className='name'>Boyapati Karthik</h1>


        <h2 className='contact'>
            {showPhoneNumber ? "6302457200" : <a href='#' onClick={handlePhoneNumber}>Contact</a> }
        </h2>
     
    </div>)
    }

export default Header