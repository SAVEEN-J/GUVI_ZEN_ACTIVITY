
const problem = document.querySelector(".problem");
const solution = document.querySelector(".solution");
const allBtns = document.querySelectorAll("span");
const toggle = document.querySelector(".toggle");


let Validkey = [
  "+",
  "-",
  "*",
  "/",
  ".",
  "%",
  "=",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Escape",
  "Delete",
  "Backspace",
  "Enter",
  "Shift",
];

document.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (!Validkey.includes(e.key)) {
    alert("only numbers & arithmatic operators are allowed");
  }
  if (Validkey.includes(e.key)) {
    if (e.key == "=" || e.key == "Enter") {
      let answer = eval(problem.innerHTML);
      let a = problem.innerText;
      console.log(a);
      if (answer) {
        if (solution.innerHTML.length == 0) {
          solution.innerHTML = `Ans = ${answer}`;
        } else {
          problem.innerHTML = answer;
          solution.innerHTML = "";
        }
      } else {
        alert("please enter the input");
      }
    } else if (e.key == "Escape" || e.key == "Delete") {
      solution.innerHTML = "";
      problem.innerHTML = "";
    } else if (e.key == "Backspace") {
      if (problem.innerText.length != 0) {
        problem.innerHTML = problem.innerText.slice(
          0,
          problem.innerText.length - 1
        );
      }
    } else if (e.key == "Shift") {
    } else {
      problem.innerHTML += e.key;
    }
  }
});


allBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.innerHTML == "=") {
      let ans = eval(problem.innerHTML);
      if (solution.innerHTML.length == 0) {
        if (ans != undefined) {
          solution.innerHTML = ` ${ans}`;
        }
      } else {
        problem.innerHTML = ans;
        solution.innerHTML = "";
      }
    } else {
      if (this.innerHTML == "Clear") {
        solution.innerHTML = "";
        problem.innerHTML = "";
      } else {
        problem.innerHTML += this.innerHTML;
      }
    }
  });
});
