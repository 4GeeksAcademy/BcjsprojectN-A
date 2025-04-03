import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let article = ["A" , "My", "The"];
  let agent = ["pirate", "grandfather", "president", "cat", "dragon", "robot", "egg"];
  let action = ["destroyed", "lit up", "crushed", "ate", "evaporated"];
  let what = ["my homework", "my car", "my phone", "my desk", "my pencil", "my brain","all my food"];
  let where = ["in the classroom", "in my room", "on top of a cliff", "in Fiji", "right in front of my eyes"]
  let when = ["before class", "while I was asleep", "during my workout", "five minutes ago", "right before I left"];


let rdm1 = Math.floor(Math.random () * article.length);
let rdm2 = Math.floor(Math.random () * agent.length);
let rdm3 = Math.floor(Math.random () * action.length);
let rdm4 = Math.floor(Math.random () * what.length);
let rdm5 = Math.floor(Math.random () * where.length);
let rdm6 = Math.floor(Math.random () * when.length);

document.querySelector("#excuse").innerHTML = article [rdm1] + " " + agent [rdm2] + " " + action [rdm3] + " " + what [rdm4] + " " + where [rdm5] + " " + when [rdm6]}

