export function findLength(arr) {
    return arr.length;
}

export function findThirdItem(arr) {
    return arr.length >= 3 ? arr[2] : 'empty';
}

export function firstKeyLastValue(obj) {
    return {
        firstKey: Object.keys(obj)[0],
        lastValue: obj[Object.keys(obj)[Object.keys(obj).length - 1]]
    };
}

export function inventoryChecker(inventory, item) {
    let { itemName } = item;
    return inventory[itemName] > 5 ? 'plenty of inventory' : `running low on ${itemName}`;
}