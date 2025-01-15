// 70% -

function solution(n) {
  let batteryUsage = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      batteryUsage += 1;
      n -= 1;
    }
    n = n / 2;
  }

  return batteryUsage;
}

//약간 능지 테스트인데 생각을 조금 달리해보는 연습이 필요핟듯
