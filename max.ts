//The Challenge: biggestRing
//Define a function biggestRing that consumes an array of Ring objects and returns the size of the largest ring 
//in the array. If the array is empty, return 0.

export class Ring {
    public size: number;

     constructor(size: number) {
        this. = size;
     }
}
export function biggestRing(rings: Ring[]): number {
    let currentSize: number = 0;
    for (const ring of rings) {
        if (ring.size > currentSize) {
            currentSize = ring.size;
        }
    }
    return currentSize;
}