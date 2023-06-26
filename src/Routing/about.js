import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
      <div className="about-box">
      <div className='about-outer '>
        {/* <div className='about-box'> */}
        <h4>Hello energetic people!</h4>
        <h2>Naman Pahariya is here</h2>
        <h6>"TO WIN THE RACE , YOU HAVE TO LIVE WITH TIME"</h6>
        <h6>I am a third year student from computer science branch,<br></br>
          I have intermediate skills at HTML, CSS, Javascript and I am a full stack developer,
          <br></br>Thank you for visiting my page.</h6>
        <div className='about-button'>
        <button className='reader-button'>Reader</button>
        <button className='coder-button'>Coder</button>
        <button className='designer'>Designer</button></div>
        <img src="Screenshot 2022-10-15 012439.png" alt="hello" className='about-image'/>
        </div>
        </div>
    )
  }
}
