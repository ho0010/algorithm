function solution(numbers) {
    var answer = new Set();
    let nums = numbers.split('');
    
    const getPermutation = (arr,fixed) =>{
        if(arr.length >= 1 ){
            for(let i = 0; i< arr.length;i++){
                const newNum = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i,1);
                
                if(isPrime(Number(newNum))){
                    answer.add(Number(newNum));
                }
                getPermutation(copyArr, newNum);
            }
        }
    }
    getPermutation(nums,'');
    return answer.size
}

function isPrime(x) {
    if (x <= 1) return false; 

    for (let i = 2; i <= Math.sqrt(x); i++){
        if(x % i === 0) return false;
    }
    return true;
}

// 소수인지 확인하는 것 자체는 어렵지 않음 다만 소수의 특성을 생각해서 sqrt로 반복문 횟수를 낮춰줌 => 시간 복잡도 측면에서 효율성 증가

// 순열을 구현해보지 않았기에 어렵게 느껴짐 => 재귀 호출로 순열을 구현하는 것!!