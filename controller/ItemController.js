import ItemModel from "../model/ItemModel.js";
import { items } from "../db/db.js";

var recordIndex;

$("#item-submit").on('click', () => {
    var supplierId = $('#supplierId').val();
    var supplierName = $('#supplierName').val();
    var dropdownItemCategory = $('#dropdownItemCategory').text();
    var itemId = $('#itemId').val();
    var itemName = $('#itemName').val();
    var itemQTY = $('#itemQTY').val();
    var itemUnitPrice = $('#itemUnitPrice').val();
    var suppliedDate = $('#suppliedDate').val();


    // Regex patterns
    var supplierIdPattern = /^SP\d{3}$/; // Pattern to match 'S' followed by 3 digits
    var itemIdPattern = /^I\d{3}$/; // Pattern to match 'S' followed by 3 digits

    if (supplierId === "" || supplierName === "" || dropdownItemCategory === "" || itemId === "" || itemName === "" || itemQTY === "" || itemUnitPrice === "" || suppliedDate === "") {
        alert("All fields are required!");
        return;
    }
    if (!supplierIdPattern.test(supplierId)) {
        alert("Supplier ID must follow the format 'S001'!");
        return;
    }
    if (!itemIdPattern.test(itemId)) {
        alert("Item ID must follow the format 'I001'!");
        return;
    }

    let item = new ItemModel(
        supplierId, supplierName, dropdownItemCategory, itemId, itemName, itemQTY , itemUnitPrice , suppliedDate
    );

    items.push(item);

    loadTable();
    $("#item-reset").click();
    alert("Items has been successfully saved!");
});

function loadTable() {
    $("#item-tbl-tbody").empty();
    items.map((staff, index) => {
        console.log(item);
        let record = `<tr>
            <td class="item-supplierId-value">${item.supplierId}</td>
            <td class="item-supplierName-value">${item.supplierName}</td>
            <td class="item-dropdownItemCategory-value">${item.dropdownItemCategory}</td>
            <td class="item-itemId-value">${item.itemId}</td>
            <td class="item-itemName-value">${item.itemName}</td>
            <td class="item-itemQTY-value">${item.itemQTY}</td>
            <td class="item-itemUnitPrice-value">${item.itemUnitPrice}</td>
            <td class="item-suppliedDate-value">${item.suppliedDate}</td>
        </tr>`;
        $("#item-tbl-tbody").append(record);
    });

    const dropdownButton = document.getElementById('dropdownItemCategory');
// Get all dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');

// Loop through each dropdown item
    dropdownItems.forEach(item => {
        // Add click event listener
        item.addEventListener('click', function() {
            // Set the button text to the clicked item's text
            dropdownButton.textContent = this.textContent;
        });
    });
}
$("#item-update").on('click', () => {
    var supplierId = $('#supplierId').val();
    var supplierName = $('#supplierName').val();
    var dropdownItemCategory = $('#dropdownItemCategory').text();
    var itemId = $('#itemId').val();
    var itemName = $('#itemName').val();
    var itemQTY = $('#itemQTY').val();
    var itemUnitPrice = $('#itemUnitPrice').val();
    var suppliedDate = $('#suppliedDate').val();

    var supplierIdPattern = /^SP\d{3}$/; // Pattern to match 'S' followed by 3 digits
    var itemIdPattern = /^I\d{3}$/; // Pattern to match 'S' followed by 3 digits
    var itemQTYPattern = /^\d+$/; // Pattern to match 'S' followed by 3 digits

    if (supplierId === "" || supplierName === "" || dropdownItemCategory === "" || itemId === "" || itemName === "" || itemQTY === "" || itemUnitPrice === "" || suppliedDate === "") {
        alert("All fields are required!");
        return;
    }
    if (!supplierIdPattern.test(supplierId)) {
        alert("Supplier ID must follow the format 'S001'!");
        return;
    }
    if (!itemIdPattern.test(itemId)) {
        alert("Item ID must follow the format 'I001'!");
        return;
    }
    if (!itemQTYPattern.test(itemQTY)) {
        alert("Enter valid Inputs!");
        return;
    }

    let itemObj = items[recordIndex];

    itemObj.supplierId = supplierId;
    itemObj.supplierName = supplierName;
    itemObj.dropdownItemCategory = dropdownItemCategory;
    itemObj.itemId = itemId;
    itemObj.itemName = itemName;
    itemObj.itemQTY = itemQTY;
    itemObj.itemUnitPrice = itemUnitPrice;
    itemObj.suppliedDate = suppliedDate;

    loadTable();
    $("#item-reset").click();
    alert("Items record has been successfully updated!");
});

$("#item-delete").on('click', () => {
    if (recordIndex !== undefined) {
        items.splice(recordIndex, 1);
        loadTable();
        $("#item-reset").click();
        alert("Items record has been successfully deleted!");
    } else {
        alert("Please select a record to delete.");
    }
});

$("#item-reset").on('click', () => {
    $('#item-form')[0].reset();
    recordIndex = undefined;
});

$("#item-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let ItemSupID = $(this).find(".item-ItemSupID-value").text();
    let ItemSupName = $(this).find(".item-ItemSupName-value").text();
    let ItemDropdownItemCategory = $(this).find(".item-ItemDropdownItemCategory-value").text();
    let ItemId = $(this).find(".item-ItemId-value").text();
    let ItemName = $(this).find(".item-ItemName-value").text();
    let ItemQTY = $(this).find(".item-ItemQTY-value").text();
    let ItemUnitPrice = $(this).find(".item-ItemUnitPrice-value").text();
    let ItemSuppliedDate = $(this).find(".item-ItemSuppliedDate-value").text();

    $("#supplierId").val(ItemSupID);
    $("#supplierName").val(ItemSupName);
    $("#dropdownItemCategory").val(ItemDropdownItemCategory);
    $("#itemId").val(ItemId);
    $("#itemName").val(ItemName);
    $("#itemQTY").val(ItemQTY);
    $("#itemUnitPrice").val(ItemUnitPrice);
    $("#suppliedDate").val(ItemSuppliedDate);
});

$(document).ready(() => {
    loadTable();
});
