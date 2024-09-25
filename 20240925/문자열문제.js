// 1. 문자열에서 첫 번째 중복 문자 찾기
// 주어진 문자열에서 첫 번째로 중복된 문자를 찾아 반환하는 함수를 작성하세요.
function firstDuplicateChar(str) {
    var arr = str.split('')
    for(let i =0; i<arr.length;i++){
        let c = arr[i];
        let num = 0;
        for(let j =0;j<arr.length;j++){
            if(c==arr[j]){
                num++;
                if (num>=2){
                    return c;
                }
            }
        }
    }
}
console.log(firstDuplicateChar("programming")); // "r"
console.log(firstDuplicateChar("abcbaabc")); // "b"

function firstDuplicateCharAnswer1(str){
    for(let s of str){
        let count = 0;
        for(let ss of str){
            if(s == ss){
                count++;
                if(count >= 2){
                    return s;
                }
            }
        }
    }
}

function firstDuplicateCharAnswer2(str){
    for(let i =0; i<str.length; i++){
        let s = str[i];
        let newStr = str.slice(i+1)
        let result = newStr.includes(s); // slice(시작인덱스, 마지막인덱스)
        if (result){
            return s;
        }
    }
}

function firstDuplicateCharAnswer2(str){
    for(let i =0; i<str.length; i++){
        if (str.slice(i+1).includes(str[i])){
            return str[i];
        }
    }
}

// 2. 문자열에서 모음 제거하기
// 주어진 문자열에서 모든 모음(a, e, i, o, u)을 제거하는 함수를 작성하세요.
function removeVowels(str) {
    // 코드를 작성하세요.
}
console.log(removeVowels("hello world")); // "hll wrld"

// 3. 문자열에서 단어별로 대문자로 변환하기
// 문자열을 공백을 기준으로 분리한 후, 각 단어의 첫 글자를 대문자로 변환한 문자열을 반환하는 함수를 작성하세요.
function capitalizeWords(str) {
    // 코드를 작성하세요.
}
console.log(capitalizeWords("hello world")); // "Hello World"

// 4. 문자열 압축하기
// 반복되는 문자를 숫자로 압축하는 함수를 작성하세요.
function compressString(str) {
    // 코드를 작성하세요.
}
console.log(compressString("aaabbc")); // "a3b2c1"

// 5. 문자열에서 중복 문자 제거
// 문자열에서 중복된 문자를 제거하고 유일한 문자만 남기는 함수를 작성하세요.
function removeDuplicateCharacters(str) {
    // 코드를 작성하세요.
}
console.log(removeDuplicateCharacters("mississippi")); // "misp"