import React from 'react';
import ReactDOM from 'react-dom';
import footer from './../footer'
import { isTSAnyKeyword } from '@babel/types';

it("works", () => {
    const div = document.createElement("div");
    ReactDOM.render(<footer />, div)
})