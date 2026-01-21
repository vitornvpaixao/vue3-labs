"use strict";
// Generic types
class StorageContainer {
    contents;
    constructor() {
        this.contents = [];
    }
    addItems(item) {
        this.contents.push(item);
    }
    getItem(itemIdx) {
        return this.contents[itemIdx];
    }
}
const userNames = new StorageContainer();
userNames.addItems('VP');
userNames.addItems('NV');
console.log(userNames.getItem(0));
const userIds = new StorageContainer();
userIds.addItems(7);
userIds.addItems(10);
console.log(userIds.getItem(1));
