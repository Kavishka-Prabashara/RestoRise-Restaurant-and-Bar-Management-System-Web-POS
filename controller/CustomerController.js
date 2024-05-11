import CustomerModel from "../model/CustomerModel.js";
import { customers } from "../db/db.js";

$("#customer-submit").on('click', () => {
    var customerId = $('#customerId').val();
    var customerName = $('#customerName').val();
    var customerNIC = $('#customerNIC').val();
    var customerControlNo = $('#customerControlNo').val();

    let customer = new CustomerModel(customerId , customerName , customerNIC , customerControlNo);

    customers.push(customer);

    loadTable();

});
    function loadTable() {

        var tbody = $('#customer-table tbody');

        tbody.empty();

        customers.forEach(customer => {
            var row = `<tr>
                        <td>${customer.customerID}</td>
                        <td>${customer.customerName}</td>
                        <td>${customer.customerNIC}</td>
                        <td>${customer.customerControlNo}</td>                 
                    </tr>`;
            tbody.append(row);
        });
    }