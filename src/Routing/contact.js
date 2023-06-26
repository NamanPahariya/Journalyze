import React, { Component } from 'react'
export default class contact extends Component{
    render(){
    return (
      <div className='contact-box'>
        <form>
        <h2 className='word'><i className="fa-solid fa-folder-user"></i> Contact Us</h2>
          <div className='row'>
          <div className='input-group'>
            <input type='text' id='name' required></input>
             <label for='name'><i className="fa-solid fa-user"></i> Your Name</label>
           
           </div>

           <div className='input-group'>
            <input type='number' id='number' required></input>
              <label for='number'><i className="fa-solid fa-phone"></i> Phone No.</label>
           </div>
          </div>
          
<div className="row-2">
           <div className='input-group'>
            <input type='email' id='email' required></input>
              <label for='email'><i className="fa-solid fa-envelope"></i> Email ID</label>
           </div>
           </div>
           <div className="row-3">
           <div className='input-group'>
            <textarea id='message' rows='4' required></textarea>
              <label for='message'><i className="fa-solid fa-message"></i> Your message</label>
           </div>
           </div>
               <button type='submit'className='input-group'>Submit</button>
        </form>
      </div>

    )
    }
}
