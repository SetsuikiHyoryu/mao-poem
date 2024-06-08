"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = void 0;
const POEM = '一从大地起风雷，便有精生白骨堆。\n僧是愚氓犹可训，妖为鬼蜮必成灾。\n金猴奋起千钧棒，玉宇澄清万里埃。\n今日欢呼孙大圣，只缘妖雾又重来。';
const body = document.createElement('p');
exports.body = body;
body.textContent = POEM;
body.style.whiteSpace = 'pre-wrap';
body.style.textAlign = 'center';
