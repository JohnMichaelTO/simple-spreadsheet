import React from 'react';
import Spreadsheet from './Spreadsheet';

it('Creating spreadsheet', () => {
    let spreadsheet = new Spreadsheet();
    spreadsheet.create(2, 2);
    console.log("blabla: " + spreadsheet.show());
    expect(false).toBeTruthy();
});

it('Inserting number', () => {
});

it('Sum', () => {
});

it('Quit', () => {
});