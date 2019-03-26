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

    formatNumberDisplay = number => {
        const maxCharacterPerCell = 3;
        const numberOfSpace = maxCharacterPerCell - number.length;
        let formattedNumber = "";

        for(let i = 0; i < numberOfSpace; i++) {
            formattedNumber += " ";
        }
        formattedNumber += number;

        return formattedNumber;
    };

    show = () => {
        let output = "";

        if(this.state.width > 0 && this.state.height > 0) {
            // [BEGIN] First line to make the table
            for(let i = 0; i < this.state.width; i++) {
                output += "---";
            }
            output += "--\n";
            // [END] First line to make the table

            for(let y = 0; y < this.state.height; y++) {
                output += "|";
                for(let x = 0; x < this.state.width; x++)
                {
                    output += this.formatNumberDisplay("3");
                }
                output += "|\n";
            }

            // [BEGIN] Last line to make the table
            for(let i = 0; i < this.state.width; i++) {
                output += "---";
            }
            output += "--\n";
            // [END] Last line to make the table
        }
        console.log(output);
        return output;
    };

    render() {
        return (
            this.show()
        );
    }
}

export default Spreadsheet;