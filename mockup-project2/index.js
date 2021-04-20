var checkBox = document.getElementById('checkBox');
var form = document.getElementById('form1');
var selectedRow = null;


//Adding the new row and setting the input boxes to empty
function addNewRow(e){
    const myInput = getInputData();
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
        toggle = 'No';
    }
    myInput['firstname'] = document.getElementById('firstName1').value;
    myInput['lastname'] = document.getElementById('lastName1').value;
    myInput['email'] = document.getElementById('email1').value;
    myInput['gender'] = document.getElementById('gender').value;
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
    cell4.innerHTML = `<a href="#">${data.toggle}</a>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<input type="button" value="Edit" onclick="onEdit(this)" 
    style="border-radius:5px;font-size:10px;cursor:pointer" >`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<input type="button" value="Delete" onclick="onDelete(this)" 
    style="border-radius:5px;font-size:10px;cursor:pointer">`;
}


//Resetting tthe input boxes after submission 
function resetForm(e){
    checkBox.checked = false;
    document.getElementById('firstName1').value = '';
    document.getElementById('lastName1').value = '';
    document.getElementById('email1').value = '';
    
}


//Fill the update form with the selected row data 
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('submit').setAttribute('onclick', 'updateRow()');
    document.getElementById('submit').innerHTML = 'Update';
    document.getElementById('firstName1').setAttribute('placeholder', 'New_First_name');
    document.getElementById('lastName1').setAttribute('placeholder', 'New_Last_name');
    document.getElementById('email1').setAttribute('placeholder', 'new@email.com');
    document.getElementById('wrapper').setAttribute
    ('style', 'background:repeating-linear-gradient(white 3px, lightgray 5px)');
    document.getElementById('tb').setAttribute('style', 'background-color: white');
    document.getElementById('inpCont').setAttribute('style', 'background-color: white');
    
}

//Delete selected row
function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById('dataTable1').deleteRow(row.rowIndex);
}

//Update the selected row and reset the input form
function updateRow(e){
  const myInput = getInputData();
  if (myInput['firstname'] === ''){
      return
  }else if (myInput['lastname'] === ''){  
      return
  }else if (myInput['email'] === ''){
      return
  }else if (myInput['gender'] === ''){
      return
  }else{
        var data2 = getInputData();
        selectedRow.cells[0].innerHTML = data2['firstname'] +' '+ data2['lastname'];
        selectedRow.cells[1].innerHTML = data2['email'];
        selectedRow.cells[2].innerHTML = data2['gender'];
        selectedRow.cells[3].innerHTML = `<a href="#">${data2['toggle']}</a>`;
        resetForm();
        selectedRow = null;
        document.getElementById('submit').setAttribute('onclick', 'addNewRow()');
        document.getElementById('submit').innerHTML = 'Submit';
        document.getElementById('firstName1').removeAttribute('placeholder');
        document.getElementById('lastName1').removeAttribute('placeholder');
        document.getElementById('email1').removeAttribute('placeholder');
        document.getElementById('wrapper').removeAttribute('style');
    }
}
