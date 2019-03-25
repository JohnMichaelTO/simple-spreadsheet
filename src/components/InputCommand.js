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

    isCreatingSpreadsheetCommandValid = command => /^C\s[0-9]+\s[0-9]+$/.test(command); // Regex matching the command: C w h
    isInsertingNumberCommandValid = command => /^N\s[0-9]+\s[0-9]+\s[0-9]+$/.test(command); // Regex matching the command: N x1 y1 v1
    isSumCommandValid = command => /^S\s[0-9]+\s[0-9]+\s[0-9]+\s[0-9]+\s[0-9]+\s[0-9]+$/.test(command); // Regex matching the command: S x1 y1 x2 y2 x3 y3
    isQuitCommandValid = command => /^Q$/.test(command); // Regex matching the command: Q

    validate = () => {
        let isError = true;
        const errors = {
            commandError: "This command doesn't exist"
        };

        if (this.isCreatingSpreadsheetCommandValid(this.state.command)) {
            isError = false;
            errors.commandError = "";
        }

        if (this.isInsertingNumberCommandValid(this.state.command)) {
            isError = false;
            errors.commandError = "";
        }

        if (this.isSumCommandValid(this.state.command)) {
            isError = false;
            errors.commandError = "";
        }

        if (this.isQuitCommandValid(this.state.command)) {
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
                <Button variant="contained" color="primary" onClick={e => this.onSubmit(e)}>
                    Submit
                </Button>

                <p>
                    InputCommand: {JSON.stringify(this.state.command, null, 2)}
                </p>
            </form>
            
        );
    }
}

export default InputCommand;
