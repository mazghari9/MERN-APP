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
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      upload: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/api/upload')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
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
      book_name: e.target.value,
      author: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    

        this.state.author=this.state.book_name;
          
        
       

  }


  uploadsList() {
    return this.state.upload.find({}, { projection: { book_name: this.onChangeBookName} }).map(currentupload => {
      return <Upload uploads={currentupload}/>;
    })
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
            <td value={this.state.book_name}></td>
            <td value={this.state.author}></td>
            <td value={this.state.number_of_pages}></td>
            <td value={this.state.date_of_release}></td>
          </tbody>
        </table>
        </div>
      );
    }
}
