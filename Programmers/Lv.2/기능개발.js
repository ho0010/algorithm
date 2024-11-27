function solution(progresses, speeds) {
  var answer = [];
  let countArr = [];
  let num = 0;
  let count = 1;

  for (let i = 0; i < progresses.length; i++) {
    num = Math.ceil((100 - progresses[i]) / speeds[i]);
    countArr.push(num);
  }

  for (let i = 0; i < countArr.length; i++) {
    for (let j = i; j < countArr.length; j++) {
      if (countArr[i] >= countArr[j + 1]) {
        count++;
      } else {
        answer.push(count);
        count = 1;
        i = j;
        break;
      }
    }
  }

  return answer;
}

// 모든 progress의 값이 100이 될 때까지 수행을 하고 => 그냥 계산해도 될 것 같음
// progress의 값이 될 때까지 걸린 시간을 배열로 기록한다.
// 가장 앞에 있는 인덱스의 값보다 큰 값이 나타날 때까지 count한다
// + 자기보다 큰 값이 나타나면 count 값을 return에 담는다.

// Ceil 올림함수 사용 => 나누기 할 때는 생각을 좀 해야 함
