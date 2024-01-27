import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div>
      <div className='container'>
        <div className='myform'>
          <h1 className='inputhead'>Our Newsletter</h1>
          <label className='newsname' htmlFor="">First Name</label><br/>
          <input className='newsinput' type="text" /><br/>
          <label className='newsname' htmlFor="">Last Name</label><br/>
          <input className='newsinput'  type="text" /> <br/>
          <label className='newsname' htmlFor="">Email</label><br/>
          <input className='newsinput'  type="email" /><br/>
          <button className='submitbtn'>Submit</button>
        </div>
      </div>
    </div>
  )
}
