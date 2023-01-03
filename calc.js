let inputs = document.querySelectorAll(".input");
let operators = document.querySelectorAll(".operator");
let display = document.querySelector("#display");
let mainDisplay = document.querySelector("#mainDisplay");
inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    value = e.target.dataset.no;
    display.innerHTML += value;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    value = e.target.dataset.op;
    dis = display.textContent;
    dis = dis.trim("");
    splitval = dis.split("");
    length = splitval.length - 1;
    let lastval = splitval[length];
    if (lastval == "+" || lastval == "-" || lastval == "/") {
      // console.log(operator.dataset.op);
      if (value == "clear") {
        display.innerHTML = "";
      }
    } else {
      if (value == "eval" || value == "square" || value == "clear") {
        if (value == "eval") {
          var result = eval(dis);
          mainDisplay.innerHTML = result;
        } else if (value == "square") {
          var result = eval(dis);
          var square = Math.sqrt(result);
          mainDisplay.innerHTML = square;
        } else if (value == "clear") {
          display.innerHTML = "";
          mainDisplay.innerHTML = "";
        }
      } else {
        display.innerHTML += value;
      }
    }
  });
});
