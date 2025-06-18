'use strict'; //過去に許可されていたゴミ記述をエラーとする
//alert("script1.js Do This");

/*
*d
?d
!
TODO
*/

// エイリアスで定数を定義する
const COLOR_ORANGE = '#FF7F00';

const myBirthday = '2024.09.02';
//myBirthday = 'gg'; //エラー
console.log(myBirthday);
let color = COLOR_ORANGE;
console.log(color);

//let name = "dai";
// let admin,name;
// name = "John";
// admin = name;
// console.log(admin);

// console.log(`Hello World and ${name}`);//f文字列的なやつ
// //モーダルウィンドウ
// let input = prompt("名前を入力してください","ユーザー");
// alert(`こんにちは ${input}さん`);
let input = 21;
// let isBoss = confirm("あなたがボスですか？");
// alert(isBoss);

let value = Number(input);
//console.log(value);
let str = String(23 + 3);
console.log(str + 111);
//let bool = Boolean(1);
// alert(7 - "2");
// alert("9" / "3");

// //非数値を数値に変換
// alert(+"");//0
// alert(+"asdf");//NaN
// alert(+true);//1
// alert(null);//0
// alert(undefined);//NaN

let isTrue = value == 23;
if (isTrue) {
  console.log('true');
}
let condition = true;
let result = condition ? 'true!' : 'false!'; //三項演算子
console.log(result);

let age = 18;
condition = age < 3 ? 'You are baby' : age < 18 ? 'You are young' : age < 100 ? 'You are old' : 'You are Immortal!?';
console.log(condition);
// これはif() else if() else if() elseの形式と同じ
// let name = prompt("what's the official name of JavaScript?", '');
// if (name == 'ECMAScript') {
//   alert('Right');
// } else {
//   alert('Wrong');
// }

// vrc ping 平均
// Boolean に変換します。もしも結果が true であれば、
// 停止しオペランドの本来の値を返します。
// result = age != 18 || NaN || undefined || 'Anonymous';
// console.log(result);

// input = prompt('who?');
// if (input == 'Admin') {
//   let password = prompt('set your password');
//   if (password == 'TheMaster') {
//     alert('Welcome!');
//   } else if (password == '') {
//     alert('Canceled');
//   } else {
//     alert('Wrong password');
//   }
// } else if (input == '') {
//   alert('Canceled');
// } else {
//   alert("I don't know you");
// }

// (a != null && a != undefined) ? a : b     ===   a ?? b

//概念  ラベル付きbreak
//例えば２重for文の中で、for文全体から抜けたい場合
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (j == 4) {
      break outer; //らべるouterのfor文から抜ける!!
    }
  }
}

//でもいい
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (j == 4) {
      break outer; //らべるouterのfor文から抜ける!!
    }
  }
}

//技術的にはbreakはコードブロックの中ならOKだから以下もOK。
// でも99%はforの中で利用される
// label : {
//     console.log('Hello');
//     break label;
//     console.log('You Dead');
// }
// let n = prompt('n?');
// nextPrime: for (let i = 2; i < n; i++) {
//   for (let j = i - 1; j > 1; j--) {
//     if (i % j == 0) {
//       continue nextPrime;
//     }
//   }

//   console.log(i);
// }

switch (result) {
  case 1:
    console.log('One');
    break;
  case 2:
    console.log('Two');
    break;
  default:
    console.log('Other');
}
//switch文はcaseの値が一致するまで続く
//最初に一致するまでは条件をチェックする。
//つまり、一致した後にbreakがない場合は、
// チェックなしで次のcaseを実行する。

// //function
// function showMessage() {
//   alert('Hello Mike');
// }
// //引数のデフォルト
// function calcAdd(num1 = 1, num2 = 2) {
//   return num1 + num2;
// }
//引数が省略されたかの確認はundefinedで行う

function showComment(text) {
  if (text === undefined) {
    text = 'empty!!';
    console.log(text);
  }
  return 7 + 8;
  //処理
}
console.log(0 - showComment(5));

//関数名 プレフィックスは動詞
//showMessage()  showXXX()
//getUserName()  getXXX()
//calcSum()     calcXXX()
//createData()  createXXX()
//checkPermission()  checkXXX()
//function 関数名(parameters, delimited, by ,comma){
// return;
//}
// function checkAge(age) {
//   return age > 18 ? true : confirm('Did parents allow you??');
//   return age > 18 || confirm('Did parents allow you??');
// }

//関数式
let sayHi = function () {
  console.log('Hello');
};
// alert(sayHi);
// alert(showComment);
// alert(typeof showComment);

// function ask(text, yes, no) {
//   if (confirm(text)) {
//     yes();
//   } else {
//     no();
//   }
// }

let bye = function () {
  console.log('Bye');
};
bye();
//?関数式での定義を行うときは文を書くので
//? ラストのセミコロンが必要

///呼び出し 関数宣言ver
// function showOk(){
//   alert('You agreed');
// }
// function showCancel(){
//   alert('You canceled');
// }
// ask('OK?', showOk, showCancel);

// function myfunc111() {
//   return 1;
// } //!セミコロン不要    ノーマルな宣言

// let myfunc333 = function () {
//   return 3;
// }; //?セミコロン必須    関数式で宣言

// let myfunc555 = () => 5;
// //*セミコロン不要    アロー関数で宣言

///呼び出し 関数式 無名関数
// ask(
//   'OK?',
//   function () {
//     /* 内容 */ alert('You agreed');
//   },
//   function () {
//     /* 内容 */ alert('You canceled');
//   }
// );
//?無名関数で利用するときは宣言時とは異なり、
//?ラストのセミコロンは不要

//アロー関数！！
//? let func = (arg1, arg2, arg3, argN) => expression;

//* let sum = (a, b, c) => a + b - c;
//? let sum = function(a, b, c){
//?   return a + b - c;
//? };
//TODO こいつら一緒です。
//引数たちを使ってアロー右辺式を評価し返す関数を作る。
//これで宣言完了です。

//引数が1つの時は()を省略できる
//? let double = n => n**2;
//引数がないときは空のカッコを書く
//? let glory = () => alert('Hello');

let sleepCount = 1;
//  = prompt('寝た回数は？', 3);

let func =
  sleepCount == 0
    ? () => console.log('worse') //?セミコロンいらない
    : () => console.log('good');
func();
let myfunc = (c, d, e) => {
  let ans;
  ans = (c * d) ** e;
  return ans;
};

//alert(myfunc(2, 3, 2));

// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// let user = makeUser('John', 30);
// console.log(user.name);

let apple = 'AOMORI';
let orange = 'MIYAZAKI';
let banana = 'OKINAWA';
let fruits = {
  apple,
  orange,
  banana,
};
console.log(fruits.apple);

// let glory = () => alert('Hello');
// glory();

// alert(myfunc(2, 3, 2));

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   'Do you agree?',
//   () => alert('You agreed.'),
//   () => alert('You canceled.')
// );
// function() {alert('You agreed.');}
// function() {alert('You canceled.');}

// function myfunc111() {
//   return 1;
// } //!セミコロン不要    ノーマルな宣言

// let myfunc333 = function () {
//   return 3;
// }; //?セミコロン必須    関数式で宣言

// let myfunc555 = () => 5;
// //*セミコロン必須    アロー関数で宣言
// myfunc555();

// == は数値に変換してから比較する
// === は型も含めて比較する

//バッククォートで囲むと改行も反映される「複数行に分割できて見やすい」
str = `
Hello everyone! I'm dhia.
I study JavaScript now. So easy!
collaborating with the community 
to maintain and evolve the definition of JS.
`;
console.log(str);

if (str === 'texts is correctly. so long texts case is separated this code.' && value === 999 && value === false) {
  console.log('OK'); //処理
}

//? if (str === 'texts is correctly. so long texts case is separated this code.' &&
//?     value === 999 &&
//?     isTrue === false
//? ) {
//?   console.log('OK'); //処理
//? }

let user = new Object(); //生成 pythonでいう辞書型
user = {}; //これでもOK
let name;
user = {
  name: 'dhia',
  age: 22,
  'like Color': 'yellow',
};
user.isAdmin = false;
user['like Color'] = 'red';
//アクセス
console.log(user.name + ' : ' + user.age);
//追加
user.isAdmin = true;
//削除
delete user.age;
//変更
user.isAdmin = false;
user['like Color'] = 'red';
console.log(user['like Color']);
name = 'age';
user[name] = 88;
console.log(user);

//let fruit = 'apple';
// let bag = {
//   [fruit]: 3,
// };

// let dict = {
//   [user + 'comp']: 1,
// };

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
let user1 = makeUser('dhia', 22);
console.log(user1);
//プロパティは変数と同じ名前の場合、省略可能

// function makeUser(name, age) {
//   return {
//     name,
//     age, //変数が存在してたら、その変数の値がプロパティの値
//   };
// }

//プロパティの存在チェック
console.log(user.noSuchProperty === undefined); //true
console.log('key in object');
console.log('age' in user);
console.log('like Color' in user);
console.log('id' in user);

// for(key in object){}
for (let key in user) {
  console.log(key + ':' + user[key]);
}

user = new Object(); // = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

let isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};
isEmpty(user);
//let Emp = function () {};
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}
multiplyNumeric(salaries);
console.log(salaries);

user = { name: 'John' };
let admin = user; //参照
admin.name = 'Pete';
console.log(user.name);

let product = {
  id: 101,
};
let dict = {};
//コピー先、コピー元たち。コピー先はオブジェクト
Object.assign(dict, user, product);
console.log(dict);

let clone = Object.assign({}, user);
console.log(clone);

//オブジェクトのなかのメンバにアクセス
//this.メンバ名
function sayHahhaa() {
  console.log(this.id);
}

dict.f = sayHahhaa;
dict.f();

//objectのなかでthisを使って自身を参照させたいときは
//メソッドを利用しろ。
//thisはそのメソッドが呼ばれた時のオブジェクトを参照する。
//プロパティの値としてthisを使うと、
//その参照先はグローバルオブジェクトになる。
function createObject() {
  return {
    name: 'Created Object',
    // この this は createObject 関数内の this を指す
    ref: this,
    func() {
      // この this はメソッドを呼び出したオブジェクトを指す
      return this;
    },
  };
}
let obj = createObject();
console.log(obj.ref); //通常の関数呼び出し
console.log(obj.func().func().name); //メソッド呼び出し

// let calculator = {
//   num1: null,
//   num2: null,
//   read() {
//     this.num1 = +prompt('num1');
//     this.num2 = Number(prompt('num2'));
//   },
//   sum() {
//     return this.num1 + this.num2;
//   },
//   mul() {
//     return this.num1 * this.num2;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    //存在しないメンバに対しての代入＝追加！
    // this.a = +prompt('a?', 0);
    // this.b = +prompt('b?', 0);
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // 現在の段を表示します
    // alert(this.step);
  },
};
ladder.up().up().down().up().up().down().showStep(); // 1

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// user = new User('diamond');
// console.log(user.name);
// console.log(user.isAdmin);
//コンストラクタはreturnがない場合はthisを返す（これが普通）
//return プリミティブ型の場合は無視➡️thisを返す
//return オブジェクトの場合はそのオブジェクトを返す！

function Calculator() {
  this.read = function () {
    // this.a = prompt('a?', 0);
    // this.b = prompt('b?', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    // this.value += +prompt('add?', 0);
  };
}
let accumulator = new Accumulator(1); // 初期値 1
accumulator.read(); // ユーザの入力値の加算
accumulator.read(); // ユーザの入力値の加算
//alert(accumulator.value); // それらの値の合計を表示

function Constractor() {
  this.id = null;
  this.name = null;
  this.counter = -100;
  this.countAdd = function () {
    //メソッドは関数式チックに書く
    //➡ 関数名 = function() {}
    this.counter++;
  };
}
let c = new Constractor();
c.countAdd();
c.countAdd();
console.log(c.counter);
console.log((c.id = 202));
console.log((c.name = 'dhia'));

dict = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    street: 'Broadway',
  },
};
console.log(dict.address.city);

function FumanInfo(name, city, street) {
  this.name = name;
  this.address = {
    city,
    street,
  };
}
let fuman = new FumanInfo('John', 'New York', 'Broadway');
console.log(fuman.address.city);

//オプショナルチェイニング
// ?. の前部分がundefined or null なら、チェックを終えてundefined を返す
// それ以外は ?. の後部分を評価する
console.log(fuman?.address?.city);
//存在しない可能性のある関数を呼ぶときにも使える
let userAdmin = {
  admin() {
    console.log('admin');
  },
};
console.log(typeof userAdmin);
userAdmin.admin?.();
userAdmin.getID?.(); //存在しない関数は無視される

let pcCase = {
  name: 'Gareria',
  cpu: 'core i7 13700K',
  gpu: 'RTX 3090',
  ram: '32GB',
};

console.log(pcCase?.['name']);
console.log(pcCase?.['cpu']);
// ?.    ?.()    ?.[]

function Pc(name, cpu, gpu, ram) {
  this.name = name;
  this.cpu = cpu;
  this.gpu = gpu;
  this.ram = ram;
  this.show = function () {
    console.log(this.name + ' ' + this.cpu + ' ' + this.gpu + ' ' + this.ram);
  };
}

// let funcc = () => {
//   console.log('Hello');
// };

let pc = new Pc('Gareria', 'core i7 13700K', 'RTX 3090', '32GB');
console.log(pc?.['name']);
pc.show();

pc.show = function () {
  console.log('改造してやったり');
};
pc.show();

//シンボル型
let id = Symbol();
id = Symbol('id'); //シンボル名'id' デバッグで便利
console.log(id);
console.log(id.toString());
console.log(id.description);
pc[id] = 495;
console.log(pc[id]);
// id = Symbol(); これで別のシンボルが生成
// つまり以前のシンボルは存在しなくなる
// console.log(pc[id]);

//? シンボルが同じ名前(説明)で同じ存在にしたいとき
//? グローバルシンボルレジストリって箱に作成する
id = Symbol.for('id');
let idAgain = Symbol.for('id');
console.log(id === idAgain);

user = {
  name: 'John',
  [id]: 123, //シンボルをキーにする時は[]
};
console.log(user[id]);
console.log(user[idAgain]);

let sym1 = Symbol.for('name');
let sym2 = Symbol.for('id');

//シンボルから名前を入手
console.log(Symbol.keyFor(sym1)); //name
console.log(Symbol.keyFor(sym2)); //id
console.log(sym1.description);
console.log(sym2.description);

let people = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};
console.log(people[Symbol.toPrimitive]('number'));
alert(pc);

user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

user = {
  name: 'John',
  money: 1000,

  // hint が "string" の場合
  toString() {
    return this.name;
  },
  // hint が "number" や "default" の場合
  valueOf() {
    return this.money;
  }, //自分自身thisを返すdefaultって存在価値ないからnumberと同じ扱いされてる
};

//ラッパークラスってかオブジェクトラッパーの仕組み
//
//プリミティブ型は単一の値しか持てないから
//便利なメソッド（オブジェクトが持っているような）が使えない．．．
//そこで、プリミティブ型をオブジェクトのように扱えるようにするために
//ラッパーオブジェクトが用意されている
//具体的には、プリミティブな変数のメソッドやプロパティにアクセスした瞬間
//そのプリミティブの値を知る特別な一時オブジェクトが作られて(便利なメソッドを持っている)
//そのオブジェクトのメソッドやプロパティにアクセスして利用する
//終わったら一時オブジェクトは破棄される
//
//Javaでやったラッパークラスかな。やっとイメージついた。理解した。

alert(user.dontsonzai);
let billion = 1000000000;
billion = 1e9; // 1*10^9
billion = 1_000_000_000;
let ms = 0.000001;
ms = 1e-6; // 1/1,000,000 = 0.000001

console.log(0xff);
console.log(0xaa); //16進数
console.log(0b1111); //2進数
console.log(0o0105); //8進数 69
let num = 36;
console.log(num.toString(2)); //2進数で表示
console.log(num.toString(16)); //16進数で表示
console.log(num.toString(36)); //36進数で表示
console.log((255).toString(2)); //数値リテラルに対してメソッドを呼ぶときは
//数値リテラルの後にドットをつける つまりドットが2つになる

Math.floor(3.9); //切り捨て 3
Math.floor(-3.3); // -4
Math.ceil(3.1); //切り上げ 4
Math.ceil(-3.3); //
Math.round(3.1); //四捨五入 3
Math.trunc(3.1); //小数点以下切り捨て 3

//1.2345を小数点第２位で丸める
num = 1.2345;
console.log(Math.round(num * 100) / 100);
console.log(Math.round(num, 3)); //
num.toFixed(1); //小数点以下ｎ桁に丸める 1.2
num.toFixed(2); //1.23
num.toFixed(3); //1.235

//!Math.toFixed(num, 2); //エラー MathにtoFixedはない
console.log((0.1).toFixed(20)); //0.10000000000000000555
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
console.log(isFinite(1));
console.log(isFinite(Infinity));
console.log(isNaN(NaN));
//? ( NaN === NaN ) //false
//* そのためisNaN()を使う

// isFinite() NaN/Infinity/-Infinity ではなく
// 通常の数値であれば、true を返します。

Object.is(NaN, NaN); //true(1)
Object.is(0, -0); //false  (2)  のパターンを除けばa === b と同じ
Object.is(0, ''); //

console.log(parseInt('200cm')); //200
console.log(parseFloat('abcd34.5')); //NaN
console.log(parseInt('1010', 2)); //2進数の1010を10進数に変換 10

console.log('FF', 16); //255
// let n = parseFloat(prompt('n'));
// let m = parseFloat(prompt('m'));
//console.log(n + m);

let readNumber = function () {
  let input;
  do {
    // input = +prompt('Enter a number');
  } while (!isFinite(input));

  if (input === null || input === '') return null;
  return input;
};

//jsでは文字列長をプロパティとして持ってる
console.log('hello'.length); //他言語だとstr.length() メソッドやね

str = 'WorldBreaker';
console.log(str[0]);
console.log(str.charAt(0));

//最後の文字
console.log(str[str.length - 1]);

for (let char of 'Moziretu') {
  console.log(char);
}

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//console.log(str.indexOf('substr', 開始インデックス)); // indexを返す
console.log(str.includes('World', 0)); //検索文字、開始インデックス true false
console.log(str.startsWith('World', 0)); //で始まるか
console.log(str.endsWith('World', 0)); //で終わるか
console.log(str.slice(0, 5)); //0から4までの文字列を取得
console.log(str.substring(0, 5)); //0から4までの文字列を取得
console.log(str.substring(5, 0)); //4から0までの文字列を取得
console.log(str.substr(2, 5)); //2から5文字取得

//str.codePointAt(pos)
// 位置 pos の文字コードを返します
console.log('H'.codePointAt(0)); //72
console.log('h'.codePointAt(0)); //104
console.log(String.fromCodePoint(72)); //H

console.log('Österreich'.localeCompare('Zealand'));
console.log('   monkey   '.trim()); //
console.log(str[0].toUpperCase() + str.slice(1));

function ckeckSpam(text) {
  text = text.toLowerCase();
  if (text.includes('viagra') || text.includes('xxx')) {
    return true;
  }
  return false;
}

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...';
  }
}

function extractCurrencyValue(str) {
  if (str[0] === '$') {
    return +str.slice(1);
  }
}

//配列
let arr = new Array();
arr = [];
//値の混在が可能
fruits = ['apple', 'orange', 'banana'];

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.push('kiwi'));

//キューの操作
console.log(fruits.shift()); //先頭を削除（取り出す）
console.log(fruits.unshift('apple')); //先頭に追加
console.log(fruits);

// 配列のためのfor文  for of
for (let arr of fruits) {
  console.log(arr);
}
let arr1 = new Array(2);
console.log(arr1);

let styles = ['jazz', 'Blues'];
styles.push('Rock-n-Roll');
let mid = Math.ceil((styles.length - 1) / 2);
mid = Math.floor(styles.lenght / 2);
styles[mid] = 'Classics';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');
console.log(styles);

function sumInput() {
  let arr = [];

  let value;
  while (true) {
    value = prompt('a number pleaseeeee');
    if (!isFinite(value) || value === null || value.trim() === '') break;

    arr.push(+value);
  }

  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  return sum;
}

console.log(sumInput());

let mm = prompt('a number please');
console.log(mm);
console.log(fruits.splice(0, 1, 'a', 'b')); //削除した要素を返す
console.log(fruits);
console.log(fruits.slice(1, 3)); //1から3までの要素を取得
//コピー↑

//? arr.forEach; //配列の全要素に対して関数を実行できる);
arr.forEach(function (item, index, array) {
  console.log(`${item} is at index ${index} in ${array}`);
});

let arr2 = [1, -1, 2, -2, 3];
arr2.reverse();
console.log(arr2);

let names = 'Bilbo, Gandalf, Nazgul';
let arr3 = names.split(',');
arr3 = arr3.map((name) => name.trim());
console.log(arr3);

let str2 = arr3.join(';');
console.log(str2);

console.log(str2.split('')); //文字列を配列に変換
console.log(arr3.join('')); //配列を文字列に変換

arr.sort((a, b) => b - a);

function Calculator() {
  this.methods = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
  };

  this.calculate = function (str) {
    let arr = str.split(' ');
    let n1 = +arr[0];
    let op = arr[1];
    let n2 = +arr[2];

    if (isNaN(n1) || isNaN(n2) || !this.methods[op]) {
      return NaN;
    }

    let result = this.methods[op](n1, n2);
    return result;
  };

  this.addMethod = function (op, func) {
    this.methods[op] = func;
  };
}

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User('John', 25);
let pete = new User('Pete', 30);
let mary = new User('Mary', 28);

let users = [john, pete, mary];
names = users.map((item) => item.name);

console.log(names);

john = { name: 'John', surname: 'Smith', id: 1 };
pete = { name: 'Pete', surname: 'Hunt', id: 2 };
mary = { name: 'Mary', surname: 'Key', id: 3 };

users = [john, pete, mary];

let usersMapped = users.map((item) => ({
  id: item.id,
  fullName: `${item.name} ${item.surname}`,
}));

// usersMapped = users.map((item) => {
//   let obj = {};
//   obj['id'] = item.id;
//   obj['fullName'] = `${item.name} ${item.surname}`;
//   return obj;
// });

console.log(usersMapped);
let userss = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(array) {
  return array.reduce((accumulator, item) => {
    accumulator[item.id] = item;
    return accumulator;
  }, {});
}

let usersById = groupById(userss);
console.log(usersById);

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMsg = new WeakMap();
readMsg.set(messages[1], new Date());
let readmen = new WeakSet();
readmen.add(messages[0]);

obj = {
  name: 'John',
  age: 30,
};

obj = {
  banana: 1,
  orange: 2,
  meat: 4,
};

arr = Object.keys(obj); // ['banana', 'orange', 'meat']
arr = Object.values(obj); // [1, 2, 4]
arr = Object.entries(obj); // [ ['banana', 1], ['orange', 2], ['meat', 4] ]

let doublePrices = Object.fromEntries(/*Map*/ Object.entries(obj).map(([key, value]) => [key, value * 2]));
console.log(doublePrices.meat); // 8
//オブジェクトに備わっていない配列限定メソッドを使いたい
//Object.entries(obj) で配列に変換した後に
//メソッドを適応する。その後、Object.fromEntries() でオブジェクトに戻す
salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let val of Object.values(salaries)) {
    sum += val;
  }
  return sum;
}

user = {
  name: 'John',
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

let [item1, item2] = arr;
console.log(item1);
console.log(item2);

[item1, item2] = 'Furandoru Scarlet'.split(' ');
console.log(item1);
console.log(item2);

//いらない要素はカンマ（空）でスキップ
let [, , , item4] = ['Jyestha', 'CoilHead', 'ManEater', 'BigBolt'];
console.log(item4); //BigBolt

//溢れる要素を配列にまとめる ...rest
let [food1, food2, ...rest] = ['apple', 'orange', 'banana', 'kiwi', 'watermelon'];
console.log(rest);

let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

let { title, width, height } = options;
console.log(title); //Menu
console.log(width); //100
console.log(height); //200

// let { width: w, height: h, price: p = 100.6 } = options;
// console.log(w); //100
// console.log(h); //200
// console.log(p); //100.6
// let { title, ...rest } = options;
// console.log(rest); // {width: 100, height: 200}

options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

let {
  size: { width: w, height: h }, //別にsizeにObj直接貰ってきてもいい「size,」でもいいが
  //ここでは一度size「名前は相手のObjのプロパティ名で固定」でObjを受け取り、コロンで代入先変数の名前を変更し、
  // オブジェクトの非構造化をして各変数に代入している。
  //まあ、外側オブジェクトのプロパティ（内部オブジェクト）を非構造化して受け取ってる。アンパックか？
  items: itms,
  extra: et,
  genre = 'R12',
} = options;
console.log(genre); //R12
console.log(w); // 100
console.log(h); // 200
console.log(itms); // ["Cake", "Donut"]
console.log(et); // true

user = {
  name: 'John',
  years: 30,
};

let { isAdmin = false } = user;

salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  //  let name, salary;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > max) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

let day = new Date();
console.log(day);
day.setFullYear(2023);
day.setMonth(8);
day.setDate(23);
console.log(day);

day = new Date(2012, 1, 20, 3, 12);
console.log(day);

function getWeekDay(date) {
  let i = date.getDay();
  let youbi = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return youbi[i];
}

function getLocalDay(date) {
  let i = date.getDay() - 1;
  let youbi = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  return youbi[i];
}
alert(getLocalDay(new Date(2012, 0, 3))); // 2

function getDateAgo(date, day) {
  let tmp = new Date(date);
  tmp.setDate(date.getDate() - day);
  return tmp.getDate();
}
function getSecondsToTomorrow() {
  let date = new Date();
  let tmr = new Date(date);
  tmr.setDate(date.getDate() + 1);
  tmr.setHours(0, 0, 0, 0);
  return Math.round((tmr - date) / 1000);
}
console.log(getSecondsToTomorrow());
//json  Object が文字列になった
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
};

let jsonSTR = JSON.stringify(student);
console.log(jsonSTR); //type --- string

user = {
  name: 'John Smith',
  age: 35,
};
let json = JSON.stringify(user);
let myUser = JSON.parse(json, function (key, value) {
  if (key == 'age') {
    return value - 1;
  }
  return value;
});
//------------------------------------------------
let room = {
  number: 23,
};

let meetup = {
  title: 'Conference',
  occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
};

// 循環参照
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
  })
);
