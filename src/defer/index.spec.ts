import { expect } from 'chai';

import { Pubsub } from '.';

describe('deffer test suites', () => {
  const pubsub = new Pubsub();
  it('should publish and subscribe correctly', () => {
    const channel: string = 'ai';
    const message = { msg: 'deffer test' };
    pubsub.subscribe(channel).then(result => {
      expect(result).to.be.eql(message);
    });
    pubsub.publish(channel, message);
  });
});
