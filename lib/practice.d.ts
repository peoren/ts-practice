interface Peoren {
    readonly name: string;
    age?: number;
    [propName: string]: string | number;
}
declare let tom: Peoren;
