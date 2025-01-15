solution("110010101001");
function solution(s) {
  var answer = [];
  answer[0] = 0;
  answer[1] = 0;
  while (s != "1") {
    let array = s.split("");

    let nextArrayLength = array.length;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 0) {
        nextArrayLength--;
        answer[1]++;
      }
    }
    s = nextArrayLength.toString(2);

    answer[0]++;
  }
  console.log(answer);

  return answer;
}
// 문자열을 배열로 분리 => 배열의 각 값이 0이면 제거 + answer의 [1]에 카운트 +1
// => 0제거후 길이 저장 => 길이를 이진법으로 표현 + answer의 [0]에 카운트 +1

//toString 진법변환할때 좋네
