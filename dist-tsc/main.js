"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title_1 = require("@/components/title");
const author_1 = require("@/components/author");
const body_1 = require("@/components/body");
const main = document.querySelector('#main');
const wrapper = document.createElement('div');
wrapper.style.width = '300px';
wrapper.appendChild(title_1.title);
wrapper.appendChild(author_1.author);
wrapper.appendChild(body_1.body);
main.appendChild(wrapper);
