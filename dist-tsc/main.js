"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title_1 = require("@/components/title");
const author_1 = require("@/components/author");
const main = document.querySelector('#main');
main.appendChild(title_1.titleElement);
main.appendChild(author_1.authorElement);
