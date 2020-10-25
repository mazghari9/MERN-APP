import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Uploader from './Uploader2'
import './Upload.css'

export default class Upload extends Component {

    render() {
      return (
        <div>
          <div className='uploader'>
            <Uploader/>
          </div>
        </div>
      );
    }
}
