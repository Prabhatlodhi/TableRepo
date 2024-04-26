const name = document.querySelector('#name')
const email = document.querySelector('#email')
const panNumber = document.querySelector('#panNumber')
const addres = document.querySelector('#addres')
const mobile = document.querySelector('#mobile')
const submitBtn = document.querySelector('#submitBtn')
const dataTable = document.querySelector('#data-table')
const allInputField = document.querySelectorAll('input')

submitBtn.addEventListener('click', submitData);

function submitData(){
    const uniqueId = Math.floor(Math.random()*99999)
    const newRow = `
    <tr>
        <td>${name.value}</td>
        <td>${email.value}</td>
        <td>${panNumber.value}</td>
        <td>${addres.value}</td>
        <td>${mobile.value}</td>
        <td>${uniqueId}</td>
    </tr>`
    dataTable.insertAdjacentHTML("afterend", newRow);
    clearInputField();
}


function clearInputField(){
    // allInputField.value = ""

    name.value = "";
    email.value = "";
    panNumber.value = "";
    addres.value = "";
    mobile.value = "";
}