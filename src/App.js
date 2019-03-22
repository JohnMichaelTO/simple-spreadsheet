import React, { Component } from 'react';
import './App.css';
import InputCommand from './components/InputCommand';
import Spreadsheet from './components/Spreadsheet';

class App extends Component {
  state = {
    fields: {
      command: ''
    }
  };

  onChange = updatedValue => {
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
        <InputCommand onChange={fields => this.onChange(fields)} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
        <p>
          {JSON.stringify(this.state.fields.command.match(/^(C\s)([0-9]+)\s([0-9]+)$/), null, 2)}
        </p>
        <pre>
        <Spreadsheet />
        </pre>
      </div>
    );
  }
}

export default App;
