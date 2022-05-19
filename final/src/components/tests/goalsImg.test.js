import React from 'react';
import ReactDOM from 'react-dom';
import goalsImg from './../goalsImg'
import { isTSAnyKeyword } from '@babel/types';

it("works", () => {
    const div = document.createElement("div");
    ReactDOM.render(<goalsImg />, div)
})