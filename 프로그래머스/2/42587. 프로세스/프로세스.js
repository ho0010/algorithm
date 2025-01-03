function solution(priorities, location) {
  let queue = priorities.map((priority, index) => [priority, index]);
  let answer = 0;

  while (queue.length > 0) {
    let [currentPriority, currentIndex] = queue.shift();
    if (queue.some(([priority]) => priority > currentPriority)) {
      queue.push([currentPriority, currentIndex]);
    } else {
      answer++;
      if (currentIndex === location) {
        return answer;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 2));
// 굳이 모든 요소를 정렬 시키는게 아니라 
// 구하는 것에 집중하면 구하는 것의 우선순위만 알아내면 되니까 그거에 집중해서 풀이
