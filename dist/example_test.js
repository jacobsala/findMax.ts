"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const max_1 = require("./max");
const rings = [new max_1.Ring(3), new max_1.Ring(7), new max_1.Ring(5)];
console.log('biggestRing([3,7,5]) =>', (0, max_1.biggestRing)(rings)); // expect 7
console.log('biggestRing([]) =>', (0, max_1.biggestRing)([])); // expect 0
