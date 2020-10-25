import React, { useState , Component } from 'react';
import './Uploader.css';
import axios from 'axios';


export default class Register extends Component {
  
  

      constructor(props) {
        super(props);
    
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeNumberOfPages = this.onChangeNumberOfPages.bind(this);
        this.onChangeDateOfRelease = this.onChangeDateOfRelease.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          book_name: '',
          author: '',
          number_of_pages: '',
          date_of_release: ''
        }
      }


      onChangeBookName(e) {
        this.setState({
          book_name: e.target.value
        })
      }

      onChangeAuthor(e) {
        this.setState({
          author: e.target.value
        })
      }

      onChangeNumberOfPages(e) {
        this.setState({
          number_of_pages: e.target.value
        })
      }

      onChangeDateOfRelease(e) {
        this.setState({
          date_of_release: e.target.value
        })
      }

      onSubmit=(e,session) =>{
        e.preventDefault();
        
        const upload = {
          book_name: this.state.book_name,
          author: this.state.author,
          number_of_pages: this.state.number_of_pages,
          date_of_release: this.state.date_of_release,
        }
    
        axios.post('http://localhost:8888/api/upload', upload)
          .then(res => console.log(res.data));
    
        this.setState({
          book_name: '',
          author: '',
          number_of_pages: '',
          date_of_release: ''
        })
      }

    

    render() {
      return (
        <div className='conto'>
            <form className='registration_form' onSubmit={this.onSubmit}>
                
                <div className="form-group"> 
                    <input  type="text" required value={this.state.book_name} onChange={this.onChangeBookName} placeholder="Book Name"/>
                </div>
                <div className="form-group"> 
                    <input  type="text" required value={this.state.author} onChange={this.onChangeAuthor} placeholder="Author"/>
                </div>
                <div className="form-group"> 
                    <input  type="text" required value={this.state.numbre_of_pages} onChange={this.onChangeNumberOfPages} placeholder="Number of Pages"/>
                </div>
                <div className="form-group"> 
                    <input  type="text" required value={this.state.date_of_release} onChange={this.onChangeDateOfRelease} placeholder="Date of Release"/>
                </div>
                
                
                <div className="form-group">
                    <input type="submit" value="Add a Book" className="btn btn-primary" />
                </div>
                
            </form>

            <h4 className='tag'>S2M</h4>
            </div>
      )
    }
}
