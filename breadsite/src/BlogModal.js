import React from 'react';
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

export default BlogModal;