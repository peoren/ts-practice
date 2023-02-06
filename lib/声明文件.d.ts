declare var global: any;
declare const GLOBAL: any;
declare function globalFunc(): void;
declare class globalClass {
    name: string;
    sayHello(): void;
}
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
declare let directions: Directions[];
interface globalInterface {
    name: string;
}
declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
