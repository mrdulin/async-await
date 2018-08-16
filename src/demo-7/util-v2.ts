async function getConfigAsync() {
  console.log('getConfigAsync');
  return {
    meta: await 'hello'
  };
}

const config: Promise<any> = (async () => await getConfigAsync())();

async function setToken() {
  const conf = await config;
  console.log('setToken: ', conf);
}

async function getToken() {
  const conf = await config;
  console.log('getToken: ', conf);
}

export { setToken, getToken };
