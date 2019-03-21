import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class InputCommand extends React.Component {
    state = {
        command: ''
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <form>
                <TextField
                    name="command"
                    label="Command"
                    value={this.state.command}
                    onChange={e => this.change(e)}
                />
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        );
    }
}

export default InputCommand;
