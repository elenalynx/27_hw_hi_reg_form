// Реалізовуємо форму для реєстрації.
//     Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”
//
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.


import {Modal} from "../Modal/Modal.js";
import {renderFields} from "./renders.js";
import {getStrCheckboxValue} from "./checking.js";

const modal = new Modal(document.querySelector('.modal_reg-form'));
const btnOpenModal = document.querySelector('.btn_open_modal');
const form = document.querySelector('.modal_reg-form__content');
const fields = localStorage.fields ? JSON.parse(localStorage.fields) : [];

fields.forEach(renderFields);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const personInfo = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        birthday: form.elements.birthday.value,
        gender: form.elements.gender.value,
        address: form.elements.address.value,
        language: getStrCheckboxValue(form.elements.language),
    }

    renderFields(personInfo);
    fields.push(personInfo);
    localStorage.fields = JSON.stringify(fields);
    modal.hide();
    form.reset();
});

btnOpenModal.onclick = () => {
    modal.show();
}