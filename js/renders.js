export const tableBody = document.querySelector('.table_result-input__body');

export function renderFields({ firstName, lastName, birthday, gender, address, language }) {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${birthday}</td>
    <td>${gender}</td>
    <td>${address}</td>
    <td>${language}</td>
    `;
    tableBody.append(row);
}