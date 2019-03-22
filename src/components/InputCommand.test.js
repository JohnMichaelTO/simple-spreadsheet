import React from 'react';
import InputCommand from './InputCommand';

it('Creating spreadsheet command', () => {
    let command = new InputCommand();
    expect(command.isCreatingSpreadsheetCommandValid("C 1 1")).toBeTruthy();
    expect(command.isCreatingSpreadsheetCommandValid("C 10 10")).toBeTruthy();
    expect(command.isCreatingSpreadsheetCommandValid("C 100 100")).toBeTruthy();
});

it('Inserting number command', () => {
    let command = new InputCommand();
    expect(command.isInsertingNumberCommandValid("N 1 1 10")).toBeTruthy();
    expect(command.isInsertingNumberCommandValid("N 10 10 10")).toBeTruthy();
});

it('Sum command', () => {
    let command = new InputCommand();
    expect(command.isSumCommandValid("S 1 1 2 2 3 3")).toBeTruthy();
    expect(command.isSumCommandValid("S 1 1 1 1 2 2")).toBeTruthy();
});

it('Quit command', () => {
    let command = new InputCommand();
    expect(command.isQuitCommandValid("Q")).toBeTruthy();
});