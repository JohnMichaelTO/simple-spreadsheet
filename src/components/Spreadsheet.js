import React from 'react';

class Spreadsheet extends React.Component {
    state = {
        width: 0,
        height: 0,
        spreadsheet: [[],[]]
    };

    create = (width, height) => {
        this.setState(...this.state);
    };

    insert = (x, y, value) => {
        //this.setState({spreadsheet[x][y] = value});
    };

    show = () => {
        return "width:" + this.state.width + ", height:" + this.state.height + ", spreadsheet:" + this.state.spreadsheet;
    };

    render() {
        return (
            this.show()
        );
    }
}

export default Spreadsheet;