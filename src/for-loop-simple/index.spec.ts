import { expect } from 'chai';

import { getRandomNums } from '.';

describe('getRandomNums test suites', () => {
  it('should have correct length', async () => {
    const count = 3;
    const nums = await getRandomNums(count);
    expect(nums).to.have.lengthOf(count);
  });
});
