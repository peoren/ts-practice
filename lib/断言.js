var tom = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
// 由于Cat 和 Animal 是相似结构，ts认为 Cat extends Animal,我们就认为Animal 兼容Cat
var animal = tom;
// 兼容的可以互相相互断言
var bigCat = animal;
// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
