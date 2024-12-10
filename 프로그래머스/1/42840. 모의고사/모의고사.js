function solution(answers) {
  var answer = [0, 0, 0];
  var prize = [];
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; answers.length > i; i++) {
    if (answers[i] == arr1[i % 5]) {
      answer[0]++;
    }
    if (answers[i] == arr2[i % 8]) {
      answer[1]++;
    }
    if (answers[i] == arr3[i % 10]) {
      answer[2]++;
    }
  }

  const max = Math.max(...answer);
  for (let i = 0; i < 3; i++) {
    if (answer[i] == max) {
      prize.push(i + 1);
    }
  }

  console.log(prize);

  return prize;
}

solution([1, 3, 2, 4, 2]);

// 1번은 5개씩 반복됨, 2번은 8개씩 반복, 3번은 10개씩 반복
// 비효율적인 방식밖에 떠오르지 않는데.. => 결국 구글링
