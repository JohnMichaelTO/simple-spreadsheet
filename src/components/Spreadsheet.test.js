import React from 'react';
import Spreadsheet from './Spreadsheet';

it('Creating valid spreadsheet', () => {
    let spreadsheet = new Spreadsheet();
    let creationResult = spreadsheet.create(5, 4);
    expect(creationResult).toBeTruthy();
    expect(spreadsheet.width).toEqual(5);
    expect(spreadsheet.height).toEqual(4);
    expect(spreadsheet.spreadsheet).not.toBeNull();
});

it('Creating invalid spreadsheet', () => {
    let spreadsheet = new Spreadsheet();
    let creationResult = spreadsheet.create(0, 0);
    expect(creationResult).not.toBeTruthy();
    expect(spreadsheet.width).toEqual(0);
    expect(spreadsheet.height).toEqual(0);
    expect(spreadsheet.spreadsheet).toBeNull();
});

it('Creating invalid spreadsheet with negative values', () => {
    let spreadsheet = new Spreadsheet();
    let creationResult = spreadsheet.create(-5, -6);
    expect(creationResult).not.toBeTruthy();
    expect(spreadsheet.width).toEqual(0);
    expect(spreadsheet.height).toEqual(0);
    expect(spreadsheet.spreadsheet).toBeNull();
});

it('Creating 2 spreadsheets in a row which is invalid', () => {
    let spreadsheet = new Spreadsheet();
    let creationResult = spreadsheet.create(5, 4);
    expect(creationResult).toBeTruthy();
    expect(spreadsheet.width).toEqual(5);
    expect(spreadsheet.height).toEqual(4);
    expect(spreadsheet.spreadsheet).not.toBeNull();

    creationResult = spreadsheet.create(5, 9);
    expect(creationResult).not.toBeTruthy();
    expect(spreadsheet.width).toEqual(5);
    expect(spreadsheet.height).toEqual(4);
    expect(spreadsheet.spreadsheet).not.toBeNull();
});

it('Verify that a spreadsheet exist: spreadsheetExist()', () => {
    let spreadsheet = new Spreadsheet();
    let creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();
    expect(spreadsheet.width).toEqual(5);
    expect(spreadsheet.height).toEqual(5);
    expect(spreadsheet.spreadsheet).not.toBeNull();
    expect(spreadsheet.spreadsheetExist()).toBeTruthy();
});

it('isCoordinatesInBoundaries()', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(15, 15);
    expect(creationResult).toBeTruthy();
    expect(spreadsheet.isCoordinatesInBoundaries(4, 6)).toBeTruthy();
    expect(spreadsheet.isCoordinatesInBoundaries(20, 6)).not.toBeTruthy();
    expect(spreadsheet.isCoordinatesInBoundaries(8, 18)).not.toBeTruthy();
    expect(spreadsheet.isCoordinatesInBoundaries(20, 19)).not.toBeTruthy();
    expect(spreadsheet.isCoordinatesInBoundaries(-1, 6)).not.toBeTruthy();
    expect(spreadsheet.isCoordinatesInBoundaries(10, -5)).not.toBeTruthy();
    expect(spreadsheet.isCoordinatesInBoundaries(-2, -3)).not.toBeTruthy();
});

it('Inserting valid number', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(10, 10);
    expect(creationResult).toBeTruthy();

    const insertionResult = spreadsheet.insert(3, 2, 5);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[2][3]).toEqual(5);
});

it('Inserting invalid number', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(10, 10);
    expect(creationResult).toBeTruthy();

    let insertionResult = spreadsheet.insert(3, 2, -8);
    expect(insertionResult).not.toBeTruthy();
    expect(spreadsheet.spreadsheet[2][3]).toEqual("");

    insertionResult = spreadsheet.insert(3, 2, 1000);
    expect(insertionResult).not.toBeTruthy();
    expect(spreadsheet.spreadsheet[2][3]).toEqual("");
});

it('Sum over multiple rows and columns with no empty cells in between', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    let insertionResult = spreadsheet.insert(1, 1, 3);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][1]).toEqual(3);

    insertionResult = spreadsheet.insert(1, 2, 4);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[2][1]).toEqual(4);

    insertionResult = spreadsheet.insert(2, 1, 7);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][2]).toEqual(7);

    insertionResult = spreadsheet.insert(2, 2, 6);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[2][2]).toEqual(6);

    const sumResult = spreadsheet.sum(1, 1, 2, 2, 3, 3);
    expect(sumResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[3][3]).toEqual(20);
});

it('Sum over multiple rows and columns with 1 empty cell in between', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    let insertionResult = spreadsheet.insert(1, 1, 3);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][1]).toEqual(3);

    insertionResult = spreadsheet.insert(1, 2, 4);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[2][1]).toEqual(4);

    insertionResult = spreadsheet.insert(2, 1, 7);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][2]).toEqual(7);

    const sumResult = spreadsheet.sum(1, 1, 2, 2, 3, 3);
    expect(sumResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[3][3]).toEqual(14);
});

it('Sum over rows with no empty cells in between', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    let insertionResult = spreadsheet.insert(1, 1, 5);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][1]).toEqual(5);

    insertionResult = spreadsheet.insert(1, 2, 4);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[2][1]).toEqual(4);

    insertionResult = spreadsheet.insert(1, 3, 6);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[3][1]).toEqual(6);

    const sumResult = spreadsheet.sum(1, 1, 1, 3, 1, 4);
    expect(sumResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[4][1]).toEqual(15);
});

it('Sum over rows with 1 empty cell in between', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    let insertionResult = spreadsheet.insert(1, 1, 5);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][1]).toEqual(5);

    insertionResult = spreadsheet.insert(1, 3, 6);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[3][1]).toEqual(6);

    const sumResult = spreadsheet.sum(1, 1, 1, 3, 1, 4);
    expect(sumResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[4][1]).toEqual(11);
});

it('Sum over columns with no empty cells in between', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    let insertionResult = spreadsheet.insert(1, 1, 5);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][1]).toEqual(5);

    insertionResult = spreadsheet.insert(2, 1, 4);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][2]).toEqual(4);

    insertionResult = spreadsheet.insert(3, 1, 6);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][3]).toEqual(6);

    const sumResult = spreadsheet.sum(1, 1, 3, 1, 4, 1);
    expect(sumResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][4]).toEqual(15);
});

it('Sum over columns with 1 empty cell in between', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    let insertionResult = spreadsheet.insert(1, 1, 5);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][1]).toEqual(5);

    insertionResult = spreadsheet.insert(3, 1, 6);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][3]).toEqual(6);

    const sumResult = spreadsheet.sum(1, 1, 3, 1, 4, 1);
    expect(sumResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[1][4]).toEqual(11);
});

it('Quit valid', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    const quitResult = spreadsheet.quit();
    expect(quitResult).toBeTruthy();
    expect(spreadsheet.width).toEqual(0);
    expect(spreadsheet.height).toEqual(0);
    expect(spreadsheet.spreadsheet).toBeNull();
    expect(spreadsheet.spreadsheetExist()).not.toBeTruthy();
});

it('Quit invalid', () => {
    let spreadsheet = new Spreadsheet();
    const quitResult = spreadsheet.quit();
    expect(quitResult).not.toBeTruthy();
    expect(spreadsheet.width).toEqual(0);
    expect(spreadsheet.height).toEqual(0);
    expect(spreadsheet.spreadsheet).toBeNull();
});

it('formatNumberDisplay()', () => {
    let spreadsheet = new Spreadsheet();

    expect(spreadsheet.formatNumberDisplay(123)).toBe("123");
    expect(spreadsheet.formatNumberDisplay(12)).toBe(" 12");
    expect(spreadsheet.formatNumberDisplay(1)).toBe("  1");
});

it('show()', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(2, 2);
    expect(creationResult).toBeTruthy();

    expect(spreadsheet.show()).toBe("--------\n" +
                                    "|      |\n" +
                                    "|      |\n" +
                                    "--------\n");
});

it('isValueWithinLimits()', () => {
    let spreadsheet = new Spreadsheet();
    expect(spreadsheet.isValueWithinLimits(10)).toBeTruthy();
    expect(spreadsheet.isValueWithinLimits(100)).toBeTruthy();
    expect(spreadsheet.isValueWithinLimits(1000)).not.toBeTruthy();
});