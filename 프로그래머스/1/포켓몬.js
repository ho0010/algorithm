function solution(nums) {
  var answer = 0;
  let count = 0;

  nums.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
      count++;
    }
    return acc;
  }, []);

  answer = Math.min(nums.length / 2, count);
  console.log(answer);
  return answer;
}
solution([3, 3, 3, 2, 2, 4]);

// 전체 배열을 순휘하면서 서로 다른 종류의 포켓몬을 counting
//  n/2 랑 counting 중에 작은 값을 반환
