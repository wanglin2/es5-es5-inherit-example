// 父类
function Sup(name) {
    this.name = name// 实例属性
}
Sup.type = '午'// 静态属性
// 静态方法
Sup.sleep =  function () {
    console.log(`我在睡${this.type}觉`)
}
// 实例方法
Sup.prototype.say = function() {
    console.log('我叫 ' + this.name)
}

// 子类
function Sub(name, age) {
    // 继承父类的实例属性
    Sup.call(this, name)
    // 自己的实例属性
    this.age = age
}

// 继承原型属性
// 方法一
Sub.prototype = Object.create(Sup.prototype)
Sub.prototype.constructor = Sub

// 方法二
Sub.prototype.__proto__ = Sup.prototype

// 方法三
function Fn() {}
Fn.prototype = Sup.prototype
Sub.prototype = new Fn()
Sub.prototype.constructor = Sub

// 覆盖一下父类同名方法
Sub.prototype.say = function () {
    console.log('你好')
    // 调用父类的该原型方法
    // this.__proto__ === Sub.prototype、Sub.prototype.__proto__ === Sup.prototype
    this.__proto__.__proto__.say.call(this)
    console.log(`今年${this.age}岁`)
}

// 继承静态属性
Object.keys(Sup).forEach((prop) => {
    Sub[prop] = Sup[prop]
})

let sub = new Sub('街角小林', 27)
sub.say()
Sub.type = '懒'
Sub.sleep()
