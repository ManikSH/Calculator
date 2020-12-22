let output = document.querySelectorAll('.output');
let result = document.querySelector('.result');
let backendEval = document.querySelectorAll('.input');
let radCheckbox = document.querySelector('.rad')
let degCheckbox = document.querySelector('.deg');

output.forEach(function (e) {
    e.addEventListener('click', () => {
        result.innerHTML += e.innerText;
        if (e.innerHTML == 'x') {
            result.innerHTML = result.innerHTML.replace(/x/g, '*');
        }

        if (e.innerHTML == 'mod') {
            result.innerHTML += '%';
            result.innerHTML = result.innerHTML.replace(/mod/g, '')
        }
    });
});

backendEval.forEach(function (e) {
    e.addEventListener('click', () => {
        if (e.innerHTML == '=') {
            result.innerHTML = eval(result.innerHTML);
        }

        else if (e.innerHTML == 'C') {
            result.innerHTML = '';
        }

        else if (e.classList == 'bs input') {
            let newAry = result.innerHTML.split('');
            newAry.pop();
            result.innerHTML = newAry;
            result.innerHTML = result.innerHTML.replace(/\,/g, '');
        }

        else if (e.classList == 'sqRoot input') {
            result.innerHTML = Math.sqrt(result.innerHTML);
        }

        else if (e.classList == 'cbRoot input') {
            result.innerHTML = Math.cbrt(result.innerHTML);
        }

        else if (e.classList == 'powerOf10 input') {
            result.innerHTML = Math.pow(10, result.innerHTML);
        }

        else if (e.classList == 'pi input') {
            result.innerHTML += 3.1415926535897932384626433832795;
        }

        else if (e.classList == 'square input') {
            result.innerHTML = result.innerHTML * result.innerHTML;
        }

        else if (e.classList == 'cube input') {
            result.innerHTML = result.innerHTML ** 3;
        }

        else if (e.classList == 'reciprocal input') {
            result.innerHTML = 1 / result.innerHTML;
        }

        else if (e.innerHTML == 'log') {
            result.innerHTML = Math.log10(result.innerHTML);
        }

        else if (e.innerHTML == 'sin' && radCheckbox.checked) {
            result.innerHTML = Math.sin(result.innerHTML);
        }

        else if (e.innerHTML == 'cos' && radCheckbox.checked) {
            result.innerHTML = Math.cos(result.innerHTML);
        }

        else if (e.innerHTML == 'tan' && radCheckbox.checked) {
            result.innerHTML = Math.tan(result.innerHTML);
        }
            
        let toRadian = function (radian) {
            return (radian * (Math.PI/ 180)); 
         }
            
        if (e.innerHTML == 'sin' && degCheckbox.checked) {
            result.innerHTML = Math.sin(toRadian(result.innerHTML))
        }

        else if (e.innerHTML == 'cos' && degCheckbox.checked) {
            result.innerHTML = Math.cos(toRadian(result.innerHTML));
        }

        else if (e.innerHTML == 'tan' && degCheckbox.checked) {
            result.innerHTML = Math.tan(toRadian(result.innerHTML));
        }

    });
});


// for (var a = 0; a < 20; a++) {
//     buttons[a].addEventListener('click', () => {
//         result.innerHTML = buttons[a].innerText;
//     });
// }