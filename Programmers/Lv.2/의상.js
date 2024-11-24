function solution(clothes) {
  let countType = 0;
  const countCloth = clothes.length;

  let sortedClothes = clothes.reduce((acc, cur) => {
    const type = cur[1];
    if (!acc[type]) {
      countType++;
      acc[type] = 0;
    }
    acc[type]++;
    return acc;
  }, {});

  const values = Object.values(sortedClothes);
  const result = values.reduce((acc, cur) => acc * (cur + 1), 1);
  console.log(result - 1);
  return result - 1;
}

solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);

// 입력받은 배열을 종류별로 나눈다
// 각 종류별 개수, 종류의 개수를 센다
// 계산한다.
// 너무 복잡하지 않나?  sort만 잘하면 개수는 쉽게 셀 수 있을 것 같은데
// 3
// 2
// 1
// 2

// 근데 종류가 몇가지가 되는지 모르네..?

// 개수 세는 거 능지 이슈...
