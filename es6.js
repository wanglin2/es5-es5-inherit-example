// 父类
class Sup {
    constructor(name) {
        this.name = name
    }
    
    say() {
        console.log('我叫 ' + this.name)
    }
    
    static sleep() {
        console.log(`我在睡${this.type}觉`)
    }
}
// static只能设置静态方法，不能设置静态属性
Sup.type = '午'

// 子类，继承父类
class Sub extends Sup {
    constructor(name, age) {
        super(name)
        this.age = age
    }
    
    say() {
        console.log('你好')
        super.say()
        console.log(`今年${this.age}岁`)
    }
}
Sub.type = '懒'

let sub = new Sub('街角小林', 27)
sub.say()
Sub.type = '懒'
Sub.sleep()
