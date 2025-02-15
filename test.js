// let std1 = {
//   name: "omar",
//   "cou oe": "GPA",
//   age: 19,
//   Aviable: true,
//   courses: ["programming 2", "math 02", "Logic", "OOP"],
//   co1: {
//     req1: "statics",
//     req2: "point",
//     instructior: {
//       d1: "assma",
//       d2: "Taruk",
//     },
//     checkIfAviable: function () {
//       if (std1.Aviable == true) return "accpet for work";
//       else return "not accpetable";
//     },
//   },
// };

// console.log(std1.courses.join(" # "))
// console.log(std1.name)
// console.log(std1.age)
// console.log(std1["cou oe"])
// console.log(std1.co1.req1)
// console.log(std1["co1"].instructior.d1)
// console.log(std1["co1"].checkIfAviable())

// let user =  Object.create({});
// console.log(user);
// user.name="omar";
// this.age=19;
// console.log(user);

// let obj =  Object.create(user);
// obj.age=1010;
// console.log(obj)

// let om = [1, 2, 3, 4, 896, 6, 7, 8, " ", 9, 9, 9, 0, 0];

// [a, b, c, d, ...rest] = om;

// console.log(a);    // 1
// console.log(b);    // 2
// console.log(rest); // [896, 6, 7, 8, undefined, 9, 9, 9, 0, 0]

// let obj = {
//   name: "omar",
//   age: 19,
//   skills: {
//     html: 20,
//     css: 34,
//   },
// };

// const {
//   name: n,
//   age: g,
//   skills: { html: r, css: cs },
// } = obj;

// function shao({ name: a, age: g, skills: { html: f } }) {
//   console.log(`the skill css is ${f}`);
// }

// shao(obj);
////////////////////////////////////////////
// let chosen = 2;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// const [ f1, f2, f3 ] = myFriends;

// let frindDetails = function firend(frindobj) {
//   const {
//     title: t,
//     age: g,
//     available: av,
//     skills: [, ch],
//   } = frindobj;
//   console.log(t);
//   console.log(g);
//   console.log(av ? "available" : "not available");
//   console.log(ch);
// };

// if (chosen === 1) frindDetails(f1);
// if (chosen === 2) frindDetails(f2);
// if (chosen === 3) frindDetails(f3);
////////////////////////////////

// const fs = require("node:fs");
// const filecontent = fs.readFileSync("./views/pro.txt", "utf8");

// const { logger, logger2 } = require("./logger");

// logger("Hello from logger");
// logger2("Hello from logger");
//////////////////////////////////////////////////////

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://omar:OmarAh123@cluster0.76cbz.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0 "
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
