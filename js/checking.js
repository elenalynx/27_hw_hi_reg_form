/**
 * @param {*[]} language
 // * @return {*[]}
 */
export function getStrCheckboxValue(language) {
    let resultCheckboxesChecked = [];

    language.forEach((elem) => {
        if (elem.checked) resultCheckboxesChecked.push(elem.value);
    });

    return resultCheckboxesChecked.join(', ');
}