function inception() {

const now = new Date();

let hour = now.getHours();
const meridian = hour >= 12 ? "PM" : "AM";
hour = hour % 12 || 12;
hour = hour.toString().padStart(2,0);

const min = now.getMinutes().toString().padStart(2,0);
const sec = now.getSeconds().toString().padStart(2,0);

const timeString = `${hour}:${min}:${sec} ${meridian}`;
document.getElementById("clock").textContent = timeString;

setTimeout(inception, 1000);
}

inception();

// My Solution

// const hour = document.querySelectorAll(".time p")[0];
// const min = document.querySelectorAll(".time p")[1];
// const sec = document.querySelectorAll(".time p")[2];


// function inception() {
//     const date = new Date();

//     hour.innerHTML = date.getHours();
//     min.innerHTML = date.getMinutes();
//     sec.innerHTML = date.getSeconds();

//     setTimeout(inception, 1000);
// }

// inception();





// Sketch Board

// month.innerHTML = date.getMonth() + 1;
// day.innerHTMdL = date.getDate();
// year.innerHTML = date.getFullYear();

// hour.innerHTML = date.getHours();
// min.innerHTML = date.getMinutes();
// sec.innerHTML = date.getSeconds();

// const date = new Date();
// const month = date.getMonth() + 1;
// const day = date.getDate();
// const year = date.getFullYear();
// const hour = date.getHours();
// const min = date.getMinutes();
// const sec = date.getSeconds();

// document.querySelectorAll(".date p")[0].innerHTML = month;
// document.querySelectorAll(".date p")[1].innerHTML = day;
// document.querySelectorAll(".date p")[2].innerHTML = year;

// document.querySelectorAll(".time p")[0].innerHTML = hour;
// document.querySelectorAll(".time p")[1].innerHTML = min;
// document.querySelectorAll(".time p")[2].innerHTML = sec;

// console.log(year);
// console.log(month);
// console.log(day);

// Task:
// 1. Show Date
// 2 SHow Time
// 3. Show inReatime
// 4. Can be refresh