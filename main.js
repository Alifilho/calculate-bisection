const calcFunc = (func, x) => eval(func.replaceAll('x', x));

const calcAvg = (a, b) => (a + b) / 2;

const getEp = (a, b, ep, func) => {
  if ((a - b) * -1 < ep) {
    console.log([a, b]);
    return;
  }

  const avg = calcAvg(a, b);

  if (calcFunc(func, a) < 0 && calcFunc(func, avg) < 0) getEp(a, avg, ep, func);
  else getEp(avg, b, ep, func);
};

const calcSquare = (func, start, end, ep) => {
  for (let i = start - 1; i <= end; i++) {
    const prev = calcFunc(func, i - 1);
    const act = calcFunc(func, i);

    if ((prev < 0 && act > 0) || (prev > 0 && act < 0))
      getEp(i - 1, i, ep, func);
  }
};

calcSquare('(x) ** 3 - (x) * 9 + 3', -6, 6, 0.001);
