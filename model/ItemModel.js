export default class ItemModel {
    constructor(supplierId, supplierName, itemCategory, itemId, itemName, itemQTY, itemUnitPrice, suppliedDate) {
        this._supplierId = supplierId;
        this._supplierName = supplierName;
        this._itemCategory = itemCategory;
        this._itemId = itemId;
        this._itemName = itemName;
        this._itemQTY = itemQTY;
        this._itemUnitPrice = itemUnitPrice;
        this._suppliedDate = suppliedDate;
    }

    get supplierId() {
        return this._supplierId;
    }
    get supplierName() {
        return this._supplierName;
    }
    get itemCategory() {
        return this._itemCategory;
    }
    get itemId() {
        return this._itemId;
    }
    get itemName() {
        return this._itemName;
    }
    get itemQTY() {
        return this._itemQTY;
    }
    get itemUnitPrice() {
        return this._itemUnitPrice;
    }
    get suppliedDate() {
        return this._suppliedDate;
    }
    set supplierId(supplierId) {
        this._supplierId = supplierId;
    }
    set supplierName(supplierName) {
        this._supplierName = supplierName;
    }
    set itemCategory(itemCategory) {
        this._itemCategory = itemCategory;
    }
    set itemId(itemId) {
        this._itemId = itemId;
    }
    set itemName(itemName) {
        this._itemName = itemName;
    }
    set itemQTY(itemQTY) {
        this._itemQTY = itemQTY;
    }
    set itemUnitPrice(itemUnitPrice) {
        this._itemUnitPrice = itemUnitPrice;
    }
    set suppliedDate(suppliedDate) {
        this._suppliedDate = suppliedDate;
    }
}
