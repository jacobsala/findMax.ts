export class Ring {
    public size: number;

     constructor(size: number) {
        this.size = size;
     }
}

export function countExpensiveRings(rings: Ring[], threshold: number): number {
    let count: number = 0;
    for (const ring of rings) {
        if (ring.size > threshold) {
            count += 1;
        }
    }
    return count;
}