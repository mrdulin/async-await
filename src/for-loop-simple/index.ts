const request = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });

const getRandomNums = async (count: number) => {
  const nums = [];
  for (let i = 0; i < count; i++) {
    const res = await request();
    nums.push(res);
  }
  return nums;
};

export { getRandomNums };
