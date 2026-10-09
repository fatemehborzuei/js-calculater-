alert("سلام امیدوارم خوب باشید به ماشین حساب من خوش امدید")
let oneNumber = Number(prompt('عدد اول خود وارد کنید 1️⃣'));

let sign = prompt('علامت خود را وارد کنید ➕➖✖➗✖✖');

let towNumber = Number(prompt('عدد دوم وارد کنید  2️⃣'));

function calculator (oneNumber , sign , towNumber) {
    if (sign == '+') {
        return oneNumber + towNumber;   
    }

    else if (sign == '-') {
        return oneNumber - towNumber;
    }

    else if (sign == '*') {
        return oneNumber * towNumber;
    }

    else if (sign == '/') {
        return oneNumber / towNumber;
    }

    else if (sign == '**') {
        return oneNumber ** towNumber;
    }

    else {
        return"عدد وارد نکردی یا اشتباه است";
    }
}

let result = calculator(oneNumber , sign , towNumber);
alert('ا پاسخ : ' + result + ' ✔ ')