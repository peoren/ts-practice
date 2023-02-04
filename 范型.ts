//泛型（Generics）是指在定义函数、接口或类的时候，
// 不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

//我们在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，
// 在后面的输入 value: T 和输出 Array<T> 中即可使用了。

//基本使用
function creatArray <T> (length: number,value:T): Array<T> {
    let res:T[] = []
    for (let i = 0; i < length; i++) {
        res.push(value)
    }
    return res
}
creatArray(2,"x")

//多个范型使用
function swap<T=string,U=string> (arr:[T,U]) : [U,T] {
    return [arr[1],arr[0]]
}
swap([1,2])
//范型约束
interface hasLength{
    length: number;
}
interface LogginLength <T extends hasLength>{
    (value: T): void;
}
const logginLength : LogginLength<hasLength> = <T extends hasLength>(value:T ):void=>{
    console.log(value.length)
}
//范型类
class Add<T>{
    msg:string;
    add:(a:T,b:T)=>T;
}
let addNumFun = new Add<number>();
addNumFun.msg= 'num add'
addNumFun.add = (a:number,b:number):number=>{
    return a+b
}
