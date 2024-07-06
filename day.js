var date =new Date();
console.log(date);

var year = date.getDate();
console.log(year);

var month =date.getMonth();
console.log(month);
var currentday = date.getDay();
console.log(currentday);
var hour =date.getHours();
console.log(hour);


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
else{
img.src = photos[count];
}
}

function prev() {
count--;
if (count < 0) {
   count = photos.length - 1;
   img.src = photos[count];

}
else{
img.src = photos[count];
}
}
   const line=document.getElementById("line");
   function add(){
    line.classList.add("style");
    // line.style.fontSize="20px"
    // line.style.color="red"
    // line.style.fontStyle="Bold"
   }
   function rem(){
    line.classList.remove("style");
   }

   const h = document.getElementById("h");

   h.addEventListener("mouseover",()=>{
h.classList.add("style");
   })
  h.addEventListener("mouseout",()=>{
    h.classList.remove("style");
  })
// Animation when button click 
  for (var i = 0; i < 3; i++) {
   document.querySelectorAll(".button")[i].addEventListener("click", function() {
     var text = this.innerHTML.trim(); 
     console.log(text);
     anim(text);
   });
 }
 
 function anim(text) {
   var b = document.querySelector("." + text);
   if (b) {
     b.classList.add("anim");
 
     setTimeout(function() {
       b.classList.remove("anim");
     }, 1000);
   } else {
     console.error('Element with class ' + text + ' not found.');
   }
 }
 
