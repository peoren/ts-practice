//函数表达式

// 简易版本
let mySum = function (x: number,y: number): number {
    return x+y
}
//完整版本
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
// 而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
// 如果需要我们手动给 mySum 添加类型，则应该是这样：
let mySum2 :(x:number,y:number)=> number = function (x:number,y:number): number {
    return x+y
}
//其中的=>是ts中的返回值声明不同与es6的箭头函数

// 用interface定义
interface MySum {
    (x: number,y: number): number;
}

let mySum3:MySum = (x: number,y: number): number => {
    return x+y
}

// 可选参数，默认值

//x为默认值，y为可选
const fun2 = (x:number=1,y?:number)=>void {

}
// 剩余参数
const fun3 = (x:number,...item:any[])=>void {}

//重载声明
//箭头函数不能重载
//我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
function reserver(x:number) :number;
function reserver(x:string) :string;
function reserver(x:number|string):number|string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}