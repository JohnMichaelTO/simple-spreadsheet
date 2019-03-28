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
    
    componentDidUpdate(prevProps) {
        let request = this.props.request;

        if(request !== prevProps.request) {
            switch (request.action) {
                case 'C':
                    console.log('Create action');
                    this.create(Number(request.width), Number(request.height));
                    break;
                case 'N':
                    console.log('Insert action');
                    this.insert(Number(request.x), Number(request.y), Number(request.value));
                    break;
                case 'S':
                    console.log('Sum action');
                    this.sum(Number(request.x1), Number(request.y1), Number(request.x2), Number(request.y2), Number(request.x3), Number(request.y3));
                    break;
                case 'Q':
                    console.log('Quit action');
                    this.quit();
                    break;
                default:
                    console.log("Action doesn't exist");
            }

            this.setState({
                request: request
            });
        }
    }

    create = (width, height) => {
        if(this.spreadsheet === null && this.width === 0 && this.height === 0) {
            if(width === 0 || height === 0) {
                console.log("Error: Can't create a spreadsheet with width or height = 0");
                // TODO: Handling error
                return false;
            }
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
        if(this.isCoordinatesInBoundaries(x, y) && this.isValueWithinLimits(value)) {
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
            
            if(this.isValueWithinLimits(totalSum)) {
                this.spreadsheet[y3][x3] = totalSum;
                console.log("Total sum inserted into spreadsheet[" + y3 + "][" + x3 + "] = " + totalSum);
                return true;
            } else {
                console.log("Error: Value exceeded limits (" + totalSum + ")");
                return false;
            }
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

    isValueWithinLimits = value => {
        if(value >= 0 && value <= 999) return true;
        return false;
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