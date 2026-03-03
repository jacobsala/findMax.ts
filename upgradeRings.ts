//The Goal: Define a function upgradeRings that consumes an array of Ring objects. 
// It should return a new array of numbers representing the sizes of all the rings, 
// but with each size increased by 1 (like resizing them).
export class Ring {
    public size: number;
    
    constructor(size: number) {
        this.size = size;
    }
}

export function upgradeRings(rings: Ring[]): Ring[] {
    let upgraded: Ring[] = [];
    for (const ring of rings) {
        const biggerRing = new Ring(ring.size + 1);
        upgraded.push(biggerRing);
    }
    return upgraded;
}