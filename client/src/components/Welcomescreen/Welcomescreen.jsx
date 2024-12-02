import React from 'react'
import '../Welcomescreen/style.css'
const Welcomescreen = () => {
  return (
    <>
      <div className='intro'>
        <h3 id='paragraph'>Hi,<br />
        Welcome to the craftbazaar community ! <br />
        Please choose below option to continue browsing in this community.
        </h3>
      </div>
      <div className='parentRoot'>
        <div className='webPath'><h1>Continue as Buyer!</h1></div>
        <div className='webPath'><h1>Continue as Seller!</h1></div>
      </div>
    </>
  )
}

export default Welcomescreen
