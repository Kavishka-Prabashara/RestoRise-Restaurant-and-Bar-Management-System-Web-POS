import ItemModel from "../model/ItemModel.js";
import { items } from "../db/db.js";

var recordIndex;

// Event listener for setting dropdown item text
$(document).on('click', '.dropdown-item', function() {
    $('#dropdownItemCategory').text($(this).text());
});

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
    var supplierIdPattern = /^SP\d{3}$/; // Pattern to match 'SP' followed by 3 digits
    var itemIdPattern = /^I\d{3}$/; // Pattern to match 'I' followed by 3 digits

    if (supplierId === "" || supplierName === "" || dropdownItemCategory === "Item Category" || itemId === "" || itemName === "" || itemQTY === "" || itemUnitPrice === "" || suppliedDate === "") {
        alert("All fields are required!");
        return;
    }
    if (!supplierIdPattern.test(supplierId)) {
        alert("Supplier ID must follow the format 'SP001'!");
        return;
    }
    if (!itemIdPattern.test(itemId)) {
        alert("Item ID must follow the format 'I001'!");
        return;
    }

    let item = new ItemModel(
        supplierId, supplierName, dropdownItemCategory, itemId, itemName, itemQTY, itemUnitPrice, suppliedDate
    );

    items.push(item);

    loadTable();
    $("#item-reset").click();
    alert("Item has been successfully saved!");
});

function loadTable() {
    $("#item-tbl-tbody").empty();
    items.map((item, index) => {
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

    var supplierIdPattern = /^SP\d{3}$/; // Pattern to match 'SP' followed by 3 digits
    var itemIdPattern = /^I\d{3}$/; // Pattern to match 'I' followed by 3 digits
    var itemQTYPattern = /^\d+$/; // Pattern to match only digits

    if (supplierId === "" || supplierName === "" || dropdownItemCategory === "Item Category" || itemId === "" || itemName === "" || itemQTY === "" || itemUnitPrice === "" || suppliedDate === "") {
        alert("All fields are required!");
        return;
    }
    if (!supplierIdPattern.test(supplierId)) {
        alert("Supplier ID must follow the format 'SP001'!");
        return;
    }
    if (!itemIdPattern.test(itemId)) {
        alert("Item ID must follow the format 'I001'!");
        return;
    }
    if (!itemQTYPattern.test(itemQTY)) {
        alert("Enter valid QTY!");
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
    alert("Item record has been successfully updated!");
});

$("#item-delete").on('click', () => {
    if (recordIndex !== undefined) {
        items.splice(recordIndex, 1);
        loadTable();
        $("#item-reset").click();
        alert("Item record has been successfully deleted!");
    } else {
        alert("Please select a record to delete.");
    }
});

$("#item-reset").on('click', () => {
    $('#item-form')[0].reset();
    $('#dropdownItemCategory').text('Item Category');
    recordIndex = undefined;
});

$("#item-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let supplierId = $(this).find(".item-supplierId-value").text();
    let supplierName = $(this).find(".item-supplierName-value").text();
    let dropdownItemCategory = $(this).find(".item-dropdownItemCategory-value").text();
    let itemId = $(this).find(".item-itemId-value").text();
    let itemName = $(this).find(".item-itemName-value").text();
    let itemQTY = $(this).find(".item-itemQTY-value").text();
    let itemUnitPrice = $(this).find(".item-itemUnitPrice-value").text();
    let suppliedDate = $(this).find(".item-suppliedDate-value").text();

    $("#supplierId").val(supplierId);
    $("#supplierName").val(supplierName);
    $("#dropdownItemCategory").text(dropdownItemCategory);
    $("#itemId").val(itemId);
    $("#itemName").val(itemName);
    $("#itemQTY").val(itemQTY);
    $("#itemUnitPrice").val(itemUnitPrice);
    $("#suppliedDate").val(suppliedDate);
});

$(document).ready(() => {
    loadTable();
});
