function fibs (number) {
  let fibArray = [0, 1];
  let num;
  for (i = 2; i < number; i++) {
    num = fibArray[i - 2] + fibArray[i - 1];
    fibArray.push(num);
  }
  return fibArray;
}

let fibonacci = fibs(8);
console.log(fibonacci);

let array = [];
function fibonacciRecursive (n) {
  let num;
  fibsRec(n, num);
  array.pop()
  console.log(array);
}

function fibsRec (n) {
  if (n < 2) {
    array[n] = n;
    return n;
  } else {
    num = fibsRec(n -1) + fibsRec(n - 2);
    array[n] = num;
    return num;
  }
}

fibonacciRecursive(8);
