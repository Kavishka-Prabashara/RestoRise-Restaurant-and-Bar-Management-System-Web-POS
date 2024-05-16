export default class StaffModel {
    constructor(staffID , staffName , staffNIC , staffDob , staffContactNo) {
        this._staffID = staffID ;
        this._staffName = staffName ;
        this._staffNIC = staffNIC ;
        this._staffDob = staffDob ;
        this._staffContactNo = staffContactNo ;
    }

    get staffID() {
        return this._staffID ;
    }
    get staffName () {
        return this._staffName ;
    }
    get staffNIC () {
        return this._staffNIC ;
    }
    get staffDob () {
        return this._staffDob ;
    }
    get staffContactNo () {
        return this._staffContactNo ;
    }
}