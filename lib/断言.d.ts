interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}
declare let tom: Cat;
declare let animal: Animal;
declare let bigCat: Cat;
