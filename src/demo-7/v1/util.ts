function getConfig() {
  console.log('getConfig');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ meta: 'hello' });
    }, 3000);
  });
}

const config: Promise<any> = (async () => await getConfig())();

async function setToken() {
  const conf = await config;
  console.log('setToken: ', conf);
}

async function getToken() {
  const conf = await config;
  console.log('getToken: ', conf);
}

export { setToken, getToken };
