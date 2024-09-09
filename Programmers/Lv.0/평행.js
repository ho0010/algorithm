// 52%
function solution(dots) {
  var answer = 0;

  for (i = 0; i < 4; i++) {
    let culx = dots[i][0] - dots[(i + 1) % 4][0];
    let culy = dots[i][1] - dots[(i + 1) % 4][1];

    let inclination = Math.abs(culy / culx);
    console.log(inclination);

    let culx2 = dots[(i + 2) % 4][0] - dots[(i + 3) % 4][0];
    let culy2 = dots[(i + 2) % 4][1] - dots[(i + 3) % 4][1];

    let inclination2 = Math.abs(culy2 / culx2);

    if (inclination == inclination2) {
      answer = 1;
      break;
    } else {
      answer = 0;
    }
  }
  return answer;
}
