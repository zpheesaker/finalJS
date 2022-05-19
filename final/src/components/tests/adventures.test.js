import React from 'react';
import ReactDOM from 'react-dom';
import Adventures from './../adventures'
import { isTSAnyKeyword } from '@babel/types';

it("works", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Adventures/>, div)
})