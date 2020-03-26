function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function quicksort(array, left, right) {
    if (left >= right) {
        return ; 
    }
    // Dividing point between left and right
    let pivot = array[(Math.floor((left + right) / 2))];
    
    partition(array, left, right, pivot);
    quicksort(array, left, pivot - 1);
    quicksort(array, pivot, right);
}

function partition(array, left, right, pivot) {
    let l = left; 
    let r = right;
    while(l <= r) {
        // Move element until you find element bigger than pivot
        while (array[l] < pivot) {
            l++;
        }

        while (array[r] > pivot) {
            r--;
        }

        if (l<= r) {
            swap(array, l, r);
            l++;
            r--;
        }
    }
    return l; 
}

const arr = [9, 2, 6, 4, 3, 5, 1];
quicksort(arr, 0, arr.length-1);
console.log(arr);