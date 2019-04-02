import React, { Component } from 'react';
import './App.css';
import InputCommand from './components/InputCommand';
import Spreadsheet from './components/Spreadsheet';
import CommandsTable from './components/CommandsTable'

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
        <h1>Simple-Spreadsheet</h1>
        <CommandsTable />
        <InputCommand onSubmit={fields => this.onSubmit(fields)} />
        <p>
          App: {JSON.stringify(this.state.fields, null, 2)}
        </p>
        <Spreadsheet request={this.state.fields.request} />
      </div>
    );
  }
}

export default App;
