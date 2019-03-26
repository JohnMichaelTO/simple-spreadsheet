import React from 'react';
import InputCommand from './InputCommand';

it('Creating spreadsheet command', () => {
    let command = new InputCommand();
    expect(command.isCreatingSpreadsheetCommandValid("C 1 1")).not.toBeNull();
    expect(command.isCreatingSpreadsheetCommandValid("C 10 10")).not.toBeNull();
    expect(command.isCreatingSpreadsheetCommandValid("C 100 100")).not.toBeNull();
});

it('Inserting number command', () => {
    let command = new InputCommand();
    expect(command.isInsertingNumberCommandValid("N 1 1 10")).not.toBeNull();
    expect(command.isInsertingNumberCommandValid("N 10 10 10")).not.toBeNull();
});

it('Sum command', () => {
    let command = new InputCommand();
    expect(command.isSumCommandValid("S 1 1 2 2 3 3")).not.toBeNull();
    expect(command.isSumCommandValid("S 1 1 1 1 2 2")).not.toBeNull();
});

it('Quit command', () => {
    let command = new InputCommand();
    expect(command.isQuitCommandValid("Q")).not.toBeNull();
});