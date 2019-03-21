# Simple Spreadsheet

## Description

This is a simple spreadsheet that allows an end user to perform some basic spreadsheet operation (i.e. sum).

## Features
In a nutshell, the program has the following features:
* Create a new spread sheet 
* Add numbers in different cells and perform some calculation on top of specific row or column
* Quit

## Run the application
***TODO: To complete***

## Command description

|Command            |Description        |
|-------------------|-------------------|
|C w h              |Should create a new spread sheet of width w and height h (i.e. the spreadsheet can hold w * h amount of cells).|
|N x1 y1 v1         |Should insert a number in specified cell (x1,y1)|
|S x1 y1 x2 y2 x3 y3|Should perform sum on top of all cells from x1 y1 to x2 y2 and store the result in x3 y3|
|Q                  |Should quit the program.|

Assume each cell will allocate at most 3 characters, thus numbers given here should be right justified accordingly.

## Sample I/O

enter command: C 20 4
```
------------------------------------------------------------------
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
------------------------------------------------------------------
```

enter command: N 1 2 2
```
------------------------------------------------------------------
|                                                                 |
|  2                                                              |
|                                                                 |
|                                                                 |
------------------------------------------------------------------
```

enter command: N 1 3 4
```
------------------------------------------------------------------
|                                                                 |
|  2                                                              |
|  4                                                              |
|                                                                 |
------------------------------------------------------------------
```

enter command: S 1 2 1 3 1 4
```
------------------------------------------------------------------
|                                                                 |
|  2                                                              |
|  4                                                              |
|  6                                                              |
------------------------------------------------------------------
```

enter command: Q
```
```

## Testing
***TODO: To complete***

## Design consideration
***TODO: To complete***