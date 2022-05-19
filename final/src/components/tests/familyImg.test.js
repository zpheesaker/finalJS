import React from 'react';
import ReactDOM from 'react-dom';
import familyImg from './../familyImg'
import { isTSAnyKeyword } from '@babel/types';

it("works", () => {
    const div = document.createElement("div");
    ReactDOM.render(<familyImg />, div)
})