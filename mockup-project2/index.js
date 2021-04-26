const form = document.getElementById('form1');
const formElements = form.querySelectorAll('div');
const inputs = form.querySelectorAll('input');
const dataTable = document.getElementById('dataTable1');
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');
const tableBody = document.getElementById('tableBody');
var checkBox = document.getElementById('checkBox');
var selectedRow = null;

/*Checking which button is clicked (submit or update) 
and calling the respective function*/
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.submitter.id == 'submitBtn'){
        const myInput = getInputData();
        insertNewRow(myInput);
        resetForm();   
        dataTable.removeAttribute('hidden');
        formElements[9].setAttribute('hidden', 'true');

    }else{
        updateRow();
        resetForm();
        selectedRow = null;
    }
});

/*Collecting the text from the input fields and checking 
whether the chackbox is checked or not*/
function getInputData(){
    var myInput = {}, toggle;

    if (checkBox.checked){
        toggle = 'Yes';

    }else{
        toggle = 'No';
    }

    myInput['firstname'] = inputs[0].value;
    myInput['lastname'] = inputs[1].value;
    myInput['email'] = inputs[2].value;
    myInput['gend'] = inputs[3].value;
    myInput['toggle'] = toggle;

    return myInput;      
}


/*Inserting an empty row into the first Div 
and fill with the collected data*/
function insertNewRow(data){
    const table = dataTable.getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = data.firstname +' '+ data.lastname;
    newRow.insertCell(1).innerHTML = data.email;
    newRow.insertCell(2).innerHTML = data.gend;
    newRow.insertCell(3).innerHTML = `<a href="#">${data.toggle}</a>`;
    newRow.insertCell(4).innerHTML = `
    <input type="button" value="Edit" class="editBtn" onclick="onEdit(this)" 
    >`;
    newRow.insertCell(5).innerHTML = `
    <input type="button" value="Delete" class="deleteBtn" onclick="onDelete(this)" 
    >`;
}


//Resetting tthe input boxes after submission 
function resetForm(e){
    checkBox.checked = false;
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    inputs[3].value = '';
    
}


//Fill the update form with the selected row data 
function onEdit(td){
    selectedRow = td.parentElement.parentElement;

    var fullName = selectedRow.cells[0].innerHTML;
    var splitName = fullName.split(' ');

    inputs[0].value = splitName[0];
    inputs[1].value = splitName[1];
    inputs[2].value = selectedRow.cells[1].innerHTML;
    inputs[3].value = selectedRow.cells[2].innerHTML;

    updateBtn.removeAttribute('hidden');
    submitBtn.setAttribute('hidden', 'true');
    formElements[1].setAttribute
    ('style', 'background:repeating-linear-gradient(white 3px, lightgray 5px)');
    tableBody.setAttribute('style', 'background-color: #b7f5b30a');
    formElements[2].setAttribute('style', 'background-color: #b7f5b30a');
    
}

//Delete selected row
function onDelete(td){
    row = td.parentElement.parentElement;
    dataTable.deleteRow(row.rowIndex);
    const tb = tableBody.childElementCount;
    if (tb == 0){
        dataTable.setAttribute('hidden', 'true');
        formElements[9].removeAttribute('hidden');
    }
    //console.log(row.rowIndex);
}

//Update the selected row and reset the input form
function updateRow(){
  const myInput = getInputData();
        var data2 = getInputData();

        selectedRow.cells[0].innerHTML = 
        data2['firstname'] +' '+ data2['lastname'];
        selectedRow.cells[1].innerHTML = data2['email'];
        selectedRow.cells[2].innerHTML = data2['gend'];
        selectedRow.cells[3].innerHTML = `
        <a href="#">${data2['toggle']}</a>
        `;

        submitBtn.removeAttribute('hidden');
        updateBtn.setAttribute('hidden', 'true');
        formElements[1].removeAttribute('style');
}
