const scheduler = 10 * 1000;
const interval = 5 * 1000;

const maxTimes = scheduler / interval;
let executionTimes = 0;

function request(operation: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(operation);
      resolve();
    }, 1000);
  });
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createUser() {
  executionTimes = executionTimes + 1;
  if (executionTimes > maxTimes) {
    return Promise.reject('exit');
  }
  await request(`create user - timestamp: ${Date.now()}`);
  await sleep(interval);
  await createUser();
}

async function main() {
  console.log('main - timestamp: ', Date.now());
  try {
    await createUser();
  } catch (error) {
    if (error === 'exit') {
      process.exit();
    }
    console.error(error);
  }
}

setInterval(main, scheduler);
