let result = document.querySelector(".result");
let evalBtns = document.querySelectorAll(".eval");
let replaceBtns = document.querySelectorAll(".replace");
let staticBtns = document.querySelectorAll(".static");
let radCheckbox = document.querySelector(".rad");
let degCheckbox = document.querySelector(".deg");


// Default value
result.value = "0";

let calci = {
  staticBtns(btn) {
    if (result.value == "0") {
      return (result.value = btn.innerText);
    } else {
      return (result.value += btn.innerText);
    }
  },
  replace(btn) {
    if (btn.innerText == "x") {
      return (result.value += "*");
    } else {
      return (result.value += "%");
    }
  },
  update(data) {
    return (result.value = data);
  },
  updateIncrement(data) {
    return (result.value += data);
  },
  toRadian(degrees) {
    return degrees * (Math.PI / 180);
  },
  del() {
    if (result.value == "" || result.value == "0") {
      result.value = "0";
    } else {
      result.value = result.innerText.slice(0, -1);
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
        calci.update(eval(result.value));
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

      default:
        break;
    }
  });
});

// // for (var a = 0; a < 20; a++) {
// //     buttons[a].addEventListener('click', () => {
// //         result.value = buttons[a].innerText;
// //     });
// // }
