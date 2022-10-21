
var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}
function readFormData() {
    var formData = {};
    formData["SrNo"] = document.getElementById("SrNo").value;
    formData["product"] = document.getElementById("product").value;
    formData["productsize"] = document.getElementById("productsize").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.SrNo;

    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.product;

    cell3 = newRow.insertCell(2);
          cell3.innerHTML = data.productsize;

            
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.qty;

    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.perPrice;

    cell6 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("SrNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("productsize").value = selectedRow.cells[2].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[3].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.SrNo;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.productsize;
    selectedRow.cells[3].innerHTML = formData.qty;
    selectedRow.cells[4].innerHTML = formData.perPrice;
}


function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("SrNo").value = '';
    document.getElementById("product").value = '';
    document.getElementById("productsize").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}

