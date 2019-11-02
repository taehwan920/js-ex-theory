// comment -> 한줄 주석
/* 이건 여러줄 주석 */ /*변수는 웬만하면 const로. 
let은 진짜 필요할때만 스샘*/

/*string -> 문자열? 아마도
const what = "taehwan" 따옴표 안에 들가면 무조건 문자열 ;*/
/*
boolean -> t/f
const wat = true;*/
/*float  -> 소수점스
const wat = 55.1;*/
/*camel case = 변수명은 띄어쓰기가 안돼서 스페이스바가 필요한 부분은 대문자. 첫글자는 소문자로 ㄱ*/
/*const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(monday, tue, wed, thu, fri);*/
/*array->[]*/
// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/*object->{} */

// const yangInfo = ["Taehwan", "27", true, "Osaka"];
/*const yangInfo = {
  name: "Taehwan",
  age: "27",
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Cheese burger", fatty: true }
  ]
};
// console.log(yangInfo.favFood[0].fatty);
//console도 object고, 그안에 들어있는 기능(함수)들은 built-in function이라고함.

function sayHello(potato, chicken) {
  console.log("Hello!", potato, "! you have", chicken, "years of age.");
}

sayHello(yangInfo.name, yangInfo.age);*/

// const title = document.getElementById("title") 바로 밑줄이랑 똑같은 의미. 근데 QS쪽이 css랑 표기가 같아서 더 편함.;
/*const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";*/
/*js의 모든 함수는 DOM(= Document Object Module)형태로 변경가능 즉, html문서로 만들수있다는것?*/
/*document.title = "I own you now";

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);*/
/*
if ("1" === 1) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalala");
} else {
  console.log("ho");
}
//&&==and ||==or
if (20 > 5 && "nicolas" === "necolas") {
  console.log("yes");
} else {
  console.log("no");
}

const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
  console.log("you can drink but should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}*/

const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
/*이벤트의 종류를 알고싶으면 mdn을 검색할것*/
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();
