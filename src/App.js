import React, { Component } from 'react';
import './App.css';
import InputCommand from './components/InputCommand';
import Spreadsheet from './components/Spreadsheet';

class App extends Component {
  state = {
    fields: {
      command: '',
      request: {}
    }
  };

  onSubmit = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <InputCommand onSubmit={fields => this.onSubmit(fields)} />
        <p>
          App: {JSON.stringify(this.state.fields, null, 2)}
        </p>
        <pre>
        <Spreadsheet command={this.state.fields} />
        </pre>
      </div>
    );
  }
}

export default App;
