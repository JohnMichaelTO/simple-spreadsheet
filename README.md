# Simple Spreadsheet

This is a simple spreadsheet that allows an end user to perform some basic spreadsheet operation (i.e. sum).

## Features
In a nutshell, the program has the following features:
* Create a new spreadsheet 
* Add numbers in different cells
* Perform some calculation on top of specific row or column
* Quit

## Getting Started

Follow the instructions below to get a copy of the project and install it on your local machine for development/testing purposes. To deploy it, check the deployment part.

### Prerequisites
* Node.js (>= v10.15.1)

### Installing
1. Open a terminal and clone the repository with the following command:
```
git clone https://github.com/JohnMichaelTO/simple-spreadsheet.git
```
2. Go to the project directory:
```
cd simple-spreadsheet
```
3. Install the dependencies
```
npm install
```

### Running the application
1. Open a terminal and go to the project directory `simple-spreadsheet`
2. Run the following command 
```
npm start
```
3. Open a browser and go to http://localhost:3000
4. Submit the commands with the input text field to handle your spreadsheet

### Command description

|Command            |Description        |
|-------------------|-------------------|
|C w h              |Create a new spreadsheet of width w and height h (i.e. the spreadsheet can hold w * h amount of cells)|
|N x1 y1 v1         |Insert a number in specified cell (x1,y1)|
|S x1 y1 x2 y2 x3 y3|Perform sum on top of all cells from x1 y1 to x2 y2 and store the result in x3 y3|
|Q                  |Quit the program|

Note that each cell allocate at most 3 characters and numbers given are right justified accordingly.

### Sample I/O

Command: C 20 4
```
------------------------------------------------------------------
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
------------------------------------------------------------------
```

Command: N 1 2 2
```
------------------------------------------------------------------
|                                                                 |
|  2                                                              |
|                                                                 |
|                                                                 |
------------------------------------------------------------------
```

Command: N 1 3 4
```
------------------------------------------------------------------
|                                                                 |
|  2                                                              |
|  4                                                              |
|                                                                 |
------------------------------------------------------------------
```

Command: S 1 2 1 3 1 4
```
------------------------------------------------------------------
|                                                                 |
|  2                                                              |
|  4                                                              |
|  6                                                              |
------------------------------------------------------------------
```

Command: Q
```
```

## Running the tests

In order to run the unit tests, run the following command in the project directory:
```
npm test
```

### Unit/Integration tests

As part of the testing, as described below (cf. [Design consideration part](#Design-consideration)), some unit tests are implemented in order to check each action related to the spreadsheet features.

#### InputCommand component
* **Creating a spreadsheet command**: checks if the regular expression works accordingly and performs a group matching with the action to create with a specific width and height
* **Inserting a number command**: checks if the regular expression works accordingly and performs a group matching with the action to insert with a specific cell represented by (x, y)
* **Summing command**: checks if the regular expression works accordingly and performs a group matching with the action to perform a sum from coordinates (x1, y1) to (x2, y2) into (x3, y3)
* **Quitting command**: checks if the regular expression works accordingly and performs a group matching with the action to quit

#### Spreadsheet component
* **Creating a spreadsheet**: checks the possibility to create a spreadsheet with a specific width and height
* **isCoordinatesInBoundaries(x, y)**: checks if the coordinate (x, y) is within the boundaries of the spreadsheet
* **Inserting a number**: checks the possibility to insert a number into a specific cell (x, y) after creating successfully a spreadsheet, it also checks if the value is correctly inserted into the spreadsheet
* **Summing**: combines multiple insertions and verify that the sum is correctly inserted into the specified cell
* **Quitting**: checks if the spreadsheet is correctly cleared as well as data
* **formatNumberDisplay()**: checks if a number is correctly formatted to follow the specification of 3 characters per cell with right justification
* **show()**: checks if the spreadsheet is correctly rendered to the end-user

## Deployment

In order to deploy the application, use the following command to create a production build:
```
npm run build
```

Use the build folder to deploy the application in any web server.

## Design consideration

This React application was built with an **InputCommand** component in order to handle any command entered by an end-user.

Associated with that, the component **Spreadsheet** handles the spreadsheet itself with different actions such as **create**, **insert**, **sum**, **quit**.

Finally, the **App** component makes the use of both previous components to put them together as a single application.

### InputCommand component
The **InputCommand** component is in charge of handling the text entered by an end-user in the text field `Command`. It translates the text into a request sent to the **App** component using regular expressions. Those requests match with the **Spreadsheet** component's actions: create, insert, sum, quit.

### Spreadsheet component
The **Spreadsheet** component is in charge of handling a request given from the **App** component. It translates the request into an action in order to:
* create a new spreadsheet
* insert a number in a cell
* sum up values into a specific cell
* quit the spreadsheet

The data is also handled by this component as well as showing the spreadsheet to the end-user.

### ErrorNotification component
The **ErrorNotification** component is used for displaying an error message alert. It can be used by any component by passing a message as property.

### CommandsTable component
The **CommandsTable** component displays the available commands with a description for each of them into a table.

### App component
The **App** component is the result of all the components and especially **InputCommand** and **Spreadsheet** components. It's in charge of passing the request from one to another component and acts as an intermediary.

## Limitations
The current limitations are the following:
* One cell is represented by 3 characters
* A sum can not be performed when the result is above 999
* Only numbers between 0 and 999 are allowed

## Built With

* [React](https://reactjs.org/) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [Material-UI](https://material-ui.com/) - React UI Framework

## Versioning

[GitHub](https://www.github.com) is used for versioning. 
Check directly in the [repository](https://github.com/JohnMichaelTO/simple-spreadsheet.git) for more details.

## Author

* **[John-Michaël TO](https://github.com/JohnMichaelTO)**

## License

This project is licensed under the GNU GPLv3 License - see the [LICENSE.txt](LICENSE.txt) file for details.
