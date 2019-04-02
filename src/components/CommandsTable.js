import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    commandsTable: {
        margin: 'auto',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        overflowX: 'auto',
        width: '50%',
    },
    table: {
        minWidth: 700,
    }
});

class CommandsTable extends React.Component {
    constructor(props) {
    super(props);
    this.id = 0;
    this.rows = [
        this.createData('C w h', 'Create a new spreadsheet of width w and height h (i.e. the spreadsheet can hold w * h amount of cells)'),
        this.createData('N x1 y1 v1', 'Insert a number in specified cell (x1,y1)'),
        this.createData('S x1 y1 x2 y2 x3 y3', 'Perform sum on top of all cells from x1 y1 to x2 y2 and store the result in x3 y3'),
        this.createData('Q', 'Quit the spreadsheet'),
    ];
    }

    createData = (command, description) => {
        this.id += 1;
        return { id: this.id, command, description };
    }

    render() {
        return (
            <Paper className={this.props.classes.commandsTable}>
                <Table className={this.props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Command</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.command}</TableCell>
                            <TableCell>{row.description}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(CommandsTable);
