import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Find.css'

const Upload = props => (
    <tr>
      <td>{props.upload.book_name}</td>
      <td>{props.upload.author}</td>
      <td>{props.upload.number_of_pages}</td>
      <td>{props.upload.date_of_release}</td>
    </tr>
)

export default class Find extends Component {
    
  constructor(props) {
    super(props);

    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      u: [],
      upload: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/api/upload')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            u:response.data,
            upload: response.data.map(upload => upload.book_name),
            book_name: response.data[0].book_name
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeBookName(e) {
    this.setState({
      book_name: e.target.value    
    })
    console.log('aafffaa')
  }


  onSubmit= async (e) =>{
    e.preventDefault();

  
    for(var i=0;i<this.state.u.length;i++){
      if(this.state.u[i].book_name===this.state.book_name){
            this.state.book_name2=this.state.u[i].book_name;
            console.log('1')
            this.state.author=this.state.u[i].author;
            console.log(2)
            this.state.number_of_pages=this.state.u[i].number_of_pages;
            console.log(3)
            this.state.date_of_release=this.state.u[i].date_of_release;
            console.log('4')
        
      }
    }
  }


  
    
    

    render() {
      return (
        <div >
        <form onSubmit={this.onSubmit}>
        <div className='forms'> 
          <label>book_name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.book_name}
              onChange={this.onChangeBookName}>
              {
                this.state.upload.map(function(upload) {
                  return <option 
                    key={upload}
                    value={upload}>{upload}
                    </option>;
                })
              }
          </select>
          </div>

        <div className="aaa">
          <input type="submit" value="Find By Book Name" className="btn btn-primary" />
        </div>
        </form>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Number of pages</th>
              <th>Date of release</th>
            </tr>
          </thead>
          <tbody>
            <td>{this.state.book_name2}</td>
            <td>{this.state.author}</td>
            <td>{this.state.number_of_pages}</td>
            <td>{this.state.date_of_release}</td>
          </tbody>
        </table>
        </div>
      );
    }
}
