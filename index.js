var form = document.querySelectorAll('form');
var update = document.querySelector('#update');
var checkBox = document.getElementById('checkBox1');
var checkBox2 = document.getElementById('checkBox2');
var selectedRow = null;


//Setting the value of select box to empty by defult
document.getElementById('gender1').value = '';
document.getElementById('gender2').value = '';


//Adding the new row and setting the input boxes to empty
function addNewRow(e){
    e.preventDefault();
    var myInput = getInputData();
    if (myInput['firstname'] === ''){
        return
    }else if (myInput['lastname'] === ''){
        return
    }else if (myInput['email'] === ''){
        return
    }else if (myInput['gender'] === ''){
        return
    } else{
        insertNewRow(myInput);
        insertNewRow2(myInput);
        resetForm();
    }
    
   
}


/*Collecting the text from the input and checking 
whether the chackbox is checked or not*/
function getInputData(){
    var myInput = {},
        toggle;
    if (checkBox.checked){
        toggle = 'Yes';
    }else{
        toggle = 'No'
    }
    myInput['firstname'] = document.getElementById('firstName1').value;
    myInput['lastname'] = document.getElementById('lastName1').value;
    myInput['email'] = document.getElementById('email1').value;
    myInput['gender'] = document.getElementById('gender1').value;
    myInput['toggle'] = toggle;
    return myInput;      
}


/*Inserting an empty row into the first table 
and fill with the collected data*/
function insertNewRow(data){
    var table = document.getElementById('dataTable1').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname +' '+ data.lastname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.toggle;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<a style="background-color: #e3d78b;color:black;padding:5px;border-radius:5px;cursor:pointer" >Edit</a>';
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<a style="background-color: #e3d78b;color:black;padding:5px;border-radius:5px;cursor:pointer" >Delete</a>';
}


/*Inserting an empty row into the second table 
and fill with the collected data*/
function insertNewRow2(data){
    var table = document.getElementById('dataTable2').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname +' '+ data.lastname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.toggle;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<a style="background-color: #e3d78b;color:black; padding: 5px; border-radius: 5px; cursor: pointer" onclick="onEdit(this)">Edit</a>';
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<a style="background-color: #e3d78b;color:black;padding:5px;border-radius:5px;cursor:pointer"  onclick="onDelete(this)">Delete</a>';
}


//Resetting tthe input boxes after submission 
function resetForm(){
    document.getElementById('firstName1').value = '';
    document.getElementById('lastName1').value = '';
    document.getElementById('email1').value = '';
    document.getElementById('gender1').value = '';
    checkBox.checked = false;
}

//Resetting tthe input boxes after update
function resetForm2(){
    document.getElementById('firstName2').value = '';
    document.getElementById('lastName2').value = '';
    document.getElementById('email2').value = '';
    document.getElementById('gender2').value = '';
    checkBox2.checked = false;
}


//Fill the update form with the selected row data 
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    var fullName = selectedRow.cells[0].innerHTML;
    var splitName = fullName.split(' ');
    document.getElementById('firstName2').value = splitName[0];
    document.getElementById('lastName2').value = splitName[1];
    document.getElementById('email2').value = selectedRow.cells[1].innerHTML;
    document.getElementById('gender2').value = selectedRow.cells[2].innerHTML;
    
}

//Get the updated data from the update input form
function getInputData2(){
    var myInput2 = {},
        toggle;
    if (checkBox2.checked){
        toggle = 'Yes';
    }else{
        toggle = 'No'
    }
    myInput2['firstname'] = document.getElementById('firstName2').value;
    myInput2['lastname'] = document.getElementById('lastName2').value;
    myInput2['email'] = document.getElementById('email2').value;
    myInput2['gender'] = document.getElementById('gender2').value;
    myInput2['toggle'] = toggle;
    return myInput2;      
}

//Update the selected row and reset the input form
function updateRow(e){
    e.preventDefault();
    if (selectedRow == null){
        alert('Please select row to edit');
        return
    }else{
        var data2 = getInputData2();
        selectedRow.cells[0].innerHTML = data2['firstname'] +' '+ data2['lastname'];
        selectedRow.cells[1].innerHTML = data2['email'];
        selectedRow.cells[2].innerHTML = data2['gender'];
        selectedRow.cells[3].innerHTML = data2['toggle'];
        resetForm2();
        selectedRow = null; 
    }
}

//Delete selected row
function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById('dataTable2').deleteRow(row.rowIndex);
    resetForm2();
}
form[0].querySelector('#submit').addEventListener('click', addNewRow);
update.addEventListener('click', updateRow);