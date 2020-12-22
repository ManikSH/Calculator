let result = document.querySelector(".result");
let evalBtns = document.querySelectorAll(".eval");
let replaceBtns = document.querySelectorAll(".replace");
let staticBtns = document.querySelectorAll(".static");
let radCheckbox = document.querySelector(".rad");
let degCheckbox = document.querySelector(".deg");

let calci = {
  staticBtns(btn) {
    if (result.innerHTML == "0" || result.innerHTML == "0.00000") {
      return (result.innerHTML = btn.innerText);
    } else {
      return (result.innerHTML += btn.innerText);
    }
  },
  replace(btn) {
    if (btn.innerText == "x") {
      return (result.innerHTML += "*");
    } else {
      return (result.innerHTML += "%");
    }
  },
  update(data) {
    return (result.innerHTML = data);
  },
  updateIncrement(data) {
    return (result.innerHTML += data);
  },
  toRadian(degrees) {
    return degrees * (Math.PI / 180);
  },
  backSpace() {
    let resultArry = result.innerText.split("");
    resultArry.pop();
    let resultString = resultArry.toString();
    resultString = resultString.replace(/\,/g, "");
    result.innerHTML = resultString;
  },
};

staticBtns.forEach((staticBtn) => {
  staticBtn.addEventListener("click", () => {
    calci.staticBtns(staticBtn);
  });
});

replaceBtns.forEach((replaceBtns) => {
  replaceBtns.addEventListener("click", () => {
    calci.replace(replaceBtns);
  });
});

evalBtns.forEach((evalBtn) => {
  evalBtn.addEventListener("click", () => {
    switch (evalBtn.innerText) {
      case "=":
        calci.update(eval(result.innerHTML).toFixed(5));
        break;

      case "C":
        calci.update("0");
        break;

      default:
        break;
    }

    switch (evalBtn.classList.value) {
      case "btn pi eval":
        calci.updateIncrement(Math.PI);
        break;

      case "btn reciprocal eval":
        calci.update((1 / result.innerText));
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
          calci.update(Math.sin(result.innerText).toFixed(5));
        } else {
          calci.update(Math.sin(calci.toRadian(result.innerText)).toFixed(5));
        }
        break;

      case "btn cos eval":
        if (radCheckbox.checked) {
          calci.update(Math.cos(result.innerText).toFixed(5));
        } else {
          calci.update(Math.cos(calci.toRadian(result.innerText)).toFixed(5));
        }
        break;

      case "btn tan eval":
        if (radCheckbox.checked) {
          calci.update(Math.tan(result.innerText).toFixed(5));
        } else {
          calci.update(Math.tan(calci.toRadian(result.innerText)).toFixed(5));
        }
        break;

      case "btn bs eval":
        calci.backSpace();
        break;

      default:
        break;
    }
  });
});

// // for (var a = 0; a < 20; a++) {
// //     buttons[a].addEventListener('click', () => {
// //         result.innerHTML = buttons[a].innerText;
// //     });
// // }