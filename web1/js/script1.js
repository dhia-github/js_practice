"use strict";   //過去に許可されていたゴミ記述をエラーとする
alert("script1.js Do This");

// エイリアスで定数を定義する
const COLOR_ORANGE = "#FF7F00";

const myBirthday = '2024.09.02';
//myBirthday = 'gg'; //エラー
console.log(myBirthday);
let color = COLOR_ORANGE;
console.log(color);

let name = "dai";
// let admin,name;
// name = "John";
// admin = name;
// console.log(admin);

console.log(`Hello World and ${name}`);//f文字列的なやつ
//モーダルウィンドウ
let input = prompt("名前を入力してください","ユーザー");
alert(`こんにちは ${input}さん`);

let isBoss = confirm("あなたがボスですか？");
alert(isBoss);
