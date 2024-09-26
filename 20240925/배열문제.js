// 1. 배열의 최소값 찾기
// 주어진 배열에서 가장 작은 값을 찾아 반환하는 함수를 작성하세요.
function findMin(arr) {
    let min = 9999;
    for(let n of arr){
        if (n < min){
            min = n;
        }
    }
    return min;
}
console.log(findMin([10, 5, 20, 8])); // 5

// 2. 배열에서 특정 값 제거하기
// 주어진 배열에서 특정 값을 제거하는 함수를 작성하세요.
function removeValue(arr, value) {
    let newArr = [];
    for(let n of arr){
        if(n != value){
            newArr.push(n);
        }
    }
    return newArr;
}
console.log(removeValue([1, 2, 3, 4, 2], 2)); // [1, 3, 4]

// 3. 2차원 배열의 행 합 구하기
// 2차원 배열에서 각 행의 합을 구하여 새로운 배열로 반환하는 함수를 작성하세요.
function sumRows(matrix) {
    let newArr = [];
    for(let i = 0; i < matrix.length; i++){
        let sum =0;
        for(let j = 0;j< matrix[i].length;j++){
            sum+=matrix[i][j];
        }
        newArr.push(sum);
    }
    return newArr;
}
console.log(sumRows([[1, 2], [3, 4], [5, 6]])); // [3, 7, 11]

// 5. 배열에서 중복된 요소 찾기
// 주어진 배열에서 중복된 요소들을 찾아 반환하는 함수를 작성하세요.
function findDuplicates(arr) {
    let newArr = [];
    for(let i =0; i<arr.length;i++){
        let count = 0;
        for(let j=i;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
                if(count >= 2){
                    newArr.push(arr[i]);
                }
            }
        }
    }
    return newArr;
}
console.log(findDuplicates([1, 2, 3, 4, 4, 5, 5])); // [4, 5]