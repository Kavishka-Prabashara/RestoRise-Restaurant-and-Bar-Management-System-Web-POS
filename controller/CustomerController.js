import CustomerModel from "../model/CustomerModel.js";
import { customers } from "../db/db.js";

var recordIndex;

$("#customer-submit").on('click', () => {
    var customerId = $('#customerId').val();
    var customerName = $('#customerName').val();
    var customerNIC = $('#customerNIC').val();
    var customerContactNo = $('#customerContactNo').val();

    let customer = new CustomerModel(customerId , customerName , customerNIC , customerContactNo);

    customers.push(customer);

    loadTable();
    alert("customer is saved")

});
    function loadTable() {

        var tbody = $('#customer-table tbody');

        tbody.empty();

        customers.forEach(customer => {
            var row = `<tr>
                        <td>${customer.customerID}</td>
                        <td>${customer.customerName}</td>
                        <td>${customer.customerNIC}</td>
                        <td>${customer.customerContactNo}</td>                 
                    </tr>`;
            tbody.append(row);
        });
    }
$("#customer-update").on('click', () => {
    var customerId = $('#customerId').val();
    var customerName = $('#customerName').val();
    var customerNIC = $('#customerNIC').val();
    var customerContactNo = $('#customerContactNo').val();


    let customerObj = customers[recordIndex];
    // let studentObj = {...students[recordIndex]}; // clone object
    customerObj.id = customerId;
    customerObj.cusName = customerName;
    customerObj.cusNIC = customerNIC;
    customerObj.cusContactNo = customerContactNo;



    loadTable();
    $("#customer-reset").click();
});

$("#customer-delete").on('click', () => {
    customers.splice(recordIndex, 1);
    loadTable();
    $("#customer-reset").click();
});

$("#customer-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let id = $(this).find(".customer-id-value").text();
    let cusName = $(this).find(".customer-cusName-value").text();
    let cusNIC = $(this).find(".customer-cusNIC-value").text();
    let cusContactNo = $(this).find(".customer-cusContactNo-value").text();



    $("#customerId").val(id);
    $("#customerName").val(cusName);
    $("#customerNIC").val(cusNIC);
    $("#customerContactNo").val(cusContactNo);

})
