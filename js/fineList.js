/*window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */


    /*return [
        {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
    ];
}*/

"use strict";
window.fineList = {
    searchFines: searchFines
};

const searchFinesBtn = document.getElementById('searchBtn');
searchFinesBtn.addEventListener('click', () => {
    let number = document.getElementById("searchInput2").value;
    let fineType = document.getElementById("searchInput").value;


    // Проверяем, что введен правильно номер или тип штрафа 
    if (!validateNumberInput(number) && !validateFineTypeInput(fineType)) {
        alert("Введіть 3 цифри для номеру або один з трьох типів штрафів:\n- Перевищення швидкості\n- Невірне паркування\n- Їзда у не тверезому стані");
        return;
    }

    let filteredData = fineList.searchFines(number, fineType);

    populateFinesTable(filteredData);
});


let DB = data.finesData;

function searchFines(number, fineType) {
    if (number) {
        return DB.filter(fine => fine.номер === number);
    } else if (fineType) {
        return DB.filter(fine => fine.тип === fineType);
    } else {
        return [];
    }
}

function populateFinesTable(filteredData) {
   
    let tableBody = document.getElementById('finesTableBody');
   
    tableBody.innerHTML = '';


    if (filteredData.length === 0) {
        alert('Штраф не знайдений');
        return;
    }

        filteredData.forEach(fine => {
        let row = tableBody.insertRow();
        Object.values(fine).forEach(value => {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(value));
        });
    });
}

function validateNumberInput(number) {
    return /^\d{1,3}$/.test(number);
}


function validateFineTypeInput(fineType) {
    const validFineTypes = /^(Перевищення швидкості|Невірне паркування|Їзда у не тверезому стані)$/;
    return validFineTypes.test(fineType);
}
