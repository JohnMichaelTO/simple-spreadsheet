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
          App: {JSON.stringify(this.state.fields, null, 2)}
        </p>
        <p>
          {JSON.stringify((/^(?<command>C\s)(?<width>[0-9]+)\s(?<height>[0-9]+)$/.exec(this.state.fields.command)), null, 2)}
        </p>
        <pre>
        <Spreadsheet command={this.state.fields.command} />
        </pre>
      </div>
    );
  }
}

export default App;
