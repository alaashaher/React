import React, { Component } from 'react';

class Email extends Component {
    constructor(props) {    
      super(props)
      this.submit = this.submit.bind(this)
      this.prompt = 'Please enter your email.'
    }
    submit(event) {
      let emailAddress = this.refs.emailAddress
      let comments = this.refs.comments
      console.log(ReactDOM.findDOMNode(emailAddress).value)
      console.log(ReactDOM.findDOMNode(comments).value)
    }
    render() {
      return (
        <div className="well">
          <p>{this.prompt}</p>
          <div>
            Email: <input ref="emailAddress"  type="text" placeholder="le@gmail.com"/>
          </div>
          <div>
            Comments: <textarea ref="comments" type="text" placeholder="your comments!"/>
          </div>
          <div>
            <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
          </div>
        </div>
      )
    }
}

export default Email;