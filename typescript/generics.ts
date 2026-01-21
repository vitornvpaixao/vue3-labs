// Generic types

class StorageContainer<T> {
	private contents: T[];

	constructor() {
		this.contents = [];
	}

	addItems(item: T): void {
		this.contents.push(item);
	}

	getItem(itemIdx: number): T | undefined {
		return this.contents[itemIdx];
	}
}

const userNames = new StorageContainer<string>();

userNames.addItems('VP');
userNames.addItems('NV');

console.log(userNames.getItem(0));

const userIds = new StorageContainer<number>();

userIds.addItems(7);
userIds.addItems(10);

console.log(userIds.getItem(1));
