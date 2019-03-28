import React from 'react';
import Spreadsheet from './Spreadsheet';

it('Creating spreadsheet', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 4);
    expect(creationResult).toBeTruthy();
    expect(spreadsheet.width).toEqual(5);
    expect(spreadsheet.height).toEqual(4);
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

it('Inserting number', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(10, 10);
    expect(creationResult).toBeTruthy();

    const insertionResult = spreadsheet.insert(3, 2, 5);
    expect(insertionResult).toBeTruthy();
    expect(spreadsheet.spreadsheet[2][3]).toEqual(5);
});

it('Sum', () => {
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

it('Quit', () => {
    let spreadsheet = new Spreadsheet();
    const creationResult = spreadsheet.create(5, 5);
    expect(creationResult).toBeTruthy();

    const quitResult = spreadsheet.quit();
    expect(quitResult).toBeTruthy();
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