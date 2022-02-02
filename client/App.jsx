import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import styles from './stylesheets/styles.scss';
import Login from './components/login.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <Login />
            </div>
        )
    }
}

export default App;