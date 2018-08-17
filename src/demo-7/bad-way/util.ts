function getConfig() {
  console.log('getConfig');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ meta: 'hello' });
    }, 3000);
  });
}

async function setToken() {
  const conf = await getConfig();
  console.log('setToken: ', conf);
}

async function getToken() {
  const conf = await getConfig();
  console.log('getToken: ', conf);
}

export { setToken, getToken };
