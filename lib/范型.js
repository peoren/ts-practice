//泛型（Generics）是指在定义函数、接口或类的时候，
// 不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
//我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，
// 在后面的输入 value: T 和输出 Array<T> 中即可使用了。
//基本使用
function creatArray(length, value) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res.push(value);
    }
    return res;
}
creatArray(2, "x");
//多个范型使用
function swap(arr) {
    return [arr[1], arr[0]];
}
swap([1, 2]);
var logginLength = function (value) {
    console.log(value.length);
};
//范型类
var Add = /** @class */ (function () {
    function Add() {
    }
    return Add;
}());
var addNumFun = new Add();
addNumFun.msg = 'num add';
addNumFun.add = function (a, b) {
    return a + b;
};
