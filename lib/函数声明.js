//函数表达式
// 简易版本
var mySum = function (x, y) {
    return x + y;
};
//完整版本
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
// 而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
// 如果需要我们手动给 mySum 添加类型，则应该是这样：
var mySum2 = function (x, y) {
    return x + y;
};
var mySum3 = function (x, y) {
    return x + y;
};
// 可选参数，默认值
//x为默认值，y为可选
var fun2 = function (x, y) {
    if (x === void 0) { x = 1; }
    return void {};
};
// 剩余参数
var fun3 = function (x) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    return void {};
};
function reserver(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
