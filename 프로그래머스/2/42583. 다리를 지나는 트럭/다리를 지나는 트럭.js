function solution(bridge_length, weight, truck_weights) {
  let movingTruck = [];
  let nowTruckWeight = 0;
  let totalCount = 0;

  while (truck_weights.length != 0 || movingTruck.length != 0) {
    for (let i = 0; i < movingTruck.length; i++) {
      if (movingTruck[i][1] == bridge_length) {
        movingTruck.shift();
      }
    }

    let movingTruckSum = 0;
    movingTruck.forEach((num) => {
      movingTruckSum += num[0];
    });

    nowTruckWeight = truck_weights[0];

    if (nowTruckWeight + movingTruckSum <= weight) {
      movingTruck.push([nowTruckWeight, 0]);
      truck_weights.shift();
    }

    totalCount++;
    for (let i = 0; i < movingTruck.length; i++) {
      movingTruck[i][1]++;
    }

  }
  return totalCount;
}
solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
// 대기 트럭 큐에서 하나씩 빼서 다리를 건너는 트럭 큐에 넣는 기능

// 다리를 다 건넌 트럭을 큐에서 빼는 기능

// 대기 트럭 큐에서 가장 앞에 있는 요소 + 다리를 건너는 트럭 무게의 합 <= weight인지 확인하는 기능
// 가능하면 넣기
// 불가능하면 대기
// 위 기능은 초단위로 진행될것임

// 시간 counting하는 기능
// 전체 시간 count
// 다리에 올라간 각 요소 count => 배열을 안에 하나 더 만들어서 count?

// 시작 15:30
//
