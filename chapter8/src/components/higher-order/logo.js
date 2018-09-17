import React, { Component  } from 'react';

class Logo extends Component {
  render() {
    return <img onClick={this.props.handleClick} width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-B5fWWkpyAw46GtzkmOcpO8QAX10o2j6MPgo3nlOJfDTdypC" href="#" />
  }
}
export default Logo;