import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import ErrorNotification from './ErrorNotification'
import {
    ERROR_INVALID_COMMAND,
    FORM_COMMAND_LABEL,
    FORM_SUBMIT_LABEL
} from '../util/constant';

class InputCommand extends React.Component {
    state = {
        command: '',
        error: '',
        request: {}
    };

    change = e => {
        //this.props.onChange({ [e.target.name]: e.target.value });
        const command = e.target.value;
        let request = {};

        const createRegex = this.isCreatingSpreadsheetCommandValid(command);
        if (createRegex != null) {
            request = createRegex.groups;
        }

        const insertRegex = this.isInsertingNumberCommandValid(command);
        if (insertRegex != null) {
            request = insertRegex.groups;
            // Convert cell coordinates with -1 as the starting index for the user is 1
            request.x -= 1;
            request.y -= 1;
        }

        const sumRegex = this.isSumCommandValid(command);
        if (sumRegex != null) {
            request = sumRegex.groups;
            // Convert cell coordinates with -1 as the starting index for the user is 1
            request.x1 -= 1;
            request.y1 -= 1;
            request.x2 -= 1;
            request.y2 -= 1;
            request.x3 -= 1;
            request.y3 -= 1;
        }

        const quitRegex = this.isQuitCommandValid(command)
        if (quitRegex != null) {
            request = quitRegex.groups;
        }

        this.setState({
            [e.target.name]: e.target.value,
            request,
            error: ''
        });
    };
    
    isCreatingSpreadsheetCommandValid = command => /^(?<action>C)\s+(?<width>[0-9]+)\s+(?<height>[0-9]+)$/.exec(command); // Regex matching the command: C w h
    isInsertingNumberCommandValid = command => /^(?<action>N)\s+(?<x>[0-9]+)\s+(?<y>[0-9]+)\s+(?<value>[0-9]+)$/.exec(command); // Regex matching the command: N x1 y1 v1
    isSumCommandValid = command => /^(?<action>S)\s+(?<x1>[0-9]+)\s+(?<y1>[0-9]+)\s+(?<x2>[0-9]+)\s+(?<y2>[0-9]+)\s+(?<x3>[0-9]+)\s+(?<y3>[0-9]+)$/.exec(command); // Regex matching the command: S x1 y1 x2 y2 x3 y3
    isQuitCommandValid = command => /^(?<action>Q)$/.exec(command); // Regex matching the command: Q

    validate = () => {
        let hasError = true;
        const error = ERROR_INVALID_COMMAND;

        if (this.isCreatingSpreadsheetCommandValid(this.state.command) != null) hasError = false;
        if (this.isInsertingNumberCommandValid(this.state.command) != null) hasError = false;
        if (this.isSumCommandValid(this.state.command) != null) hasError = false;
        if (this.isQuitCommandValid(this.state.command) != null) hasError = false;

        if(hasError) {
            this.setState({
                ...this.state,
                error
            });
        } else {
            this.setState({
                ...this.state,
                error: ''
            });
        }
        
        return hasError;
    };

    onSubmit = e => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                command: '',
                error: '',
                request: {}
            });
        }
        this.props.onSubmit({
            ...this.state
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <TextField
                        name="command"
                        label={FORM_COMMAND_LABEL}
                        value={this.state.command}
                        onChange={e => this.change(e)}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        {FORM_SUBMIT_LABEL}
                    </Button>

                    <p>
                        InputCommand: {JSON.stringify(this.state.command, null, 2)}
                        <br />
                        Parsing: {JSON.stringify((this.state), null, 2)}
                        
                    </p>
                </form>
                <ErrorNotification message={this.state.error} />
            </div>
        );
    }
}

export default InputCommand;
