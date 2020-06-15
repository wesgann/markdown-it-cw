const assert = require('assert');
const markCw = require('./index.js');
const md = require('markdown-it')().use(markCw);

const tests = [
  { in: '*emphasis/italics*', exp: '<em>emphasis/italics</em>' },
  { in: '**strong**', exp: '<strong>strong</strong>' },
  { in: '***strong emphasis***', exp: '<em><strong>strong emphasis</strong></em>' },
  { in: '_emphasis_', exp: '<em>emphasis</em>' },
  { in: '__underline__', exp: '<u>underline</u>' },
  { in: '___emphasis underline___', exp: '<em><u>emphasis underline</u></em>' },
  { in: '**__strong underline__**', exp: '<strong><u>strong underline</u></strong>' },
];


tests.map(test => assert.equal(md.renderInline(test.in), test.exp))
