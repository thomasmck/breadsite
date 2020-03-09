import React from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import BlogModal from './Blogs';

export default class BlogsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
      render() {
        return (
          <div>
            <h1>Latest blogs</h1>
            <table className="BlogTable">
              <tr>
                {this.state.data.map( (item, i) => (
                    <td width="15%">
                      <img className="BlogImage" src={item.image}></img>
                    </td>
                ))}
              </tr>
              <tr>
                {this.state.data.map( (item, i) => (
                    <td width="15%" className="BlogTitleRow">
                      <BlogModal title={item.title} url={item.url}/>
                    </td>
                ))}
              </tr>
            </table>
          </div>
        )
    }
  
    componentDidMount() {
      // Fetch blogs
      axios.get("http://localhost:8000/blogpost/?format=json")
          .then(res =>
            this.setState({data: res.data.results})
      )
      console.log(this.state.data)
    }
  }
  