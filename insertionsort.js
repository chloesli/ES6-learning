function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    return arr;
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]; // What you are trying to swap
        let j = i - 1;
        // While sorted elements are bigger than the current
        while (j >= 0 && arr[j] > curr) {
            console.table({"curr": curr, "j":j,"arr[j]": arr[j], "arr": arr})
            // set the current element to the sorted element that is bigger
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }   
}

const arr = [9, 2, 6, 4, 3, 5, 1];
console.log(arr);
insertionSort(arr);
console.log(arr);