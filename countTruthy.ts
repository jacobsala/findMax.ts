export function countTruthy(values: string[]): number {
    let count: number = 0;
    for (let value of values) {
        if(value) {
            count += 1;
        }
    }
    return count;
}

export function sumPassing(grades: Grade[], passingGrade: number): number {
    let sum: number = 0;
    for (let grade of grades) {
        if (grade >= passingGrade) {
            sum += grade;
        }
    }
    return sum;
}

export function getIndoorCats(cats: Cat[]): Cat[] {
    let result: Cat[] = [];
    for(let cat of cats) {
        if(!cat.isOutdoor) {
            result.push(cat);
        }
    }
    return result;
}

export function boostGrades(grades: number[]): void {
    for (let i = 0; i<grades.length; i++) {
        if(grades[i] === 50) {
            grades[i] = 70;
        }
    }
}

export function getBigBags(bags: Bag[]): Bag[] {
    let result: Bag[] = [];
    for(let bag of bags) {
        if(bag.width > 5) {
            let deepCopy = new Bag(bag.width, bag.height);
            result.push(deepCopy);
        }
    }
    return result;
}

export function formatUDID(rawID: string): string {
    if (rawID.length < 4) {
        return "INVALID";
    } else {
        return rawID.toUpperCase().slice(0, 4);
    }
}