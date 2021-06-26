function findMinAndRemoveSorted(array) {
    const min = array[0];
    array.splice(0, 1);
    return min;
}

function merge(a1, a2) {
    let sorted = [];
    while (a1.length && a2.length) {
        a1[0] < a2[0] ? sorted.push(findMinAndRemoveSorted(a1)) : sorted.push(findMinAndRemoveSorted(a2));
    }
    a1.length ? sorted.push(...a1) : sorted.push(...a2);
    return sorted;
}

function mergeSort(array) {
    if (array.length < 2) return array;

    const left = array.slice(0, Math.floor(array.length / 2));
    const right = array.slice(Math.floor(array.length / 2));

    return merge(mergeSort(left), mergeSort(right));

}
