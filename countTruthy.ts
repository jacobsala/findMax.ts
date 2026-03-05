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

export function hasEmptyBag(bags: Inventory[]): boolean {
    for (let bag of bags) {
        if (bag.width === 0) {
            return true;
        }
    }
    return false;
}

export function applyDiscoung(prices: number[]): void {
    for (let i = 0; i<prices.length; i++) {
        if(prices[i] > 100) {
            prices[i] = prices[i] - 20;
        }
    }
}

export function findCatByName(cats: Cat[], targetName: string): Cat | null {
    let result: Cats[] = [];
    for (let cat of cats) {
        if (cat.name === targetName) {
            return cat;
        }
    }
    return null;
}

export class Game {
    public title: string;
    public isXbox: boolean;

    constructor(title: string, isXbox: boolean) {
        this.title = title;
        this.isXbox = isXbox;
    }
}

export function findXboxGame(games: Game[]): Game | null {
    for (let game of games) {
        if (game.isXbox === true) {
            return game;
        }
    }
    return null;
}