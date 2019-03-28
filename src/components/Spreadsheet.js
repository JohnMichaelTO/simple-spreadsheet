import React from 'react';

class Spreadsheet extends React.Component {
    constructor(props) {
        super(props);
        this.spreadsheet = null;
        this.width = 0;
        this.height = 0;
        this.state = {
            request: { action: ''}
        };
    }
    
    componentWillReceiveProps(nextProps) {
        let request = nextProps.request;

        if(this.state.request !== request) {
            switch (request.action) {
                case 'C':
                    console.log('Create action');
                    this.create(request.width, request.height);
                    break;
                case 'N':
                    console.log('Insert action');
                    this.insert(request.x, request.y, request.value);
                    break;
                case 'S':
                    console.log('Sum action');
                    this.sum(request.x1, request.y1, request.x2, request.y2, request.x3, request.y3);
                    break;
                case 'Q':
                    console.log('Quit action');
                    this.quit();
                    break;
                default:
                    console.log("Action doesn't exist");
            }

            this.setState({
                request: nextProps.request
            });
        }
    }

    create = (width, height) => {
        if(this.spreadsheet === null && this.width === 0 && this.height === 0) {
            this.width = width;
            this.height = height;

            this.spreadsheet = new Array(this.height);
            for(let y = 0; y < this.height; y++) {
                this.spreadsheet[y] = new Array(this.width);
                for(let x = 0; x < this.width; x++) {
                    this.spreadsheet[y][x] = '';
                }
            }

            console.log("Create a spreadsheet with width: " + width + ", height: " + height);
            return true;
        }

        console.log("Error: Can't create a spreadsheet as there is currently a spreadsheet opened");
        // TODO: Handling error
        return false;
    };

    insert = (x, y, value) => {
        if(this.isCoordinatesInBoundaries(x, y)) {
            this.spreadsheet[y][x] = value;
            console.log("Insert: spreadsheet[" + y + "][" + x + "] = " + value);
            return true;
        }

        console.log("Error: Can't insert");
        // TODO: Handling error
        return false;
    };

    sum = (x1, y1, x2, y2, x3, y3) => {
        if(this.isCoordinatesInBoundaries(x1, y1)
            && this.isCoordinatesInBoundaries(x2, y2)
            && this.isCoordinatesInBoundaries(x3, y3)
            && x1 <= x2
            && y1 <= y2) {
                
            let totalSum = 0;
            for(let y = y1; y <= y2; y++) {
                for(let x = x1; x <= x2; x++) {
                    totalSum += Number(this.spreadsheet[y][x]);
                    console.log("Sum up = " + totalSum + " - adding " + this.spreadsheet[y][x] + " (spreadsheet[" + y + "][" + x + "])");
                }
            }
            
            this.spreadsheet[y3][x3] = totalSum;
            console.log("Total sum inserted into spreadsheet[" + y3 + "][" + x3 + "] = " + totalSum);
            return true;
        }

        console.log("Error: Can't sum up");
        // TODO: Handling error
        return false;
    };

    quit = () => {
        this.width = 0;
        this.height = 0;
        this.spreadsheet = null;
        return true;
    };

    isCoordinatesInBoundaries = (x, y) => {
        if(x >= 0 && x < this.width && y >= 0 && y < this.height) return true;
        return false;
    };

    formatNumberDisplay = number => {
        const maxCharacterPerCell = 3;
        const numberOfSpace = maxCharacterPerCell - String(number).length;
        let formattedNumber = "";

        for(let i = 0; i < numberOfSpace; i++) {
            formattedNumber += " ";
        }
        formattedNumber += number;

        return formattedNumber;
    };

    show = () => {
        let output = "";

        if(this.width > 0 && this.height > 0 && this.spreadsheet !== null) {
            // [BEGIN] First line to make the table
            for(let i = 0; i < this.width; i++) {
                output += "---";
            }
            output += "--\n";
            // [END] First line to make the table

            for(let y = 0; y < this.height; y++) {
                output += "|";
                for(let x = 0; x < this.width; x++)
                {
                    output += this.formatNumberDisplay(this.spreadsheet[y][x]);
                }
                output += "|\n";
            }

            // [BEGIN] Last line to make the table
            for(let i = 0; i < this.width; i++) {
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