declare function creatArray<T>(length: number, value: T): Array<T>;
declare function swap<T = string, U = string>(arr: [T, U]): [U, T];
interface hasLength {
    length: number;
}
interface LogginLength<T extends hasLength> {
    (value: T): void;
}
declare const logginLength: LogginLength<hasLength>;
declare class Add<T> {
    msg: string;
    add: (a: T, b: T) => T;
}
declare let addNumFun: Add<number>;
