function solution(n) {
  var answer = 0;
  let num = 1,
    count = 1,
    sum = 0;

  while (count <= n) {
    sum = sum + num;
    if (sum >= n) {
      if (sum === n) answer++;
      sum = 0;
      count++;
      num = count;
    } else {
      num++;
    }
  }
  console.log(answer);
  return answer;
}
// 1부터 n보다 작은 수까지 계속 더하기
// 반복문 돌려서 값과 같으면 count++
// 이중 for문은 안될 것 같음
// 반복문은 하나만 사용하고 반복문 로직을 녹여내야함
