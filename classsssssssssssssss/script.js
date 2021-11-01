let calculation = [];

const buttons = document.querySelectorAll(".calc-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerHTML;

    if (value == "=") {
      const calc = `${eval(calculation.join(""))}`

      if (!isFinite(calc)) {
        calculation = [""];
        log("XETA BAS VERDI!");
      } else {
        calculation = [];
        calculation.push(String(calc));
        log(calculation.join(""));
      }
    } else if (value == "c") {
      calculation = [];
      log("");
    } else if (value == "delete") {
      calculation = calculation
        .map((process) => String(process).split(""))
        .flat();
      calculation.pop();
      log(calculation.join(""));
    } else {
      buttonClick(value);
      log(calculation.join(""));
    }
  });
});

function buttonClick(value) {
  const lastProcess = calculation[calculation.length - 1];

  if (calculation.length == 0) {
    if (isFinite(value)) {
      calculation.push(value);
    }
  } else {
    if (!isFinite(value) && isFinite(lastProcess)) {
      calculation.push(value);
    } else if (isFinite(value) && !isFinite(lastProcess)) {
      calculation.push(value);
    } else if (isFinite(value) && isFinite(lastProcess)) {
      calculation.push(value);
    }
  }
}

function log(value) {
  const screen = document.querySelector("#screen");
  screen.textContent = value;
}
