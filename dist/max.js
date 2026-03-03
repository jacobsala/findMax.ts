"use strict";
//The Challenge: biggestRing
//Define a function biggestRing that consumes an array of Ring objects and returns the size of the largest ring 
//in the array. If the array is empty, return 0.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ring = void 0;
exports.biggestRing = biggestRing;
class Ring {
    constructor(size) {
        this.size = size;
    }
}
exports.Ring = Ring;
function biggestRing(rings) {
    let currentSize = 0;
    for (const ring of rings) {
        if (ring.size > currentSize) {
            currentSize = ring.size;
        }
    }
    return currentSize;
}
