const request = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
};

const getRandomNums = async (count: number) => {
  const nums: number[] = [];
  for (let i = 0; i < count; i++) {
    const res: number = await request();
    nums.push(res);
  }
  return nums;
};

export { getRandomNums };
