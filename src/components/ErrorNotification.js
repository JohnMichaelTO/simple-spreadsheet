import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import ErrorIcon from "@material-ui/icons/Error";

const styles = theme => ({
    snackbar: {
        margin: "auto",
        backgroundColor: theme.palette.error.dark
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit
    },
    message: {
        display: "flex",
        alignItems: "center"
    }
});

class ErrorNotification extends React.Component {
    constructor(props) {
        super(props);
        this.classes = props;
    }

    render() {
        if(this.props.message !== "") {
            return (
                <div>
                    <SnackbarContent
                        className={this.props.classes.snackbar}
                        message={
                            <span id="client-snackbar" className={this.props.classes.message}>
                                <ErrorIcon className={classNames(this.props.classes.icon, this.props.classes.iconVariant)} />
                                {this.props.message}
                            </span>
                        }
                    />
                </div>
            );
        } else {
            return (null);
        }
    }
}

export default withStyles(styles)(ErrorNotification);
