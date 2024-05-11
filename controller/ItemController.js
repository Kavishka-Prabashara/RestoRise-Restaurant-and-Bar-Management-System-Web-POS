import ItemModel from "../model/ItemModel.js";
import { items } from "../db/db.js";

var recordIndex;

$("#item-submit").on('click', () => {
    var supplierId = $('#supplierId').val();
    var supplierName = $('#supplierName').val();
    var suppliedItemCategory = $('#dropdownItemCategory').val();
    var itemId = $('#itemId').val();
    var itemName = $('#itemName').val();
    var itemQTY = $('#itemQTY').val();
    var unitPrice = $('#itemUnitPrice').val();
    var suppliedDate = $('#suppliedDate').val();

    let item = new ItemModel(
        supplierId, supplierName, suppliedItemCategory, itemId, itemName, itemQTY, unitPrice, suppliedDate
    );

    items.push(item);

    loadTable();

});

function loadTable() {

    var tbody = $('#items-table tbody');

    tbody.empty();

    items.forEach(item => {
        var row = `<tr>
                        <td>${item.supplierId}</td>
                        <td>${item.supplierName}</td>
                        <td>${item.itemCategory}</td>
                        <td>${item.itemId}</td>
                        <td>${item.itemName}</td>
                        <td>${item.itemQTY}</td>
                        <td>${item.itemUnitPrice}</td>
                        <td>${item.suppliedDate}</td>
                    </tr>`;
        tbody.append(row);
    });
}
