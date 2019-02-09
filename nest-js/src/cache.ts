export class Cache {
    private static cache: object = { };

    static addToCache<T>(className: string, id: string, data: T): void {
        this.cache[className] = {...{[id]: data}};
    }

    static getFromCache<T>(className: string, id: string): T {
        return this.cache[className] ? this.cache[className][id] : null;
    }
}