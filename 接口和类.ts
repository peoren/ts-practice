// 接口和类直接的关系

// 有些接口抽象的方法和参数可以被类执行实现

interface alarm{
    alert():void;
}
interface lock{
    lock():void;
}
class Door{}
class SafeDoor extends Door implements alarm,lock{
    alert() {
        console.log('alert')
    }
    lock() {
        console.log('open')
    }
}
const safeDoor = new SafeDoor();
safeDoor.alert()