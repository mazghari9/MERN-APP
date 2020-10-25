import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Upload = props => (
  <tr>
    <td>{props.upload.book_name}</td>
    <td>{props.upload.author}</td>
    <td>{props.upload.number_of_pages}</td>
    <td>{props.upload.date_of_release}</td>
    <td>
      <Link to={"/edit/"+props.upload._id}>edit</Link> | <a href="/" onClick={() => { props.deleteUpload(props.upload._id) }}>delete</a>
    </td>
  </tr>
)



export default class Show extends Component {

  

  constructor(props) {
    super(props);

    this.deleteUpload = this.deleteUpload.bind(this)

    this.state = {upload: []};
  }

    componentDidMount() {
        axios.get('http://localhost:8888/api/upload')
          .then(response => {
            this.setState({ upload: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    deleteUpload(id) {
        axios.delete('http://localhost:8888/api/upload'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          upload: this.state.upload.filter(el => el._id !== id)
        })
    }

    uploadsList() {
      return this.state.upload.map(currentupload => {
        return <Upload upload={currentupload} deleteUpload={this.deleteUpload} key={currentupload._id}/>;
      })
    }


    render() {
      return (
        <div>
          <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Number of pages</th>
              <th>Date of release</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.uploadsList() }
          </tbody>
        </table>
        </div>
      );
    }
}
