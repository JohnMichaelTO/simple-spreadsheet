import React from 'react';
import InputCommand from './InputCommand';

it('Creating spreadsheet command', () => {
    let inputCommand = new InputCommand();
    const command = "C 10 3";
    const regex = inputCommand.isCreatingSpreadsheetCommandValid(command);
    expect(regex).not.toBeNull();
    expect(regex.groups.action).toEqual("C");
    expect(regex.groups.width).toEqual("10");
    expect(regex.groups.height).toEqual("3");
});

it('Inserting number command', () => {
    let inputCommand = new InputCommand();
    const command = "N 3 5 10";
    const regex = inputCommand.isInsertingNumberCommandValid(command);
    expect(regex).not.toBeNull();
    expect(regex.groups.action).toEqual("N");
    expect(regex.groups.x).toEqual("3");
    expect(regex.groups.y).toEqual("5");
    expect(regex.groups.value).toEqual("10");
});

it('Sum command', () => {
    let inputCommand = new InputCommand();
    const command = "S 1 1 2 2 3 3";
    const regex = inputCommand.isSumCommandValid(command);
    expect(regex).not.toBeNull();
    expect(regex.groups.action).toEqual("S");
    expect(regex.groups.x1).toEqual("1");
    expect(regex.groups.y1).toEqual("1");
    expect(regex.groups.x2).toEqual("2");
    expect(regex.groups.y2).toEqual("2");
    expect(regex.groups.x3).toEqual("3");
    expect(regex.groups.y3).toEqual("3");
});

it('Quit command', () => {
    let inputCommand = new InputCommand();
    const command = "Q";
    const regex = inputCommand.isQuitCommandValid(command);
    expect(regex).not.toBeNull();
    expect(regex.groups.action).toEqual("Q");
});