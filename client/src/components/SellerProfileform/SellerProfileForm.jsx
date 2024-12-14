import { useState } from 'react'
import React from 'react'
import useStyles from './style'
import { Link } from 'react-router-dom'

const SellerProfileForm = () => {
  const classes = useStyles()
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/usernames', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Username saved successfully!');
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage('Error saving username.');
    }
  };
  return (
    <>
    <div className={classes.seller}>
      <div className={classes.img}>
        <img className={classes.artistImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTGfE6SzJ4s6kCkXMeY6pxcIqRPSs-_F_OA&s"
        alt="Craft Artist" />
      </div>
      <div className={classes.userName}>
        <div className={classes.userForm}>
        <div>
        <h3>Get your profile started</h3>
        <p>Add a username that's unique to you, this is how you'll appear to others.</p>
        <p><b>You can't change your username, so choose wisely.</b></p>
        </div>
        <div><form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Enter Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={classes.userInput}
          />
        </div>
        <Link to='/SellerForm/Accountdetail'>
        <button style={{position:'relative',top:'5px'}} className={classes.submitBtn} type="submit"><h4>Create Seller Account</h4></button>
        </Link>
      </form> 
      <p style={{fontSize:'12px',position:'relative',top:'15px'}}>
      By joining, you agree to the Craft Bazaar Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.
      </p></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SellerProfileForm
