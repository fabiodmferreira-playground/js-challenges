function arrSum(arr) {
  return arr.reduce((final, el) => {
    return final + el;
  }, 0)
}

const recursive = (left, prev, arr, cursor) => {
  if (left.length === arr.length - 1) {
    return 0
  }

  // let results = [];
  let results = 0;

  for (let j = cursor + 1; j < arr.length; j++) {
    let newLeft = [...left, arr[j]];
    let newRight = [...prev, ...arr.slice(cursor + 1, j).concat(arr.slice(j + 1))];

    if(arrSum(newLeft) > arrSum(newRight)){
      results++;
    }
    // results.push([newLeft, newRight]);

    // results = results.concat(recursive(newLeft, arr.slice(0, cursor).concat(arr.slice(cursor + 1, j)), arr, j)).filter(v => v);
    results += recursive(newLeft, arr.slice(0, cursor).concat(arr.slice(cursor + 1, j)), arr, j);
  }

  return results;
}



module.exports = function (arr) {
  if (!arr) {
    return 0;
  }

  let results = 0;

  for (let i = 0; i < arr.length; i++) {
    const left = [arr[i]];
    const right = arr.slice(0, i).concat(arr.slice(i + 1))

    if (arrSum(left) > arrSum(right)) {
      results++;
    }

    // results.push([left, right]);
    // results = results.concat(recursive(left, arr.slice(0, i), arr, i));

    results += recursive(left, arr.slice(0, i), arr, i);
  }

  return results;
}
