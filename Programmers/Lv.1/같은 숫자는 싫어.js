function solution(arr) {
  var answer = [];

  answer = arr.reduce((acc, cur) => {
    if (cur !== acc[acc.length - 1]) {
      acc.push(cur);
    }
    return acc;
  }, []);

  console.log(answer);

  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);

// 그냥 중복 제거하면 안됨? ㄴㄴ
// 하나씩 검사해서 전에거랑 같으면 안넣는 식으로 하면 될 듯?
