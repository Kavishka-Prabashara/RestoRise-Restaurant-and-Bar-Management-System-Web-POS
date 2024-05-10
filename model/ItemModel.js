export default class ItemModel {

/*---------------------------------<Constructor>---------------------------------*/
    constructor(supplierID, supplierName , suppliedItemCategory , itemID , itemName , suppliedQTY , itemUnitPrice , suppliedDate) {
        this.supplierID = supplierID ;
        this.supplierName = supplierName ;
        this.suppliedItemCategory = suppliedItemCategory ;
        this.itemID = itemID ;
        this.itemName = itemName ;
        this.suppliedQTY = suppliedQTY ;
        this.itemUnitPrice = itemUnitPrice ;
        this.suppliedDate = suppliedDate ;
    }
/*---------------------------------</Constructor>---------------------------------*/

/*---------------------------------<Getters>---------------------------------*/
    get itemSupplierID() {
        return this.supplierID;
    }
    get itemSupplierName() {
        return this.supplierName;
    }
    get itemSuppliedItemCategory() {
        return this.suppliedItemCategory;
    }
    get itemIemID() {
        return this.itemID;
    }
    get itemItemName() {
        return this.itemName;
    }
    get itemSuppliedQTY() {
        return this.suppliedQTY;
    }
    get itemItemUnitPrice() {
        return this.itemUnitPrice;
    }
    get itemSuppliedDate() {
        return this.suppliedDate;
    }

/*---------------------------------</Getters>---------------------------------*/

/*---------------------------------<Setters>---------------------------------*/

    set itemSupplierID(address) {
        this._address=address;
    }
    set itemSupplierName(program) {
        this._program=program;
    }
    set itemSuppliedItemCategory(program) {
        this._program=program;
    }
    set itemItemID(program) {
        this._program=program;
    }
    set itemItemName(program) {
        this._program=program;
    }
    set itemSuppliedQTY(program) {
        this._program=program;
    }
    set itemItemUnitPrice(program) {
        this._program=program;
    }
    set itemSuppliedDate(program) {
        this._program=program;
    }
/*---------------------------------</Setters>---------------------------------*/
}
