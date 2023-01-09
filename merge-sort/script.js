function merge (arrayA, arrayB) {
  let m = 0, n = 0, k = 0;
  let arrayC = [];
  while (m < arrayA.length && n < arrayB.length) {
    if (arrayA[m] < arrayB[n]) {
      arrayC[k] = arrayA[m];
      m++, k++;
    } else {
      arrayC[k] = arrayB[n];
      n++, k++;
    }
  }
  if (arrayA.length > m) {
    for (; m < arrayA.length; m++) {
      arrayC[k] = arrayA[m];
      k++;
    }
  }
  if (arrayB.length > n) {
    for (; n < arrayB.length; n++) {
      arrayC[k] = arrayB[n];
      k++;
    }
  }
  return arrayC;
}

function mergeSort (array) {
  if (array.length < 2) return array;
  else {
    let mid = array.length / 2;
    let arrayOne = mergeSort(array.slice(0, mid));
    let arrayTwo = mergeSort(array.slice(mid));
    return merge(arrayOne, arrayTwo);
  }
}

function merger (unsortedArray) {
  let sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray);
}

merger([10, 8, 95, 3, 1, -25, -100]);