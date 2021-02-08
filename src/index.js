/**
 * const, letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数の上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "letの上書き";
// console.log(val2);

// let val2 = "letの際宣言"
// console.log(val2);

// const val3 = "constの宣言";
// console.log(val3);

// const宣言は上書き不可
// val3 = "constの上書き"
// console.log(val3);

// const val4 = {
//   name: "test",
//   age: 30
// };
// val4.age--;
// console.log(val4);

// val4.name = "testtest";
// val4.age--;
// val4.address = "hroshima";
// // console.log(val4);

// // constで定義した配列はプロパティ変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// console.log(val5);

// val5.push("monkey");

/**
 * テンプレート文字列
 */

//  const name ="じゃけえ";
//  const age = 28;

//  // 「私の名前はじゃけえです。年齢は28歳です。」
//  const message1 = "私の名前は" + name + "です。年齢は" + age + "です。 "
//  console.log(message1);

//  //テンプレート文字列をもおちいた方法
//  const message2 = `私の名前は${name}です。年齢は${age+3}です。`
//  console.log(message2);

/**
 * アロー関数
 */
// 従来
//  function func1(str) {
//    return str;
//  }
//  console.log(func1("func1です"));

//  // アロー関数
//  const func2 = (str) => {
//    return str;
//   }
//   console.log(func2("func2です"));

//   const func3 = (num1, num2 ) => {
//     return num1 + num2;
//   }
//   console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ジャケえ",
//   age: 28,
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["太郎", 28];
// const [name, age] = myProfile;

// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("テスト");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //　まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [40, 50];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列処理
 */
// const nameArr = ["田中", "山田", "太郎"];
// for (let index = 0 ; index < nameArr.length ; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name ) => console.log(name));

// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num%2 !== 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "太郎") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString : "数値を入力する";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲ないです';
// }

// console.log(checkSum(70, 40));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 && flag2) {
//   console.log('1も2もtrue')
// }

// ||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
