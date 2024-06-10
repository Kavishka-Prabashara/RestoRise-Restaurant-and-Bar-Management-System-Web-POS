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
