import GenQrcode from "./components/GenQrcode/index.js";
declare const _default: {
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): any;
    push(...items: any[]): number;
    concat(...items: ConcatArray<any>[]): any[];
    concat(...items: any[]): any[];
    join(separator?: string | undefined): string;
    reverse(): any[];
    shift(): any;
    slice(start?: number | undefined, end?: number | undefined): any[];
    sort(compareFn?: ((a: any, b: any) => number) | undefined): any[];
    splice(start: number, deleteCount?: number | undefined): any[];
    splice(start: number, deleteCount: number, ...items: any[]): any[];
    unshift(...items: any[]): number;
    indexOf(searchElement: any, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: any, fromIndex?: number | undefined): number;
    every<S extends any>(predicate: (value: any, index: number, array: any[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[];
    filter<S_1 extends any>(predicate: (value: any, index: number, array: any[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): any[];
    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: any, currentIndex: number, array: any[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: any, currentIndex: number, array: any[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends any>(predicate: (value: any, index: number, obj: any[]) => value is S_2, thisArg?: any): S_2 | undefined;
    find(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): any;
    findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number;
    fill(value: any, start?: number | undefined, end?: number | undefined): any[];
    copyWithin(target: number, start: number, end?: number | undefined): any[];
    entries(): IterableIterator<[number, any]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<any>;
    includes(searchElement: any, fromIndex?: number | undefined): boolean;
    flatMap<U_3, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
    flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
    [Symbol.iterator](): IterableIterator<any>;
    [Symbol.unscopables]: {
        [x: number]: boolean | undefined;
        length?: boolean | undefined;
        toString?: boolean | undefined;
        toLocaleString?: boolean | undefined;
        pop?: boolean | undefined;
        push?: boolean | undefined;
        concat?: boolean | undefined;
        join?: boolean | undefined;
        reverse?: boolean | undefined;
        shift?: boolean | undefined;
        slice?: boolean | undefined;
        sort?: boolean | undefined;
        splice?: boolean | undefined;
        unshift?: boolean | undefined;
        indexOf?: boolean | undefined;
        lastIndexOf?: boolean | undefined;
        every?: boolean | undefined;
        some?: boolean | undefined;
        forEach?: boolean | undefined;
        map?: boolean | undefined;
        filter?: boolean | undefined;
        reduce?: boolean | undefined;
        reduceRight?: boolean | undefined;
        find?: boolean | undefined;
        findIndex?: boolean | undefined;
        fill?: boolean | undefined;
        copyWithin?: boolean | undefined;
        entries?: boolean | undefined;
        keys?: boolean | undefined;
        values?: boolean | undefined;
        includes?: boolean | undefined;
        flatMap?: boolean | undefined;
        flat?: boolean | undefined;
        [Symbol.iterator]?: boolean | undefined;
        readonly [Symbol.unscopables]?: boolean | undefined;
        at?: boolean | undefined;
    };
    at(index: number): any;
    install: any;
};
export default _default;
export { GenQrcode };
