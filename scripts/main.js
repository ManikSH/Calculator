let result = document.querySelector(".result");
let evalBtns = document.querySelectorAll(".eval");
let replaceBtns = document.querySelectorAll(".replace");
let staticBtns = document.querySelectorAll(".static");
let radCheckbox = document.querySelector(".rad");
let degCheckbox = document.querySelector(".deg");

// Default innerText
result.innerText = "0";

let calci = {
  staticBtns(btn) {
    if (result.innerText == "0") {
      return (result.innerText = btn.innerText);
    } else {
      return (result.innerText += btn.innerText);
    }
  },
  replace(btn) {
    if (btn.innerText == "x") {
      return (result.innerText += "*");
    } else if (btn.classList.value == "btn userdefinedPower replace") {
      return (result.innerText += "**");
    } else {
      return (result.innerText += "%");
    }
  },
  update(data) {
    return (result.innerText = data);
  },
  updateIncrement(data) {
    return (result.innerText += data);
  },
  toRadian(degrees) {
    return degrees * (Math.PI / 180);
  },
  del() {
    if (result.innerText == "" || result.innerText == "0") {
      result.innerText = "0";
    } else {
      result.innerText = result.innerText.slice(0, -1);
    }
  },
};

// Static Buttons function
staticBtns.forEach((staticBtn) => {
  staticBtn.addEventListener("click", () => {
    calci.staticBtns(staticBtn);
  });
});

// Replace Buttons function
replaceBtns.forEach((replaceBtns) => {
  replaceBtns.addEventListener("click", () => {
    calci.replace(replaceBtns);
  });
});

// Evaluation Buttons functions
evalBtns.forEach((evalBtn) => {
  evalBtn.addEventListener("click", () => {
    switch (evalBtn.innerText) {
      case "=":
        calci.update(eval(result.innerText));
        break;

      case "AC":
        calci.update("0");
        break;

      case "DEL":
        calci.del();
        break;

      default:
        break;
    }

    switch (evalBtn.classList.value) {
      case "btn pi eval":
        calci.updateIncrement(Math.PI);
        break;

      case "btn reciprocal eval":
        calci.update(1 / result.innerText);
        break;

      case "btn square eval":
        calci.update(result.innerText ** 2);
        break;

      case "btn cube eval":
        calci.update(result.innerText ** 3);
        break;

      case "btn log eval":
        calci.update(Math.log10(result.innerText));
        break;

      case "btn pow4 eval":
        calci.update(result.innerText ** 4);
        break;

      case "btn sqRoot eval":
        calci.update(Math.sqrt(result.innerText));
        break;

      case "btn cbRoot eval":
        calci.update(Math.cbrt(result.innerText));
        break;

      case "btn powerOf10 eval":
        calci.update(Math.pow(10, result.innerText));
        break;

      case "btn sin eval":
        if (radCheckbox.checked) {
          calci.update(Math.sin(result.innerText));
        } else {
          calci.update(Math.sin(calci.toRadian(result.innerText)));
        }
        break;

      case "btn cos eval":
        if (radCheckbox.checked) {
          calci.update(Math.cos(result.innerText));
        } else {
          calci.update(Math.cos(calci.toRadian(result.innerText)));
        }
        break;

      case "btn tan eval":
        if (radCheckbox.checked) {
          calci.update(Math.tan(result.innerText));
        } else {
          calci.update(Math.tan(calci.toRadian(result.innerText)));
        }
        break;

      case "btn forthRoot eval":
        calci.update(Math.pow(result.innerText, 1 / 4));
        break;

      default:
        break;
    }
  });
});

document.onkeydown = function (e) {
  switch (e.key) {
    case "1":
      staticBtns[12].click();
      break;

    case "2":
      staticBtns[13].click();
      break;

    case "3":
      staticBtns[14].click();
      break;

    case "4":
      staticBtns[9].click();
      break;

    case "5":
      staticBtns[10].click();
      break;

    case "6":
      staticBtns[11].click();
      break;

    case "7":
      staticBtns[5].click();
      break;

    case "8":
      staticBtns[6].click();
      break;

    case "9":
      staticBtns[7].click();
      break;

    case "0":
      staticBtns[17].click();
      break;

    case "+":
      staticBtns[4].click();
      break;

    case "-":
      staticBtns[8].click();
      break;

    case "/":
      staticBtns[15].click();
      break;

    case ".":
      staticBtns[16].click();
      break;

    case "*":
      replaceBtns[1].click();
      break;

    case "Enter":
      evalBtns[16].click();
      break;

    case "Backspace":
      evalBtns[14].click();
      break;

    case "Delete":
      evalBtns[14].click();
      break;

    case "c":
      evalBtns[15].click();

    default:
      break;
  }
};

// // for (var a = 0; a < 20; a++) {
// //     buttons[a].addEventListener('click', () => {
// //         result.innerText = buttons[a].innerText;
// //     });
// // }
