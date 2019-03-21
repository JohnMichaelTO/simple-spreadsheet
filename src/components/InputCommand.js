import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class InputCommand extends React.Component {
    state = {
        command: '',
        commandError: ''
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = true;
        const errors = {
            commandError: "This command doesn't exist"
        };

        // Regex matching the command: C w h
        if (/^C\s[0-9]+\s[0-9]+$/.test(this.state.command)) {
            isError = false;
            errors.commandError = "";
        }

        // Regex matching the command: N x1 y1 v1
        if (/^N\s[0-9]+\s[0-9]+\s[0-9]+$/.test(this.state.command)) {
            isError = false;
            errors.commandError = "";
        }

        // Regex matching the command: S x1 y1 x2 y2 x3 y3
        if (/^S\s[0-9]+\s[0-9]+\s[0-9]+\s[0-9]+\s[0-9]+\s[0-9]+$/.test(this.state.command)) {
            isError = false;
            errors.commandError = "";
        }

        // Regex matching the command: Q
        if (/^Q$/.test(this.state.command)) {
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
        // this.props.onSubmit(this.state);
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                command: '',
                commandError: ''
            });
            this.props.onChange({
                command: ''
            });
        }
    };

    render() {
        return (
            <form>
                <TextField
                    name="command"
                    label="Command"
                    value={this.state.command}
                    onChange={e => this.change(e)}
                    error={this.state.commandError}
                    helperText={this.state.commandError}
                />
                <Button variant="contained" color="primary" onClick={e => this.onSubmit(e)}>
                    Submit
                </Button>
            </form>
        );
    }
}

export default InputCommand;
