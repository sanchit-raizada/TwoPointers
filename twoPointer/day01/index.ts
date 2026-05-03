/**
 *underStanding Two Pointer indepth (GOD LEVEL)
 */
class TwoPointer {

    private validateNumber(array: any, target: any) {
        if (!Array.isArray(array) || typeof target !== "number" || Number.isNaN(target)) return false;
        else return true;
    }
    //brute : time complexcity  BigO(n**2)
    twoSum(arr: Array<number>, target: number) {
        if (!this.validateNumber(arr, target)) {
            throw Error("Please Provide correct input")
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if ((arr[i] + arr[j]) === target) return [arr[i], arr[j]];
            }
        }
        return null;
    }

    //optimised: HashMap BigO(n) because hasmap finds an element with BigO(1)
    twoSumHashMap(arr: Array<number>, target: number) {
        if (!this.validateNumber(arr, target)) {
            throw Error("Please Provide correct input")
        }
        let map = new Map<number, number>();
        for (let i = 0; i < arr.length; i++) {
            let compliment = target - arr[i];
            if (map.has(compliment)) return [compliment, arr[i]];
            map.set(arr[i], i)

        }
        return -1;
    }

    //best Solution with TwoPointers  Time complexcity
    twoSumWithTwoPointer(arr: Array<number>, target: number) {
        if (!this.validateNumber(arr, target)) {
            throw new Error("Please Provide correct input");
        }
        //we will first sort an array because it works only on sorted Array BigO(nlogn)
        let sortedArray = arr.sort((a, b) => a - b);
        let i = 0; let j = sortedArray.length - 1;
        while (i < j) {
            let sum = sortedArray[i] + sortedArray[j];
            if (sum === target) return [sortedArray[i], sortedArray[j]];
            else if (sum < target) i++
            else j--
        }
        return -1;
    }

    //brute approch
    palindrome(str: string) {
        let newString: string = ""
        let reverseString: string = ""
        //remove Special Symbols from the string ;
        for (let s of str) {
            let code: number = s.charCodeAt(0);
            if ((code >= 60 && code <= 90) || (code >= 97 && code <= 122)) {
                newString += s.toLowerCase();
            }
        }
        for (let i = newString.length - 1; i >= 0; i--) {
            reverseString += newString[i];
        }
        if (newString === reverseString) return true;
        else return false;
    }
    //better version of this program iski complexcity BigO(n/2) par bigO me hum constants ko ignore karte hai isi liye BigO(n)
    palindromeTwoPointer(str: string) {
        let i = 0;
        let j = str.length - 1;

        const isAlpa = (ch: string) => /[a-z0-9]/i.test(ch)
        while (i < j) {
            if (!isAlpa(str[i])) {
                i++
                continue;
            }
            if (!isAlpa(str[j])) {
                j++
                continue;
            }
            if (str[i].toLowerCase() !== str[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    //Brute force time Complexcity BigO(n) or space complexcity BigO(1)
    reverseSting(str: string) {
        let reverseString = ""
        for (let i = str.length - 1; i >= 0; i--) {
            reverseString += str[i]
        }
        return reverseString;
    }
    //reverseTwoPointer Sting iski time complexcity BigO(n/2) space Complexcity n size ka array ban raha hai BIGO(n),BigO(n)
    //yeh question c++ k liye hai q ki wo inPlace string ko change kar sakti hai par JS me immutebale hoti hai
    reverseStringTwoPointer(str: string) {
        let i = 0;
        let j = str.length - 1;
        let stringArray = str.split("")
        while (i < j) {
            [stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]]
            i++;
            j--
        }
        return stringArray.join("")
    }
    //optimal Approach
    /**
     *Time Complexcity : BigO(n)
     */
    mergeTwoSortedArrayByToPoiner(arr1: Array<number>, arr2: Array<number>) {
        // we will sort these two array with BigO(nlogN) time complexcity
        let sortedArrayOne = arr1.sort((a, b) => a - b);
        let sortedArrayTwo = arr2.sort((a, b) => a - b);
        let result = [];
        //two Pointers
        let i = 0, j = 0;
        while (i < sortedArrayOne.length && j < sortedArrayTwo.length) {
            if (sortedArrayOne[i] < sortedArrayTwo[j]) {
                result.push(sortedArrayOne[i++])
            }
            else {
                result.push(sortedArrayTwo[j++])
            }
        }
        if (i < sortedArrayOne.length) {
            result.push(sortedArrayOne[i++]);
        }
        if (j < sortedArrayTwo.length) {
            result.push(sortedArrayTwo[j++])
        }
        return result;
    }
    //brute Force Approch
    /**
     *Time Complexcity: BigO(n); Space Complexcity BigO(1)
     */
    removeDuplicates(arr: Array<number>) {
        if (!Array.isArray(arr)) throw Error("Not a Valid input");
        let result: Array<number> = [];
        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
                result.push(arr[i])
            }
        }
        return result;
    }
    //Optimised Two Pointer Approch
    /**
     *TimeComplexcity BigO(n)
     */
    removeDuplicateWithTwoPointers(arr: Array<number>) {
        let i = 0;
        let j = i + 1;
        while (j < arr.length) {
            if (arr[i] !== arr[j]) {
                arr[++i] = arr[j]
            }
            j++
        }
        return (arr.splice(0, i + 1))
    }
    //Brute force Approch
    /**
     *TimeComplexcity BigO(n**2) SpaceComplexcity BigO(1)
     */
    removeElementFormAnArray(arr: Array<number>, target: number) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                for (let j = i + 1; j < arr.length; j++) {
                    arr[j - 1] = arr[j]
                }
                arr.length = arr.length - 1;
                return arr;
            }
        }
    }
    //Better solutions with HashMap
    /**
     *  TimeComplexcity: BigO(n);
     *  SpaceComplexcity: BigO(n) :Array k size k sath increase horahi hai
     */
    removeElementFromArrayWithHasMap(arr: Array<number>, target: number) {
        let map = new Map<number, number>();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== target)
                map.set(arr[i], i)
        }
        return [...map].map(([item, _]) => item)
    }

    /**
     * Optimised Solution for Removing an Element
     * TimeComplexcity Big(n)
     */
    removeElementFromArrayWithTwoPointer(arr: Array<number>, target: number) {
        if (!Array.isArray(arr) || arr.every((el) => typeof el !== "number"))
            throw new Error("Please Give An Only Array<number>")
        let i = 0, j = 0;
        while (i < arr.length) {
            if (arr[i] === target) {
                i++
            }
            else {
                arr[j] = arr[i]
                i++;
                j++
            }
        }
        arr.length = j;
        return arr;
    }
    //moveZeros
    /**
     *  Brute  Force
     * TimeComplexcity BigO(n**2)
     */
    moveZero(arr: Array<number>) {
        if (!Array.isArray(arr) || array.every((el) => typeof el !== "number"))
            throw new Error("Please Provide Array<number>");
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                let lastEl = arr[i];
                for (let j = i; j < arr.length; j++) {
                    arr[j] = arr[j + 1]
                    if (j == arr.length - 1) {
                        arr[j] = lastEl
                    }
                }
            }
        }
        return arr;
    }
    //same Program with while loop
    //TimeComplexcity BigO(N**2);
    moveZeroWhileLoop(arr: Array<number>) {
        if (!Array.isArray(arr) || array.every((el) => typeof el !== "number"))
            throw new Error("Please Provide Array<number>");
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                let lastEl = arr[i];
                let j = i;
                while (j < arr.length - 1) {
                    arr[j] = arr[j + 1];
                    j++
                }
                arr[j] = lastEl
            }
        }
        return arr;
    }
    //TimeComplexcity BigO(n) spaceComplexcity BigO(1)
    moveZeroTwoPointer(arr: Array<number>) {
        if (!Array.isArray(arr) || array.every((el) => typeof el !== "number"))
            throw new Error("Please Provide Array<number>");
        let i = 0, j = 0, count = 0;
        while (j < arr.length) {
            if (arr[j] !== 0) {
                arr[i] = arr[j];
                i++
                count++
            }
            j++
        }
        while (i < arr.length) {
            arr[i] = 0;
            i++
        }
        return arr;
    }

    //sqaureSortedArray BruteForce;
    squreSortedTwoArray(arrOne: Array<number>, arrTwo: Array<number>) {
        let result = [];
        for (let i = 0; i < arrOne.length; i++) {
            result.push(arrOne[i])
        }
        for (let j = 0; j < arrTwo.length; j++) {
            result.push(arrTwo[j])
        }
        result = result.map((el) => el ** 2)
        return this.bubbleSort(result) ///calling a private method  TimeComplexcity BigO(n**2)

    }
    //BubbleSort Algorithm
    // TimeComplexcity BigO(n**2)
    // SpaceComplexcity BigO(1)
    private bubbleSort(arr: Array<number>) {
        if (!Array.isArray(arr) || arr.every((el) => typeof el !== "number"))
            throw new Error("Only Array<number> is Allowd")
        for (let i = 0; i < arr.length; i++) {
            let flag = true;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    flag = false;
                }
            }
            if (flag) {
                return arr;
            }
        }
        return arr;
    }

    //squareSortedArray Optimised Approach With Two Pointer
    //It will Only work on an Sorted Array
    //TimeComplexcity : BigO(n)
    squareSortedArrayWithTwoPointer(arrOne: Array<number>, arrTwo: Array<number>) {
        arrOne = arrOne.sort((a, b) => a - b);
        arrTwo = arrTwo.sort((a, b) => a - b);
        let i = 0, j = 0, result: Array<number> = [];
        while (i < arrOne.length && j < arrTwo.length) {
            if (arrOne[i] > arrTwo[j]) {
                result.push(arrTwo[j] ** 2);
                j++
            }
            else {
                result.push(arrOne[i] ** 2);
                i++
            }
        }
        while (i < arrOne.length) {
            result.push(arrOne[i] ** 2)
            i++
        }
        while (j < arrTwo.length) {
            result.push(arrTwo[j] ** 2)
            j++
        }
        return result;
    }

    //reverseVowvelsofAString Brute Force
    //TimeComplexcity : BigO(n)
    reverseAVowvelofAString(elm: string) {
        if (!/^[a-zA-z]+$/.test(elm))
            throw new Error("Please Only 'Alpha Numbers' are allowed");
        let vowels = ["a", "e", "i", "o", "u"];
        let elmArray = elm.split("");
        let vowelArray = [];
        let reverseVowelArray = [];
        let insertionIndex = 0;
        //assorting vowels from an Array  BigO(n);
        for (let i = 0; i < elmArray.length; i++) {
            if (vowels.includes(elmArray[i])) {
                vowelArray.push(elmArray[i]);
            }
        }
        //reverse Vowel Characters
        for (let i = vowelArray.length - 1; i >= 0; i--) {
            reverseVowelArray.push(vowelArray[i]);
        }
        //re-looping things from an Array for assortion;
        for (let i = 0; i < elmArray.length; i++) {
            if (vowels.includes(elmArray[i])) {
                elmArray[i] = reverseVowelArray[insertionIndex++]
            }
        }
        return elmArray.join("")
    }

    //Optimised Two PointerApproach
    //Time Complexcity BigO(n) SpaceComplexcity BigO(1)
    reverseAStrignWithTwoPointers(str: string | Array<string>) {
        if (typeof str === "string") {
            if (!/^[a-zA-Z]+$/.test(str))
                throw new Error("Only Strings are Allowed")
            str = str.split("")
        }
        //HashMap to find Vowels it uses BigO(1)
        let vowelMap = new Map<string, number>();
        ["a", "e", "i", "o", "u"].forEach((el, index) => vowelMap.set(el, index))
        let i = 0, j = str.length - 1;
        //while Loop
        while (i < j) {
            if (vowelMap.has(str[i]) && vowelMap.has(str[j])) {
                [str[i], str[j]] = [str[j], str[i]]
                i++;
                j++
            }
            else if (vowelMap.has(str[i])) {
                j--
            }
            else {
                i++
            }
        }
        return str.join("")
    }


    //TwoSumWithAllUniquePairsofTarget
    twoSumWithAllUniquePairOfTarget(arr: Array<number>, target: number) {
        if (!Array.isArray(arr) || arr.every((el) => typeof el !== "number")) {
            throw new Error("Please Provide a correct input");
        }
        let i = 0, j = arr.length - 1;
        let result: Array<number>[] = []
        let sum: number;
        while (i < j) {
            sum = arr[i] + arr[j]
            if (sum === target) {
                result.push([arr[i], arr[j]])
                i++;
                j--;

                for (let it = i; it < arr.length; it++) {
                    if (arr[it - 1] === arr[it]) i++;
                    else break;
                }

                for (let jt = j; jt >= 0; jt--) {
                    if (arr[jt + 1] === arr[jt]) j++;
                    else break;
                }
            }
            else if (sum < target) i++;
            else j--
        }
        if (result.length <= 0) return -1;
        return result;
    }

    //ThreeSumThatEqualstoZero
    //space complexcity :BigO(n**2)
    threeSumZeroWithTwoPointer(arr: Array<number>) {
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





}
let array = [2, 3, 4, 8, 16]; let target = 12;
let arrOne = [1, 7, 5, 3], arrTwo = [8, 6, 2, 4, 10, 12]
let arrayWithZero = [1, 0, 4, 5, 0, 3, 0, 8, 0, 9]
let arrayWithDuplicates = [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 8]

let findPairDuplicate = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5], targetTwo = 6;

let findingThreeSum = [-2, 0, 1, 1, 2, -1, -4];

const pointer = new TwoPointer()
console.log(pointer.threeSumZeroWithTwoPointer(findingThreeSum))

