import StaffModel from "../model/StaffModel.js";
import { staffs } from "../db/db.js";

var recordIndex;

$("#staff-submit").on('click', () => {
    var staffId = $('#staffId').val();
    var staffName = $('#staffName').val();
    var staffNIC = $('#staffNIC').val();
    var staffDob = $('#staffDob').val();
    var jobCategory = $('#jobCategory').text();
    var staffContactNo = $('#staffContactNo').val();

    let staff = new StaffModel(
        staffId , staffName , staffNIC , staffDob , jobCategory , staffContactNo
    );

    staffs.push(staff);

    loadTable();

});



function loadTable() {

    var tbody = $('#staff-table tbody');

    tbody.empty();

    staffs.forEach(staff => {
        var row = `<tr>
                        <td>${staff.staffID}</td>
                        <td>${staff.staffName}</td>
                        <td>${staff.staffNIC}</td>
                        <td>${staff.staffDob}</td>
                        <td>${staff.jobCategory}</td>
                        <td>${staff.staffContactNo}</td>
                    </tr>`;
        tbody.append(row);
    });
}
