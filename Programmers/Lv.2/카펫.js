//72%
function solution(brown, yellow) {
  let height, width, sum, product;

  sum = (brown - 4) / 2 + 4;
  product = brown + yellow;

  for (i = 1; i <= sum / 2; i++) {
    height = i;
    width = sum - i;
    if (product === height * width)
      return [Math.max(width, height), Math.min(width, height)];
  }
}
