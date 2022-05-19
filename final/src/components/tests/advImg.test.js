import React from 'react';
import ReactDOM from 'react-dom';
import advImg from './../advImg'
import { isTSAnyKeyword } from '@babel/types';

it("works", () => {
    const div = document.createElement("div");
    ReactDOM.render(<advImg/>, div)
})