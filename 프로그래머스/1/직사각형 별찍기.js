// 79%

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (i = 0; i < b; i++) {
    for (j = 0; j < a; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
});
