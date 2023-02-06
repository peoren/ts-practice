//
// 在ts中只不同类型之间只判断他们最终的结构，而不判断他们定义时的关系
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

let Tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
// 由于Cat 和 Animal 是相似结构，ts认为 Cat extends Animal,我们就认为Animal 兼容Cat
let animal: Animal = Tom;
// 兼容的可以互相相互断言
let bigCat =animal as Cat
// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可