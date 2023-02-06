declare let mySum: (x: number, y: number) => number;
declare let mySum2: (x: number, y: number) => number;
interface MySum {
    (x: number, y: number): number;
}
declare let mySum3: MySum;
declare const fun2: (x?: number, y?: number) => any;
declare const fun3: (x: number, ...item: any[]) => any;
declare function reserver(x: number): number;
declare function reserver(x: string): string;
