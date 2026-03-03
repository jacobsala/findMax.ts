//The Goal: Define a function hasMetal that consumes an array of Ring objects and a targetMetal (string). 
// It returns true if at least one ring in the array matches that metal, and false otherwise.
//Think-Through: If you find a match, you can return true immediately (exit the loop early!). 
// But if you finish the whole loop and never found it, what should you return at the very bottom?

export class Ring {
    public size: number;
    public type: string;

    constructor(size: number, type: string) {
        this.size = size;
        this.type = type;
    }
}

export function hasMetal(rings: Ring[], targetMetal: string): boolean {
    for (const ring of rings) {
        if (ring.type === targetMetal) {
            return true;
        }
    }
    return false;
}