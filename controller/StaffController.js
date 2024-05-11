import StaffModel from "../model/StaffModel.js";
import { staffs } from "../db/db.js";

var recordIndex;

$("#staff-submit").on('click', () => {
    var staffId = $('#staffId').val();
    var staffName = $('#staffName').val();
    var staffNIC = $('#staffNIC').val();
    var staffDob = $('#staffDob').val();
    var staffContactNo = $('#staffContactNo').val();

    let staff = new StaffModel(
        staffId , staffName , staffNIC , staffDob , staffContactNo
    );

    staffs.push(staff);

    loadTable();

});

function loadTable() {

    var tbody = $('#staff-table tbody');

    tbody.empty();

    staffs.forEach(staff => {
        var row = `<tr>
                        <td>${item.staffID}</td>
                        <td>${item.staffName}</td>
                        <td>${item.staffNIC}</td>
                        <td>${item.staffDob}</td>
                        <td>${item.staffContactNo}</td>
                    </tr>`;
        tbody.append(row);
    });
}
