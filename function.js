function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // 定义一个对象
  var You = new Person('You', 24);
  // 我们创建了一个新的 Person，名称是 "You"
  // ("You" 是第一个参数，24 是第二个参数..)

  console.log(You.name);
  // 点表示法 (dot notation)
You.name = 'Simon';
var name = You.name;

  console.log(You.name);