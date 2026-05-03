let question = [-2, 0, 1, 1, 2, -1, -4];



function threeSumZeroWithTwoPointer(arr: Array<number>) {
    //sort an array
    arr = arr.sort((a, b) => a - b)
    let i = 0;
    let result: Array<Array<number>> = []
    let a, left, right;
    while (i < arr.length - 2) {
        if (i > 0 && arr[i - 1] === arr[i]) {
            i++;
        }
        else {
            a = (arr[i]) * -1;
            left = i + 1;
            right = arr.length - 1;
            while (left < right) {
                let sum = arr[left] + arr[right];
                if (sum === a) {
                    result.push([a * -1, arr[left], arr[right]])
                    left++;
                    right++;


                    //increament the pointer if it contains any duplicatess
                    for (let i = left; i < arr.length; i++) {
                        if (arr[i - 1] === arr[i]) left++;
                        else break;
                    }

                    //decrement second pointer if it contains any duplicates
                    for (let j = right; j >= 0; j--) {
                        if (arr[j + 1] === arr[j]) right--;
                        else break;
                    }
                }
                else if (sum < a) left++;
                else right--;
            }
            i++
        }
    }

    return result;
}

console.log(threeSumZeroWithTwoPointer(question))
