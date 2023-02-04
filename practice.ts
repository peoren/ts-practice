interface Peoren {
    readonly name:string,
    age?:number,
    [propName:string]:string|number
}
let tom:Peoren = {
    name:'tom',
    age:25,
    gender:'man'
}
