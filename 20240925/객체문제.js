// 1. 객체의 키-값 쌍 거꾸로 만들기
// 객체의 키와 값을 서로 바꾼 새로운 객체를 반환하는 함수를 작성하세요.
function invertObject(obj) {
    //1. 새로운 빈 객체를 생성한다.
    //2. 기존의 객체를 전부 순회한다 (for-in)
    //2-1. 새로운 객체에 기존 객체의 키-값의 반대를 저장한다
    //3. 새로운 객체를 반환한다
    var newObj = {};
    for(let key in obj){
        newObj[obj[key]] = key; 
    }
    return newObj;
}
// 객체에 새로운 값을 추가할 때는 ex) obj1.d = 4; 인데
// d 자리에 문자를 제외한 자료형을 저장해야 할 때는
// . 대신 [] 사용하기
console.log(invertObject({ a: 1, b: 2, c: 3 })); // { 1: "a", 2: "b", 3: "c" }

// 2. 객체에서 키가 특정 값인 항목 찾기
// 객체 배열에서 주어진 키의 값이 특정 값과 일치하는 첫 번째 객체를 반환하는 함수를 작성하세요.
function findObjectByKey(arr, key, value) {
    for (let i = 0;i<arr.length;i++){
        if(arr[i][key] == value){
            return arr[i];
        }
    }
}
const objects = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
console.log(findObjectByKey(objects, 'id', 2)); // { id: 2, name: "Jane" }

// 3. 객체 합치기
// 두 개의 객체를 합쳐서 반환하는 함수를 작성하세요. 같은 키를 가지는 경우 두 번째 객체의 값을 우선합니다.
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }

// 4. 객체에서 특정 키만 추출하기
// 객체에서 특정 키들만 추출하여 새로운 객체를 반환하는 함수를 작성하세요.
function pick(obj, keys) {
    var newObj = {};
    for(let key in obj){
        for (let findKdy of keys){
            if (key === findKdy){
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // { a: 1, c: 3 }

// 5. 객체 배열에서 키 값의 총합 구하기
// 객체 배열에서 특정 키의 값들의 합을 구하는 함수를 작성하세요.
function sumByKey(arr, key) {
    let sum = 0;
    for(let i =0;i<arr.length;i++){
        sum+=arr[i][key];
    }
    return sum;
    
}
const data = [{ value: 10 }, { value: 20 }, { value: 30 }];
console.log(sumByKey(data, 'value')); // 60