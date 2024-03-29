let arr = [10,3,2,30,4,50,16,78,8,9,10]

let bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort(arr))

// function swap(arr, a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// const Compare = {
//     LESS_THAN: -1,
//     BIGGER_THAN: 1
// };

// function defaultCompare(a, b) {
//     if (a === b) {
//         return 0;
//     }
//     return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }

// function bubbleSort(arr, compare = defaultCompare) {
//     const { length } = arr;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - 1 - i; j++) { // refer to note below
//             if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(arr, defaultCompare));