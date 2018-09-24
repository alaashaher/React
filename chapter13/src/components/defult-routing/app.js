import React, { Component } from 'react';
import Content from './content';
import Router from './routing';
class App extends Component {
    render (){
        return(<Router mapping = {Content}/>);
    }
}

export default App;
