// import data from './__mock__/chartData.json';
const data = require('./__mock__/chartData.json');

/**
 * { t: number[]; o: number[]; l: number[]; h: number[]; c: number[] }
 */
const { t = [], c = [], h = [], l = [], o = [] } = data;
/*
 * t, o, c, t, l
 */
const ans = [];
while (t.length) {
    ans.push([t.pop(), o.pop(), c.pop(), t.pop(), l.pop()]);
}
console.log(`< ans >`, ans);

// eslint-disable-next-line import/order
const fs = require('fs');

fs.writeFileSync('data.json', JSON.stringify(ans), 'utf-8');
