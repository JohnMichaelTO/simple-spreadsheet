import React from 'react';

class Spreadsheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            request: this.props.request,
            width: 0,
            height: 0,
            spreadsheet: [[],[]]
        };
    }
    
    componentWillReceiveProps(nextProps) {
        let request = nextProps.request;
        let tempState = {
            ...this.state
        };

        if(this.state.request !== request) {
            switch (request.action) {
                case 'C':
                    tempState.width = request.width;
                    tempState.height = request.height;
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

            this.setState({
                ...tempState,
                request: nextProps.request
            });
        }
    }

    create = (width, height) => {
        console.log("width: " + width + ", height: " + height);
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
        return JSON.stringify((this.state), null, 2);
    };

    render() {
        return (
            this.show()
        );
    }
}

export default Spreadsheet;