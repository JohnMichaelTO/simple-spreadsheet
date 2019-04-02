export const ACTION_CREATE = 'C';
export const ACTION_INSERT = 'N';
export const ACTION_SUM = 'S';
export const ACTION_QUIT = 'Q';

export const TABLE_CELL_MIN_VALUE = 0;
export const TABLE_CELL_MAX_VALUE = 999;

export const ERROR_SPREADSHEET_SIZE_SHOULD_BE_ABOVE_ZERO = "The spreadsheet's width and height should be above 0";
export const ERROR_SPREADSHEET_ALREADY_OPENED = "Creation of a new spreadsheet failed as there is currently another spreadsheet opened";
export const ERROR_SPREADSHEET_CANNOT_INSERT = "Insertion error, verify if the coordinates are within the limits and the value is between " + TABLE_CELL_MIN_VALUE + " and " + TABLE_CELL_MAX_VALUE;
export const ERROR_SPREADSHEET_SUM_VALUE_EXCEEDED = "The value of the sum exceeds the maximul allowed value (" + TABLE_CELL_MAX_VALUE + ") in a cell";
export const ERROR_SPREADSHEET_CANNOT_SUM_UP = "An error occured for summing up values";
export const ERROR_SPREADSHEET_DOES_NOT_EXIST = "Invalid action: the spreadsheet doesn't exist";

export const ERROR_INVALID_COMMAND = "This command is invalid. Please, insert an valid command";

export const FORM_COMMAND_LABEL = "Command";
export const FORM_SUBMIT_LABEL = "Submit";