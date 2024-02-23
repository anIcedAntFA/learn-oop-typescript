let originalArray: number[] = [1, 2, 3, 4, 5, 6];

//* Access - O(1)
let secondElement = originalArray[1];
console.log('Second Element:', secondElement);

//* Search - O(n)
let searchElement = 3;
let searchIndex = originalArray.indexOf(searchElement);
console.log(`Search Index of ${searchElement}:`, searchIndex);

//* Insert - O(n)
let insertElement = 3.5;
//todo remove 0 elements from index 3, and then insert 3.5
originalArray.splice(3, 0, insertElement);
console.log(`Array after insertion: ${originalArray}`);

//* Insert at the end - O(1)
let insertAtEndElement = 7;
originalArray.push(insertAtEndElement);
console.log(`Array after insertion at the end: ${originalArray}`);

//* Remove - O(n)
let removeElement = 3.5;
originalArray.splice(originalArray.indexOf(removeElement), 1);
console.log(`Array after removing ${removeElement}: ${originalArray}`);

//* Remove from the end - O(1)
originalArray.pop();
console.log(`Array after removing from the end: ${originalArray}`);
