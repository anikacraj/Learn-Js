

// -------------------------Show Time -------------------------------

var showTime = document.getElementById("showTime");
var stime = document.getElementById("time");
showTime.addEventListener("click", startTime);
function startTime() {
   var date = new Date();
   console.log(date);
   
   var year = date.getDate();
   console.log(year);
   
   var month = date.getMonth();
   console.log(month);
   var currentday = date.getDay();
   console.log(currentday);


   var hour = date.getHours();
var min = date.getMinutes();
var seconds = date.getSeconds();
  
   let time = hour + ":" + min + " :" + seconds;
   stime.textContent = time;
   setInterval(startTime, 1000);
 
};



// var head=document.getElementById("head");
// head.innerHTML="hello";


// ---------------------------Add Element----------------------------
var myDiv = document.getElementById("head2");
var head3 = document.createElement("h6");
var text3 = document.createTextNode("This is a heading 3");
head3.appendChild(text3);
myDiv.appendChild(head3);
//    ---------------------------insert_before-----------------------------
var heading1 = document.getElementById("head");
var text0 = document.createElement("h2");
var heading0 = document.createTextNode("This is a heading0");
text0.appendChild(heading0);
heading1.insertBefore(text0, heading1.firstChild);
// ---------------------------------remove Element----------------------

myDiv.removeChild(head3);

// ------------------------Error Handeling--------------------
var checkButton = document.getElementById("checkbutton").addEventListener("click", function() {
   var input = document.getElementById("check").value;
   var errorMessage = document.getElementById("errorMessage");
   errorMessage.textContent = "";  // Clear previous error message

   console.log(input);
   try {
       var num = parseInt(input);  // Convert input to a number
       if (isNaN(num)) {
           throw "Please enter a valid number";
       } else if (num < 5) {
           errorMessage.textContent = "This is too low";
           throw "This is too low";
       } else if (num > 10) {
           errorMessage.textContent = "This is too high";
           throw "This is too high";
       } else {
           console.log("The number is within range");
       }
   } catch (error) {
       console.log(error);
   }
});
// ---------------------for of---------------
let names=["anik","raj","chy"];
for(let name of names){
   console.log(name);
}
// --------------for in-----------------
let students ={
   ID : 101,
   NAME: "Anik",
   CGPA :3.70 
}
for (let x in students){
   console.log(`${x} :${students[x]}`);
}
// --------for each------------
var number = [2,4,7];
var sq= []
number.forEach(function(x){
   sq.push(x*x);
   
})
console.log(sq);
   // ----------mapping-------
   sq =number.map(function(x){
      return x*x*x;
   })
   console.log(sq);
   // -------filter-------------
 sq= number. filter(function(x){
   return  x>5;
 
 })
 console.log(sq)
//  -------array destructure------------------

let n=[10,20,30,50,60,70];
let [num1,num2, ...z]=n;
console.log(z);
//array swap
let x = 10;
let y = 20;
console.log(`Before swap ${x} ${y}`);

[x, y] = [y, x];

console.log(`After swap ${x} ${y}`);

// Object function using destructure
const stdInfo = ({ cgpa, id, fullname }) => {
   console.log(`Using function: ${fullname} and ${id}`);
}

// Nested object destructure
const std = {
   fullname: "anik chy",
   id: 101,
   cgpa: 3.62,
   lang: {
       native: 'bangla',
       beginner: 'English'
   }
}

// Calling the function with destructuring
stdInfo(std);

// Destructuring the object
const { fullname, id, lang } = std;
console.log(`Full name: ${fullname} ID: ${id}, Native Language: ${lang.native}`);


// find function 

let no = [11, 23, 35, 46, 68];
let firstEvenNumber = no.find(x => x % 2 === 0);
console.log(firstEvenNumber); // Output: 46


const evenNumberIndex = (value) => value % 2 === 0;

let numbers = [11, 23, 35, 46, 68];
let firstEvenNumberIndex = numbers.findIndex(evenNumberIndex);

console.log(`First Even Number Index is: ${firstEvenNumberIndex}`); // Output: 3

//  string function 

let text ="Today is my birthday"
console.log(text.startsWith('Today',0));
console.log(text.endsWith('birthday'));
console.log(text.includes('my'));

// asynchronous 
 const task1 =()=>{
   console.log("This is a task one ");

 } 
 const task2 =()=>{
   console.log("This is a task two");
 }
 const task3 =()=>{
   setTimeout(task2,2000)
 }
 const task4 =()=>{
   console.log("This is a task three");
 }
task1();
task3();
task4();
   
// ------------promise--------------
const promise1 = new Promise((resolve, reject) =>{
   let completedPromise =true;
   if(completedPromise){
      resolve ("completed promise 1");
   }
   else{
      reject("not completed");
   }
})
// console.log(promise1);
promise1.then((res)=>{
   console.log(res);
})

const promise2 =new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("complete promise2");
   },1000)
});
const promise3 =new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("complete promise 3")
   },500);
})

Promise.race([promise2,promise3]).then((res)=>{
   console.log(res);
}) 

//promise channing 

const taskone =()=>{
   return new Promise((resolve,reject)=>{
      resolve("Task 1 promise is completed")
   });
}
const tasktwo =()=>{
   return new Promise((resolve,reject)=>{
      reject("Task 2 promise not completed")
   });
}
const taskthree =()=>{
   return new Promise((resolve,reject)=>{
      resolve("Task 3 promise is completed")
   });
}
const taskfour =()=>{
   return new Promise((resolve,reject)=>{
      resolve("Task 4 promise is completed")
   });
}

const taskfive =()=>{
   return new Promise((resolve,reject)=>{
      resolve("Task 5 promise is completed")
   });
}
// taskone()
// .then((res) => console.log(res))
// .then(tasktwo)
// .then((res)=>console.log(res))
// .then(taskthree)
// .then((res)=>console.log(res))
// .catch((error)=> console.log(error));

// async and await
async function callAllTask() {
   try {
      const t1 = await taskone();
      console.log(t1);

      // const t2 = await tasktwo();
      // console.log(t2);

      const t3 = await taskthree();
      console.log(t3);

      const t4 = await taskfour(t3);
      console.log(t4);
      
   } catch (error) {
      console.error(error);
   }
}

callAllTask();

// __________________________Button ONclick_________________________
const photos = ["images/anik.jpg", "images/grp.jpg"];
let count = 0;
const img = document.getElementById("img");

function next() {
   count++;
   if (count >= photos.length) {
      count = 0;
      img.src = photos[count];
   }
   else {
      img.src = photos[count];
   }
}

function prev() {
   count--;
   if (count < 0) {
      count = photos.length - 1;
      img.src = photos[count];

   }
   else {
      img.src = photos[count];
   }
}
const line = document.getElementById("line");
function add() {
   line.classList.add("style");
   // line.style.fontSize="20px"
   // line.style.color="red"
   // line.style.fontStyle="Bold"
}
function rem() {
   line.classList.remove("style");
}

const h = document.getElementById("h");

h.addEventListener("mouseover", () => {
   h.classList.add("style");
})
h.addEventListener("mouseout", () => {
   h.classList.remove("style");
})
// Animation when button click 
for (var i = 0; i < 3; i++) {
   document.querySelectorAll(".button")[i].addEventListener("click", function () {
      var text = this.innerHTML.trim();
      console.log(text);
      anim(text);
   });
}

function anim(text) {
   var b = document.querySelector("." + text);
   if (b) {
      b.classList.add("anim");

      setTimeout(function () {
         b.classList.remove("anim");
      }, 1000);
   } else {
      console.error('Element with class ' + text + ' not found.');
   }
}
//  -----------------------------form------------------
const form = document.querySelector("form");
const name = form.querySelector("div #name");

const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
const message = document.querySelector("#message");
console.log(message);
form.addEventListener("submit", formhandler);

function formhandler(e) {
   e.preventDefault();
   console.log(name.value);
   console.log(email.value);
   console.log(password.value);

   const userInfo = {
      name: name.value,
      email: email.value,
      password: password.value
   }
   console.log(userInfo);
   name.value = "";
   email.value = "";
   password.value = "";
   saveMessage();
}
function saveMessage() {
   message.textContent = "Your registation successfully done";
   setTimeout(() => {
      message.textContent = ""
   }, 4000)
}

// calling api using xhr
const makeRequest =(method,url)=>{
   const xhr=new XMLHttpRequest();
   xhr.open(method,url);
   xhr.onload=()=>{
let data =xhr.response;
console.log(JSON.parse(data))
   }
   xhr.onerror =()=>{
      console.log(`error is here `)
   }
   xhr.send();

   
}
const getData =()=>{
   makeRequest('Get',)
}
