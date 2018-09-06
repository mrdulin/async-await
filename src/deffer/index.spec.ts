import { Pubsub } from './';

const pubsub = new Pubsub();

const channel: string = 'ai';
pubsub.subscribe(channel).then(data => {
  console.log('data: ', data);
});

setTimeout(() => {
  pubsub.publish(channel, { msg: 'deffer test' });
}, 2000);
