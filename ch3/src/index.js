import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';

/* add element by JSX 'Listing 3.2'*/
ReactDOM.render(
  <h1>Hello world!</h1>,
  document.getElementById('app')
  )

/* add element by JSX by using Object 'Listing 3.2' */
// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );

// ReactDOM.render(
//   JSX,
//   document.getElementById('app')
// );

/* class in JSX 'Listing 3.3'*/
// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>1. Hello world!</h1>
//         <h1>2. Hello world!</h1>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById('app')
// )

/* other way to create class*/
// class HelloWorld extends React.Component {
//   render() {
//     return React.createElement('div',
//       null,
//       React.createElement('h1', null, '1. Hello world!'),
//       React.createElement('h1', null, '2. Hello world!'))
//   }
// }
// ReactDOM.render(
//   React.createElement(HelloWorld, null),
//   document.getElementById('app')
// )

/* output in jsx */
// class DateTimeNow extends React.Component {
//   render() {
//     let dateTimeNow = new Date().toLocaleString()
//     return React.createElement(
//       'span',
//       null,
//       `Current date and time is ${dateTimeNow}.`,
//       <br></br>,
//       <span>Current date and time is {dateTimeNow}.</span>,
//       <br></br>,
//       <span>Hello , your current date and time is{dateTimeNow}.</span>,
//       <br></br>,
//       <p>Current time in your locale is {new Date(Date.now()).toLocaleTimeString()}</p>
//     )
//   }
// }
// ReactDOM.render(
//   React.createElement(DateTimeNow, null),
//   document.getElementById('app')
// )

/*  properties JSX */
// class HelloWorld extends React.Component {
//   render() {
//     return <h1 {...this.properties}>
//       Hello {this.props.frameworkName} world!!!
//   </h1>
//   }
// }
// ReactDOM.render(
//   <div>
//     <HelloWorld
//       id='ember'
//       frameworkName='Ember.js'
//       title='A framework for creating ambitious web applications.' />,
//   <HelloWorld
//       id='backbone'
//       frameworkName='Backbone.js'
//       title='Backbone.js gives structure to web applications...' />
//     <HelloWorld
//       id='angular'
//       frameworkName='Angular.js'
//       title='Superheroic JavaScript MVW Framework' />
//   </div>,
//   document.getElementById('app')
// )

/* invoke function in JSX */
// class Content extends React.Component {
//   getUrl() {
//     return 'http://webapplog.com'
//   }
//   render() {
//     return (
//       <div>
//         <p>Your REST API URL is:
//   <a href={this.getUrl()}>
//             {this.getUrl()}
//           </a>
//         </p>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   React.createElement(Content, null),
//   document.getElementById('app')
// )





module.hot.accept();
