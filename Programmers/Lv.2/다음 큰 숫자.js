function solution(n) {
  var answer = 0;
  const count = countOne(n);
  let nextNum = n;

  while (1) {
    nextNum++;
    if (count == countOne(nextNum)) break;
  }

  answer = nextNum;
  return answer;
}

const countOne = (n) => {
  let count = 0;

  while (n > 0) {
    if (n % 2 == 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};

solution(78);

// 자연수를 이진수로 표현
// 이진수에서 1의 개수를 센다
// 이진수로 1씩 키워가며 1의 개수가 같은 것을 반환

//그냥 하나씩 키우고 1의 개수가 맞으면 된다는 아이디어
