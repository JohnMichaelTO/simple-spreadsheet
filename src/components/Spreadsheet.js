import React from 'react';

class Spreadsheet extends React.Component {
    state = {
        width: 0,
        height: 0,
        spreadsheet: [[],[]]
    };

    getRequest = () => {
        let request = this.props.request;
        console.log(request);
        
        switch (request.action) {
            case 'C':
                console.log('Create action');
                this.create(request.width, request.height);
                break;
            case 'N':
                console.log('Insert action');
                break;
            case 'S':
                console.log('Sum action');
                break;
            case 'Q':
                console.log('Quit action');
                break;
            default:
                console.log("Action doesn't exist");
        }
    };

    create = (width, height) => {
        /*
        this.setState({
            width,
            height
        });
        */
    };

    insert = (x, y, value) => {
        //this.setState({spreadsheet[x][y] = value});
    };

    show = () => {
        return "width:" + this.state.width + ", height:" + this.state.height + ", spreadsheet:" + this.state.spreadsheet + ", " + JSON.stringify((this.props.request), null, 2);
    };

    render() {
        this.getRequest();
        return (
            this.show()
        );
    }
}

export default Spreadsheet;