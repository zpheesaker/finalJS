import React from 'react';
import ReactDOM from 'react-dom';
import header from './../header'
import { isTSAnyKeyword } from '@babel/types';

it("works", () => {
    const div = document.createElement("div");
    ReactDOM.render(<header />, div)
})