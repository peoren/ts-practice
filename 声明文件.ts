//当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
//常我们会把声明语句放到一个单独的文件（***.d.ts）中，这就是声明文件

//全局变量/常量
declare var global: any;//变量
declare const GLOBAL: any;//常量
//全局函数
declare function globalFunc():void;
//全局类
declare class globalClass{
    name:string;
    sayHello():void;
}
//声明枚举
// src/Directions.d.ts
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
// src/index.ts
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//声明接口
// 这里只得是在声明文件中使用.d.ts
interface globalInterface{
    name:string
}
//声明合并
// src/jQuery.d.ts
//当一个对象既是方法又是有属性的对象，可以多次声明
declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
//自动生成声明文件
//如果库的源码本身就是由 ts 写的，那么在使用 tsc 脚本将 ts 编译为 js 的时候，添加 declaration 选项，就可以同时也生成 .d.ts 声明文件了。
//
// 我们可以在命令行中添加 --declaration（简写 -d），或者在 tsconfig.json 中添加 declaration 选项。这里以 tsconfig.json 为例：
//
// {
//     "compilerOptions": {
//         "module": "commonjs",
//         "outDir": "lib",
//         "declaration": true,
//     }
// }
// 上例中我们添加了 outDir 选项，将 ts 文件的编译结果输出到 lib 目录下，然后添加了 declaration 选项，设置为 true，表示将会由 ts 文件自动生成 .d.ts 声明文件，也会输出到 lib 目录下。