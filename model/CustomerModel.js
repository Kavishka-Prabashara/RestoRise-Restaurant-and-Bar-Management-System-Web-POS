export default class CustomerModel {
    constructor(customerID, customerName, customerNIC, customerContactNo) {
        this._customerID = customerId;
        this._customerName = customerName ;
        this._customerNIC = customerNIC ;
        this._customerContactNo = customerContactNo ;
    }

    get customerID  (){
        return this._customerId;
    }
    get customerName() {
        return this._customerName ;
    }
    get customerNIC () {
        return this._customerNIC ;
    }
    get customerContactNo () {
        return this._customerContactNo ;
    }
    set customerID (customerID) {
        this._customerId = customerID ;
    }
    set customerName (customerName) {
        this._customerName = customerName ;
    }
    set customerNIC (customerNIC) {
        this._customerNIC = customerNIC ;
    }
    set customerContactNo (customerContactNo) {
        this._customerContactNo = customerContactNo;
    }
}
