import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register';


export default class Start extends Component {

    render() {
      return (
        <div  className='cont'>
            <h2 className='name'>S2M</h2>
            <div className='line'></div>
            <p className='presentation'>S2M is a web application created by the students Soufiane mostafi, el Mehdi el mahboubi, and Mohamed azghari, and this application is used to publish basic information about books. <Link className='link' to="/register">Create Your Account Now</Link> 
            </p>
            
        </div>
      );
    }
}
