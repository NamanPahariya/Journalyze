import React, { Component } from 'react'
import Axios from '../components/axios'
import Sidebar from'../components/sidebar'
export default class Home extends Component {
  render() {
    return (
      <div className='sidebar'>
        <Sidebar/>
        <Axios/>

      </div>
    )
  }
}
