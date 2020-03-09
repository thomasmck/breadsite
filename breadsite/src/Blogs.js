import React from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class BlogModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBlog: false
    }
  }

  onOpenModal = () => {
    this.setState({ showBlog: true });
  };

  onCloseModal = () => {
    this.setState({ showBlog: false });
  };

  dropdownClick () {
    console.log(this.props)
    this.setState(prevState => ({
      showBlog: !prevState.showBlog
    }));
  }

  render() {
    const { showBlog } = this.state; 
    const bg = {
      content: {
        width: "100%",
        height: "95%"
      },
      modal: {
        width: "100%",
        height: "95%"
      }
    };
    return (
      <div>
        <p className="BlogTitle" onClick={this.dropdownClick.bind(this)}>{this.props.title}</p>
        <Modal open={showBlog} onClose={this.onCloseModal} styles={bg} center>
          <iframe src={this.props.url} className="blogIframe">
            <p>Your browser does not support iframes.</p>
          </iframe>
        </Modal>
      </div>
    )
  }
}

export default class Blogs extends React.Component {

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
    axios.get("http://localhost:8000/blogpost/?format=json&number=3")
        .then(res =>
          this.setState({data: res.data.results})
    )
    console.log(this.state.data)
  }
}