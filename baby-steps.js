console.log(
  process.argv.reduce((a, b, c) => (c > 1 ? (a += Number(b)) : null), 0)
);
