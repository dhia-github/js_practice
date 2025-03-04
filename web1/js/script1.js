'use strict'; //過去に許可されていたゴミ記述をエラーとする
//alert("script1.js Do This");

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
let name = prompt("what's the official name of JavaScript?", '');
if (name == 'ECMAScript') {
  alert('Right');
} else {
  alert('Wrong');
}

// vrc ping 平均
// Boolean に変換します。もしも結果が true であれば、
// 停止しオペランドの本来の値を返します。
result = age != 18 || NaN || undefined || 'Anonymous';
console.log(result);

input = prompt('who?');
if (input == 'Admin') {
  let password = prompt('set your password');
  if (password == 'TheMaster') {
    alert('Welcome!');
  } else if (password == '') {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (input == '') {
  alert('Canceled');
} else {
  alert("I don't know you");
}

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
// mylabel : {
//     console.log('Hello');
//     break mylabel;
//     console.log('You Dead');
// }
let n = prompt('n?');
nextPrime: for (let i = 2; i < n; i++) {
  for (let j = i - 1; j > 1; j--) {
    if (i % j == 0) {
      continue nextPrime;
    }
  }

  console.log(i);
}

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
