/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
/*let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");*/

//Ця зміна містить всі дані які в нас зберігаються у файлі data
//let DB = data.finesData;

/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
 "use strict";

 let fineNumber = document.getElementById("fineNumber");
 let passport = document.getElementById("passport");
 let creditCardNumber = document.getElementById("creditCardNumber");
 let cvv = document.getElementById("cvv");
 let amount = document.getElementById("amount");
 let buttonSubmit = document.getElementById("payFine");
 
 
 let DB = data.finesData;
 
 
 buttonSubmit.addEventListener('click', payFine);
 
 function payFine() {
     // Отримуємо значення з полів введення
     let fineNumberValue = fineNumber.value;
     let passportValue = passport.value;
     let creditCardNumberValue = creditCardNumber.value;
     let cvvValue = cvv.value;
     let amountValue = amount.value;
 
 
     // Валідація номера та суми
     let existingFine = DB.find(fine => fine.номер === fineNumberValue && fine.сума === +amountValue);
     if (!existingFine) {
         alert("Номер не співпадає або сума не співпадає");
         return;
     }
 
 
     // Валідація паспортних даних
     let passportRegex = /^[А-ЩЬЮЯҐЄIІЇ]{2}\d{6}$/;
     if (!passportRegex.test(passportValue)) {
         alert("Не вірний паспортний номер");
         return;
     }
 
 
     // Валідація номера кредитної картки
     let creditCardRegex = /^\d{16}$/;
     if (!creditCardRegex.test(creditCardNumberValue)) {
         alert("Не вірна кредитна картка");
         return;
     }
 
 
     // Валідація cvv
     let cvvRegex = /^\d{3}$/;
     if (!cvvRegex.test(cvvValue)) {
         alert("Не вірний cvv");
         return;
     }
 
      // Видалення об'єкта з DB
     DB = DB.filter(fine => !(fine.номер === fineNumberValue && fine.сума === +amountValue));
 
 
     // Виконання оплати
     alert("Оплата успішно виконана");
 }
 