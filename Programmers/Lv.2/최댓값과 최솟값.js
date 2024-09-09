// 79%

function solution(s) {
  var answer = "";

  let max = 0;
  let min = 0;

  array = s.split(" ").map(Number);
  length = array.length;

  if (array[0] >= array[1]) {
    max = array[0];
    min = array[1];
  } else {
    max = array[1];
    min = array[0];
  }

  for (i = 2; i < length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  answer = min + " " + max;
  return answer;
}

// String을 자른것이기 때문에 숫자가 아닌 문자열로 인식된다.
// 때문에 Number로 바꿔야 의도대로 처리된다.
