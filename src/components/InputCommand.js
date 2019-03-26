import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class InputCommand extends React.Component {
    state = {
        command: '',
        commandError: ''
    };

    change = e => {
        //this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    isCreatingSpreadsheetCommandValid = command => /^(?<action>C)\s(?<width>[0-9]+)\s(?<height>[0-9]+)$/.exec(command); // Regex matching the command: C w h
    isInsertingNumberCommandValid = command => /^(?<action>N)\s(?<x>[0-9]+)\s(?<y>[0-9]+)\s(?<value>[0-9]+)$/.exec(command); // Regex matching the command: N x1 y1 v1
    isSumCommandValid = command => /^(?<action>S)\s(?<x1>[0-9]+)\s(?<y1>[0-9]+)\s(?<x2>[0-9]+)\s(?<y2>[0-9]+)\s(?<x3>[0-9]+)\s(?<y3>[0-9]+)$/.exec(command); // Regex matching the command: S x1 y1 x2 y2 x3 y3
    isQuitCommandValid = command => /^(?<action>Q)$/.exec(command); // Regex matching the command: Q

    validate = () => {
        let isError = true;
        const errors = {
            commandError: "This command doesn't exist"
        };

        const createRegex = this.isCreatingSpreadsheetCommandValid(this.state.command);
        if (createRegex != null) {
            isError = false;
            errors.commandError = "";
        }

        const insertRegex = this.isInsertingNumberCommandValid(this.state.command);
        if (insertRegex != null) {
            isError = false;
            errors.commandError = "";
        }

        const sumRegex = this.isSumCommandValid(this.state.command);
        if (sumRegex != null) {
            isError = false;
            errors.commandError = "";
        }

        const quitRegex = this.isQuitCommandValid(this.state.command)
        if (quitRegex != null) {
            isError = false;
            errors.commandError = "";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                command: '',
                commandError: ''
            });
            this.props.onChange({
                command: this.state.command
            });
        }
    };

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <TextField
                    name="command"
                    label="Command"
                    value={this.state.command}
                    onChange={e => this.change(e)}
                    error={this.state.commandError !== ""}
                    helperText={this.state.commandError}
                />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>

                <p>
                    InputCommand: {JSON.stringify(this.state.command, null, 2)}
                    <br />
                    Parsing: {JSON.stringify((this.state), null, 2)}
                    
                </p>
            </form>
            
        );
    }
}

export default InputCommand;
