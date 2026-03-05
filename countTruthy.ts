export function countTruthy(values: Value[]): number {
    let count: number = 0;
    for (let value of values) {
        if(value) {
            count += 1;
        }
    }
    return count;
}