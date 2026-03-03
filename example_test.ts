import { Ring, biggestRing } from './max';

const rings = [new Ring(3), new Ring(7), new Ring(5)];
console.log('biggestRing([3,7,5]) =>', biggestRing(rings)); // expect 7
console.log('biggestRing([]) =>', biggestRing([])); // expect 0
