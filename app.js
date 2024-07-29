const myImg = document.getElementById("myImg");
const res = document.getElementById("res");
const inpName = document.getElementById("inpName");
const res2 = document.getElementById("res2");
const res3 = document.getElementById("res3");
const inpSearch = document.getElementById("inpSearch");

const myArr = [];
function myFunc() {
  let input = myImg.value;
  res.innerHTML += `<img src=${input} alt="">`;
  myImg.value = "";
}

function addName() {
  let input = inpName.value;
  myArr.push(input);
  res2.innerHTML += `<h1>${input}</h1>`;
  inpName.value = "";
  console.log(myArr);
}
function az() {
  myArr.sort();
  res2.innerHTML = "";
  myArr.forEach((item) => {
    res2.innerHTML += `<h1>${item}</h1>`;
  });
  console.log(myArr.sort());
}
function za() {
  myArr.sort().reverse();
  res2.innerHTML = "";
  myArr.forEach((item) => {
    res2.innerHTML += `<h1>${item}</h1>`;
  });
  console.log(myArr.sort());
}

function searchBtn() {
  let input = inpSearch.value;
  let result = myArr.filter((iteam) => {
    return iteam.toLowerCase().includes(input.toLowerCase());
  });
  res3.innerHTML = "";
  result.forEach((iteam) => {
    res3.innerHTML += `<h1>${iteam}</h1>`;
  });
}
