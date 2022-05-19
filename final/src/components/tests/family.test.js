import React from 'react';
import ReactDOM from 'react-dom';
import Family from './../family'
import { isTSAnyKeyword } from '@babel/types';

it("works", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Family />, div)
})