import { expect } from 'chai';

import { getBooksByNames } from './';

describe('getBooksByNames test suites', () => {
  it('should get books correctly', async () => {
    const bookNames = ['react', 'angular'];
    const results = await getBooksByNames(bookNames);
    console.log(results);
    expect(results).to.have.lengthOf(bookNames.length);
  });

  it('should get empty book array', async () => {
    const bookNames = [];
    const results = await getBooksByNames(bookNames);
    console.log(results);
    expect(results).to.have.lengthOf(bookNames.length);
  });

  it('should get books correctly when there is an invalid book name', async () => {
    const bookNames = ['1', 'angular'];
    const results = await getBooksByNames(bookNames);
    console.log(results);
    expect(results).to.have.lengthOf(bookNames.length);
    const firstResult = results[0];
    expect(firstResult.Total).to.be.eql('0');
  });
});
