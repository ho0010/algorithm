function solution(priorities, location) {
  var answer = 0;
  let answerArray = [];
  let length = priorities.length;
  let j = 0;
  let countZero = 0;
  let updatedArray = priorities;

  for (let i = 0; i < length; i++) {
    let temp = updatedArray[j];
    console.log(temp);
    if (countZero == length) {
      break;
    }
    if (temp == 0) {
      i--;
      j++;
      j %= length;

      continue;
    }
    let maxNumber = Math.max(...updatedArray);
    let maxIndex = updatedArray.indexOf(maxNumber);

    if (temp < maxNumber) {
      updatedArray[maxIndex] = 0;
      answerArray.push(maxIndex);
      j = maxIndex;
    } else {
      updatedArray[j] = 0;
      answerArray.push(j);
    }
    j++;
    j %= length;
    countZero++;
    console.log(updatedArray);
    console.log(answerArray);
  }
  answer = answerArray.indexOf(location) + 1;

  console.log(answer);
  return answer;
}

solution([2, 3, 3, 2, 9, 3, 3], 3);
// 큐에서 하나씩 빼는 기능
// 빼낸 우선순위와 큐에 남은 다른 우선순위들을 비교해 더 큰 숫자가 있는지 확인하는 로직
// 빼낸 우선순위의 숫자를 넣는게 아니라 위치를 정답 큐를 만들어서 넣는 기능
// 주어진 location에 해당하는 값을 정답 큐에서 찾아서 return하는 기능
