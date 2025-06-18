function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function sumToSaiki(n) {
  if (n == 0) return n;
  else return n + sumToSaiki(n - 1);
}

function sumToTousaSuuretu(n) {
  return (1 / 2) * n * (n + 1);
}
let n = 100;
console.log(sumTo(100)); // 5050
console.log(sumToSaiki(100)); // 5050
console.log(sumToTousaSuuretu(100)); // 5050

function factorial(n) {
  //   if (n == 1) return 1;
  //   else return ;
  return n == 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // 120

function fibonacci(n, f = []) {
  if (n <= 2) {
    return 1;
  } else {
    if (f[n] !== undefined) {
      return f[n];
    }
    f[n] = fibonacci(n - 1, f) + fibonacci(n - 2, f);

    return f[n];
  }
}

console.log(fibonacci(77)); // 144

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  //   'next' in list &&
  while (list !== null) {
    console.log(list.value);
    list = list.next;
  }
}

function printList(list) {
  //   'next' in list &&
  while (list !== null) {
    list = list.next;
  }
}

function printListS(list) {
  if (list !== null) {
    console.log(list.value);
    printListS(list.next);
  }
}

function printListSReverse(list) {
  if (list !== null) {
    printListSReverse(list.next);
    console.log(list.value);
  }
}

printList(list);
printListS(list);
printListSReverse(list);
window.console.log('Hello, world!');
globalThis.console.log('Hello, world!');

// varで宣言した変数、関数はグローバルオブジェクトに登録される

function sayHi() {
  console.log('Hi');
  sayHi.counter++;
  console.log(sayHi.counter);
  // 何度実行したかカウントしましょう
  //sayHi.counter++;
}
sayHi.counter = 100;

sayHi();

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  counter.set = function (value) {
    counter.count = value;
  };
  counter.decrease = function () {
    counter.count--;
  };

  return counter;
}

let counter = makeCounter();

let animal = {
  eat() {
    this.full = true;
  },
  name: 'animal',
};

let rabbit = {
  jump() {
    console.log('jump!!!');
  },
  show() {
    this.id = 'rabbit';
  },
  __proto__: animal,
};

rabbit.name = 'rabbit';
console.log(rabbit.name);
console.log(animal.name);

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }

  sayBye() {
    console.log('Bye');
  }
}

let user = new User('daiki');
user.sayHi();
user.sayBye();

let User2 = class {
  sayHi() {
    console.log('Hi');
  }
};

let user2 = new User2();
user2.sayHi();

class Animal {
  name = 'animal';

  sayHi() {
    console.log('Hi' + this.name);
  }
}

class User3 {
  static getId() {
    console.log('you are name =' + this.id);
    console.log(this === User3);
    return this.id;
  }

  id = 110;
  name = 'daiki';
}

User3.getId();
let dai = new User3();
//console.log(dai.getId());

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmo(value) {
    if (value < 0) throw new Error('Negative water');
    this._waterAmount = value;
  }

  get waterAmo() {
    return this._waterAmount;
  }
}

let coffeeM = new CoffeeMachine();
coffeeM.waterAmo = 100;
//console.log(coffeeM._waterAmount); //? ブロックされる
console.log(coffeeM.waterAmo); //? 100

//? protected は _
//? private は #

let s = Object.prototype.toString;
let num = 123;
console.log(s.call(123)); // [object Number]
console.log(s.call(null)); // [object Null]
console.log(s.call(alert)); // [object Function]
console.log(Object.prototype.toString.call(123));
console.log(window === Window.prototype); // true

let json = '{ "age": 22, "name": "daiki" }';

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);
}
