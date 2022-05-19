import React from 'react';
import ReactDOM from 'react-dom';
import goals from './../goals'
import { isTSAnyKeyword } from '@babel/types';

it("works", () => {
    const div = document.createElement("div");
    ReactDOM.render(<goals />, div)
})